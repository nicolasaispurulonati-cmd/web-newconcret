/**
 * NEWCONCRET — scripts/seo.js
 * Inyecta metadatos de SEO / AI-readiness en las páginas estáticas e genera los
 * archivos globales. Idempotente: re-ejecutable sin duplicar (usa marcadores).
 *
 *   node scripts/seo.js            → aplica todo
 *   node scripts/seo.js --dry-run  → muestra qué haría, sin escribir
 *
 * Qué hace:
 *  1. En cada página .html: canonical + OpenGraph + Twitter + JSON-LD por tipo
 *     (Organization/WebSite en home, LocalBusiness en contacto, ItemList+Product
 *      en catálogo, BreadcrumbList en todas, etc.).
 *  2. Arregla <title> faltantes.
 *  3. Genera robots.txt (permite bots de IA), sitemap.xml y llms.txt.
 *
 * El blog (blog/**) lo maneja generate-blog.js, que ya inyecta su propio JSON-LD.
 */

const fs   = require('fs');
const path = require('path');
const vm   = require('vm');
const { DOMAIN, ORG, SITE, DEFAULT_OG_IMAGE, SECTIONS, label } = require('./seo-config');

const ROOT    = path.join(__dirname, '..');
const DRY     = process.argv.includes('--dry-run');
const SECTION_KEYS = Object.keys(SECTIONS);

// Títulos para páginas que no tienen <title> (bug detectado en capacitacion).
const TITLE_FIX = {
  'capacitacion': 'Capacitaciones en pisos de hormigón — NewConcret'
};

// ── Utilidades ───────────────────────────────────────────────────────────────
const escAttr = s => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// JSON-LD seguro: evita romper el <script> si algún dato contiene "</script>".
const ldjson = obj => JSON.stringify(obj, null, 2).replace(/</g, '\\u003c');

const abs = u => !u ? '' : (/^https?:\/\//.test(u) ? u : DOMAIN + (u.startsWith('/') ? '' : '/') + u);

function readProductos() {
  const code = fs.readFileSync(path.join(ROOT, 'assets', 'data', 'productos.js'), 'utf8')
    .replace(/const\s+productos\s*=/, 'var productos =');
  const s = {}; vm.createContext(s); vm.runInContext(code, s);
  return s.productos || [];
}

// Páginas a NO indexar (huérfanas / duplicadas / legacy). No reciben canonical
// ni entran al sitemap. newconcret-construccion.html duplica /construccion/.
const EXCLUDE = new Set(['newconcret-construccion.html', '404.html']);

// Lista todas las páginas .html deployables (excluye tooling, admin, fonts, blog).
function listPages() {
  const out = [];
  (function walk(dir) {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, e.name);
      const rel  = path.relative(ROOT, full).replace(/\\/g, '/');
      if (e.isDirectory()) {
        if (/^(node_modules|\.git|\.claude|_img_originals|admin|2|scripts)$/.test(e.name)) continue;
        if (rel === 'assets/fonts') continue;
        if (rel === 'sistema-newconcret') continue;   // landing top-level con SEO propio; NO la subpágina de mantenimiento
        walk(full);
      } else if (e.name.endsWith('.html')) {
        if (rel.startsWith('blog/')) continue;             // lo maneja generate-blog.js
        if (rel.startsWith('assets/fonts/')) continue;
        if (EXCLUDE.has(rel)) continue;                    // huérfanas/duplicadas
        out.push(rel);
      }
    }
  })(ROOT);
  return out.sort();
}

// URL canónica a partir de la ruta del archivo.
function canonicalOf(rel) {
  if (rel === 'index.html') return DOMAIN + '/';
  if (rel.endsWith('/index.html')) return DOMAIN + '/' + rel.slice(0, -'index.html'.length);
  return DOMAIN + '/' + rel;
}

// Segmentos de ruta "limpios" (sin index.html), para breadcrumb / matching.
function segmentsOf(rel) {
  return rel.replace(/\/?index\.html$/, '').replace(/\.html$/, '').split('/').filter(Boolean);
}

function extractTitle(html) {
  const m = html.match(/<title>([\s\S]*?)<\/title>/i);
  return m ? m[1].trim() : '';
}
function extractDesc(html) {
  const m = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([\s\S]*?)["']/i)
         || html.match(/<meta[^>]*content=["']([\s\S]*?)["'][^>]*name=["']description["']/i);
  return m ? m[1].trim() : '';
}

// og:image = hero propio de la página (primer hero desktop referenciado, CSS o <img>)
function extractHeroImage(html) {
  for (const m of html.matchAll(/(?:url\(\s*['"]?|src=["'])[./]*(assets\/img\/hero\/[^'")\s]+\.webp)/gi)) {
    if (!/-mobile\.webp$/i.test(m[1])) return DOMAIN + '/' + m[1];
  }
  return '';
}

// ── Productos bajo un prefijo de ruta (ej. "construccion/equipos") ───────────
function productsUnder(products, prefix) {
  const seen = new Set();
  const list = [];
  for (const p of products) {
    if (p.visible === false) continue;
    const match = (p.rutas || []).some(r => {
      const j = [r['sección'] || r.seccion || '', r['categoría'] || r.categoria || '', r['subcategoría'] || r.subcategoria || '']
        .filter(Boolean).join('/');
      return j === prefix || j.startsWith(prefix + '/');
    });
    if (match && !seen.has(p.id)) { seen.add(p.id); list.push(p); }
  }
  return list;
}

// ── Bloques JSON-LD reutilizables ────────────────────────────────────────────
function organizationNode() {
  return {
    '@type': 'Organization',
    '@id': ORG.id,
    name: ORG.name,
    legalName: ORG.legalName,
    url: ORG.url,
    logo: { '@type': 'ImageObject', url: ORG.logo },
    image: ORG.logo,
    description: ORG.description,
    email: ORG.email,
    telephone: ORG.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: ORG.address.street,
      addressLocality: ORG.address.city,
      addressRegion: ORG.address.region,
      addressCountry: ORG.address.country
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      telephone: ORG.phone,
      email: ORG.email,
      areaServed: 'AR',
      availableLanguage: ['es']
    },
    sameAs: ORG.sameAs
  };
}

function breadcrumbNode(segs, url) {
  const items = [{ '@type': 'ListItem', position: 1, name: 'Inicio', item: DOMAIN + '/' }];
  let acc = DOMAIN + '/';
  segs.forEach((seg, i) => {
    acc += seg + '/';
    items.push({ '@type': 'ListItem', position: i + 2, name: label(seg), item: acc });
  });
  return { '@type': 'BreadcrumbList', itemListElement: items };
}

function productNode(p) {
  const node = {
    '@type': 'Product',
    name: p.nombre,
    description: p.descripcion || p.nombre,
    sku: p.sku || undefined,
    image: p.imagen ? abs(p.imagen) : undefined,
    brand: { '@type': 'Brand', name: ORG.name },
    category: p.cat_label || p.categoria || undefined
  };
  if (p.storeUrl) {
    node.offers = {
      '@type': 'Offer',
      url: p.storeUrl,
      availability: 'https://schema.org/InStock',
      priceCurrency: 'ARS',
      seller: { '@id': ORG.id }
    };
  }
  return node;
}

function itemListNode(products, name) {
  return {
    '@type': 'ItemList',
    name,
    numberOfItems: products.length,
    itemListElement: products.slice(0, 50).map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: productNode(p)
    }))
  };
}

// ── JSON-LD por página ───────────────────────────────────────────────────────
function buildJsonLd(rel, segs, url, title, desc, products) {
  const graph = [];

  if (rel === 'index.html') {
    graph.push(organizationNode());
    graph.push({
      '@type': 'WebSite', '@id': SITE.id, url: DOMAIN + '/', name: SITE.name,
      inLanguage: SITE.inLanguage, publisher: { '@id': ORG.id }
    });
    return graph;
  }

  graph.push(breadcrumbNode(segs, url));

  const top = segs[0];

  if (top === 'contacto') {
    graph.push({
      '@type': ['LocalBusiness', 'Store'], '@id': DOMAIN + '/#localbusiness',
      name: ORG.name, image: ORG.logo, url, telephone: ORG.phone, email: ORG.email,
      address: {
        '@type': 'PostalAddress', streetAddress: ORG.address.street,
        addressLocality: ORG.address.city, addressRegion: ORG.address.region,
        addressCountry: ORG.address.country
      },
      areaServed: { '@type': 'Country', name: 'Argentina' },
      parentOrganization: { '@id': ORG.id }, sameAs: ORG.sameAs,
      description: ORG.description
    });
  } else if (top === 'nosotros') {
    graph.push({ '@type': 'AboutPage', url, name: title, description: desc, about: { '@id': ORG.id } });
  } else if (top === 'productos') {
    graph.push({ '@type': 'CollectionPage', url, name: title, description: desc, isPartOf: { '@id': SITE.id } });
    graph.push(itemListNode(productsUnder(products, ''), 'Catálogo NewConcret'));
  } else if (SECTION_KEYS.includes(top)) {
    const prefix = segs.join('/');
    const list   = productsUnder(products, prefix);
    graph.push({ '@type': 'CollectionPage', url, name: title, description: desc, isPartOf: { '@id': SITE.id } });
    if (list.length) graph.push(itemListNode(list, title));
  } else {
    graph.push({ '@type': 'WebPage', url, name: title, description: desc, isPartOf: { '@id': SITE.id } });
  }

  return graph;
}

// ── Bloque de <head> a inyectar ──────────────────────────────────────────────
const MARK_START = '<!-- seo:start (auto — scripts/seo.js · NO editar a mano) -->';
const MARK_END   = '<!-- seo:end -->';

function buildBlock(rel, html, products) {
  const segs  = segmentsOf(rel);
  const url   = canonicalOf(rel);
  let   title = extractTitle(html) || TITLE_FIX[segs.join('/')] || ORG.name;
  const desc  = extractDesc(html) || ORG.description;
  const ogImg = extractHeroImage(html) || DEFAULT_OG_IMAGE;
  const graph = buildJsonLd(rel, segs, url, title, desc, products);

  const ld = graph.length === 1
    ? { '@context': 'https://schema.org', ...graph[0] }
    : { '@context': 'https://schema.org', '@graph': graph };

  const lines = [
    MARK_START,
    `<link rel="canonical" href="${escAttr(url)}">`,
    `<meta property="og:type" content="${rel === 'index.html' ? 'website' : 'website'}">`,
    `<meta property="og:site_name" content="${escAttr(ORG.name)}">`,
    `<meta property="og:locale" content="${SITE.locale}">`,
    `<meta property="og:title" content="${escAttr(title)}">`,
    `<meta property="og:description" content="${escAttr(desc)}">`,
    `<meta property="og:url" content="${escAttr(url)}">`,
    `<meta property="og:image" content="${escAttr(ogImg)}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${escAttr(title)}">`,
    `<meta name="twitter:description" content="${escAttr(desc)}">`,
    `<meta name="twitter:image" content="${escAttr(ogImg)}">`,
    `<script type="application/ld+json">\n${ldjson(ld)}\n</script>`,
    MARK_END
  ];
  return { block: lines.map(l => '    ' + l).join('\n'), needsTitle: !extractTitle(html), title };
}

// Inserta/reemplaza el bloque + arregla <title> faltante. Devuelve html nuevo.
function applyToHtml(rel, html, products) {
  const { block, needsTitle, title } = buildBlock(rel, html, products);

  let out = html;
  // 1) Title faltante: insertarlo después de <meta charset...> o tras <head>.
  if (needsTitle) {
    const tag = `<title>${escAttr(title)}</title>`;
    if (/<meta[^>]*charset[^>]*>/i.test(out)) {
      out = out.replace(/(<meta[^>]*charset[^>]*>)/i, `$1\n    ${tag}`);
    } else {
      out = out.replace(/(<head[^>]*>)/i, `$1\n    ${tag}`);
    }
  }

  // 2) Bloque SEO: reemplazar entre marcadores o insertar antes de </head>.
  const re = new RegExp(`[ \\t]*${MARK_START.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[\\s\\S]*?${MARK_END.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'i');
  if (re.test(out)) {
    out = out.replace(re, block);
  } else {
    out = out.replace(/([ \t]*)<\/head>/i, `${block}\n$1</head>`);
  }
  return out;
}

// ── Archivos globales ────────────────────────────────────────────────────────
function buildRobots() {
  const aiBots = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-Web',
    'anthropic-ai', 'PerplexityBot', 'PerplexityBot', 'Google-Extended', 'Applebot-Extended',
    'Amazonbot', 'CCBot', 'Bytespider', 'Meta-ExternalAgent'];
  const uniq = [...new Set(aiBots)];
  return [
    '# robots.txt — NewConcret',
    '# Buscadores y crawlers de IA: acceso completo al contenido público.',
    '',
    'User-agent: *',
    'Allow: /',
    'Disallow: /admin/',
    '',
    '# Crawlers de IA / LLM permitidos explícitamente (entrenamiento + búsqueda)',
    ...uniq.flatMap(b => [`User-agent: ${b}`, 'Allow: /', '']),
    `Sitemap: ${DOMAIN}/sitemap.xml`,
    ''
  ].join('\n');
}

function buildSitemap(pages) {
  // Incluye también las páginas del blog (las del listado + artículos).
  const blogPages = [];
  (function walk(dir) {
    if (!fs.existsSync(dir)) return;
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      if (e.isDirectory()) walk(path.join(dir, e.name));
      else if (e.name === 'index.html') {
        const rel = path.relative(ROOT, path.join(dir, e.name)).replace(/\\/g, '/');
        blogPages.push(rel);
      }
    }
  })(path.join(ROOT, 'blog'));

  const all = [...new Set([...pages, ...blogPages])].sort();
  const urls = all.map(rel => {
    const loc  = canonicalOf(rel);
    const segs = segmentsOf(rel);
    const prio = rel === 'index.html' ? '1.0' : segs.length <= 1 ? '0.8' : segs.length === 2 ? '0.6' : '0.5';
    let mtime;
    try { mtime = fs.statSync(path.join(ROOT, rel)).mtime.toISOString().slice(0, 10); }
    catch { mtime = new Date().toISOString().slice(0, 10); }
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${mtime}</lastmod>\n    <priority>${prio}</priority>\n  </url>`;
  });
  return '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls.join('\n') + '\n</urlset>\n';
}

function buildLlms(products) {
  const articulosPath = path.join(ROOT, 'assets', 'data', 'articulos.js');
  let arts = [];
  try {
    const code = fs.readFileSync(articulosPath, 'utf8').replace(/const\s+articulos\s*=/, 'var articulos =');
    const s = {}; vm.createContext(s); vm.runInContext(code, s); arts = s.articulos || [];
  } catch { /* sin blog */ }

  const L = [];
  L.push('# NewConcret');
  L.push('');
  L.push('> ' + ORG.description);
  L.push('');
  L.push('NewConcret comercializa maquinaria, insumos y químicos para pisos de hormigón, ' +
         'y dicta capacitaciones profesionales. Sede en Bragado, Buenos Aires, Argentina. ' +
         'Atención por WhatsApp (' + ORG.whatsapp + ') y email (' + ORG.email + ').');
  L.push('');
  L.push('## Áreas');
  for (const k of SECTION_KEYS) {
    const s = SECTIONS[k];
    L.push(`- [${s.label}](${DOMAIN}/${k}/): ${s.desc}`);
  }
  L.push('');
  L.push('## Catálogo');
  L.push(`- [Catálogo completo de productos](${DOMAIN}/productos/): ${products.filter(p => p.visible !== false).length} productos de maquinaria, insumos y químicos para pisos de hormigón.`);
  L.push('');
  L.push('## Páginas principales');
  L.push(`- [Inicio](${DOMAIN}/)`);
  L.push(`- [Nosotros](${DOMAIN}/nosotros/): Quiénes somos y nuestra experiencia.`);
  L.push(`- [Capacitaciones](${DOMAIN}/capacitacion/): Formación profesional en pulido y tratamiento de pisos de hormigón.`);
  L.push(`- [Contacto](${DOMAIN}/contacto/): ${ORG.address.street}, ${ORG.address.city}, ${ORG.address.region}, Argentina.`);
  if (arts.length) {
    L.push('');
    L.push('## Blog (guías técnicas)');
    arts.filter(a => a.visible !== false)
      .sort((a, b) => String(b.fecha).localeCompare(String(a.fecha)))
      .forEach(a => L.push(`- [${a.titulo}](${DOMAIN}/blog/${a.slug}/): ${(a.resumen || '').trim()}`));
  }
  L.push('');
  return L.join('\n');
}

// ── Ejecución ────────────────────────────────────────────────────────────────
function run() {
  const products = readProductos();
  const pages = listPages();

  let changed = 0, titlesFixed = 0;
  for (const rel of pages) {
    const file = path.join(ROOT, rel);
    const html = fs.readFileSync(file, 'utf8');
    if (!extractTitle(html)) titlesFixed++;
    const out = applyToHtml(rel, html, products);
    if (out !== html) {
      changed++;
      if (!DRY) fs.writeFileSync(file, out, 'utf8');
    }
  }

  const robots  = buildRobots();
  const sitemap = buildSitemap(pages);
  const llms    = buildLlms(products);
  if (!DRY) {
    fs.writeFileSync(path.join(ROOT, 'robots.txt'), robots, 'utf8');
    fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), sitemap, 'utf8');
    fs.writeFileSync(path.join(ROOT, 'llms.txt'), llms, 'utf8');
  }

  const tag = DRY ? '[DRY-RUN] ' : '';
  console.log(`${tag}Páginas procesadas: ${pages.length} (modificadas: ${changed}, títulos arreglados: ${titlesFixed})`);
  console.log(`${tag}Generados: robots.txt, sitemap.xml (${(sitemap.match(/<url>/g) || []).length} URLs), llms.txt`);
  console.log(`${tag}Dominio: ${DOMAIN}`);
}

module.exports = { run, buildRobots, buildSitemap, buildLlms };

if (require.main === module) run();
