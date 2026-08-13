/**
 * NEWCONCRET — generate-blog.js
 * Lee assets/data/articulos.js y genera páginas estáticas del blog:
 *   - blog/index.html              (listado de artículos)
 *   - blog/<slug>/index.html       (cada artículo)
 * El cuerpo de cada artículo se escribe en Markdown y se convierte a HTML.
 *
 * Uso CLI:   node generate-blog.js
 * Como módulo:  const { generateBlog } = require('./generate-blog'); generateBlog();
 */

const fs   = require('fs');
const path = require('path');
const vm   = require('vm');
const { marked } = require('marked');
const sanitizeHtml = require('sanitize-html');
const { DOMAIN, ORG, SITE } = require('./scripts/seo-config');

// Sanitización del HTML del artículo: el cuerpo se escribe en Markdown desde el
// admin, pero marked NO sanitiza (deja pasar <script>, onerror=, javascript:…).
// Como estas páginas se sirven en producción, limpiamos el resultado.
const SANITIZE = {
  allowedTags: ['h1','h2','h3','h4','h5','h6','p','a','ul','ol','li','blockquote',
    'code','pre','strong','em','b','i','u','s','del','hr','br','span','div',
    'table','thead','tbody','tr','th','td','img','figure','figcaption'],
  allowedAttributes: {
    a:   ['href','title','target','rel'],
    img: ['src','alt','title','loading','width','height'],
    '*': ['class']
  },
  allowedSchemes: ['http','https','mailto','tel'],     // bloquea javascript:
  transformTags: {
    a: sanitizeHtml.simpleTransform('a', { rel: 'noopener noreferrer' })
  }
};

// JSON-LD seguro (escapa "<" para no romper el <script>).
const ldjson = obj => JSON.stringify(obj, null, 2).replace(/</g, '\\u003c');
const absUrl = u => !u ? '' : (/^https?:\/\//.test(u) ? u : DOMAIN + (u.startsWith('/') ? '' : '/') + u);

const ROOT = __dirname;

// ── Utilidades ──────────────────────────────────────────────────────────────
function leerArticulos() {
    const filePath = path.join(ROOT, 'assets', 'data', 'articulos.js');
    const code = fs.readFileSync(filePath, 'utf8').replace(/const\s+articulos\s*=/, 'var articulos =');
    const sandbox = {};
    vm.createContext(sandbox);
    vm.runInContext(code, sandbox);
    return sandbox.articulos || [];
}

const MESES = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto',
               'septiembre','octubre','noviembre','diciembre'];

function fechaLarga(iso) {
    if (!iso) return '';
    const [y, m, d] = iso.split('-').map(Number);
    if (!y || !m || !d) return iso;
    return `${d} de ${MESES[m - 1]} de ${y}`;
}

function esc(s) {
    return String(s == null ? '' : s)
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function slugify(s) {
    return String(s || '').toLowerCase().trim()
        .normalize('NFD').replace(/[̀-ͯ]/g, '')
        .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

// ── Esqueleto HTML compartido ───────────────────────────────────────────────
// `root` = ruta relativa a la raíz del sitio para el script layout.js
// (layout.js calcula su root contando los "../" de su propio src).
function pagina({ title, description, ogImage, canonical, ogType = 'website', jsonld, root, bodyClass, content }) {
    const ogImageAbs = ogImage ? absUrl(ogImage) : '';
    return `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}">
    ${canonical ? `<link rel="canonical" href="${esc(canonical)}">` : ''}
    <meta property="og:type" content="${esc(ogType)}">
    <meta property="og:site_name" content="${esc(SITE.name)}">
    <meta property="og:locale" content="${SITE.locale}">
    <meta property="og:title" content="${esc(title)}">
    <meta property="og:description" content="${esc(description)}">
    ${canonical ? `<meta property="og:url" content="${esc(canonical)}">` : ''}
    ${ogImageAbs ? `<meta property="og:image" content="${esc(ogImageAbs)}">` : ''}
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${esc(title)}">
    <meta name="twitter:description" content="${esc(description)}">
    ${ogImageAbs ? `<meta name="twitter:image" content="${esc(ogImageAbs)}">` : ''}
    ${jsonld ? `<script type="application/ld+json">\n${ldjson(jsonld)}\n    </script>` : ''}
    <link rel="icon" type="image/x-icon" href="/logos/Favicon.ico">
    <link rel="stylesheet" href="/assets/css/estilo.css?v=43">
    <link rel="stylesheet" href="/assets/css/nav.css?v=2.0">
    <link rel="stylesheet" href="/assets/css/blog.css?v=1.9">
</head>
<body${bodyClass ? ` class="${bodyClass}"` : ''}>

    <div id="cur"></div>
    <div id="ring"></div>

    <div id="nav-placeholder"></div>

${content}

    <div id="footer-placeholder"></div>

    <script src="${root}assets/js/layout.js?v=3.5"></script>
    <script src="/assets/js/main.js?v=3.0"></script>
    <script src="/assets/js/nav.js?v=3.0"></script>
    <script>
        document.documentElement.classList.add('js-loaded');
        const obs = new IntersectionObserver(es => es.forEach(e => {
            if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
        }), { threshold: .12 });
        document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    </script>
</body>
</html>
`;
}

// ── Card de artículo (para el listado) ──────────────────────────────────────
function card(a, i) {
    const portada = a.portada || '/assets/img/hero/productos.webp';
    const search  = [a.titulo, a.categoria, ...(a.etiquetas || [])].join(' ').toLowerCase();
    return `        <a class="blog-card reveal" data-search="${esc(search)}" style="--d:${i * 80}ms" href="/blog/${esc(a.slug)}/">
            <div class="blog-card-media">
                <img src="${esc(portada)}" alt="${esc(a.titulo)}" loading="lazy"
                     onerror="this.src='/assets/img/hero/productos.webp'">
                ${a.categoria ? `<span class="blog-chip">${esc(a.categoria)}</span>` : ''}
            </div>
            <div class="blog-card-body">
                <time class="blog-card-date">${esc(fechaLarga(a.fecha))}</time>
                <h2 class="blog-card-title">${esc(a.titulo)}</h2>
                <p class="blog-card-excerpt">${esc(a.resumen || '')}</p>
                <span class="blog-card-more">Leer artículo
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </span>
            </div>
        </a>`;
}

// ── Página: listado ─────────────────────────────────────────────────────────
function htmlListado(arts) {
    const visibles = arts.filter(a => a.visible !== false)
                         .sort((a, b) => String(b.fecha).localeCompare(String(a.fecha)));

    const cards = visibles.length
        ? `    <div class="blog-grid" id="blogGrid">\n${visibles.map(card).join('\n')}\n    </div>
    <div class="blog-noresults" id="blogNoResults" hidden>
        <p>No encontramos artículos para <span id="blogQueryEcho"></span>.</p>
    </div>`
        : `    <div class="blog-empty"><p>Pronto publicaremos nuevos artículos.</p></div>`;

    const buscador = visibles.length
        ? `        <div class="blog-toolbar">
            <div class="blog-search">
                <svg class="blog-search-ic" width="17" height="17" viewBox="0 0 18 18" fill="none"><circle cx="7.5" cy="7.5" r="5" stroke="currentColor" stroke-width="1.5"/><path d="M11.5 11.5l4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                <input id="blogSearch" type="text" placeholder="Buscar por título o etiqueta..." autocomplete="off" spellcheck="false" aria-label="Buscar artículos">
                <button id="blogSearchX" class="blog-search-x" aria-label="Limpiar" hidden>&times;</button>
            </div>
            <span class="blog-count" id="blogCount"></span>
        </div>`
        : '';

    const script = visibles.length
        ? `    <script>
    (function () {
        var input = document.getElementById('blogSearch');
        var clear = document.getElementById('blogSearchX');
        var cards = Array.prototype.slice.call(document.querySelectorAll('#blogGrid .blog-card'));
        var grid  = document.getElementById('blogGrid');
        var none  = document.getElementById('blogNoResults');
        var echo  = document.getElementById('blogQueryEcho');
        var count = document.getElementById('blogCount');
        var total = cards.length;

        function plural(n) { return n === 1 ? '1 artículo' : n + ' artículos'; }

        function apply() {
            var q = input.value.trim().toLowerCase();
            clear.hidden = q === '';
            var shown = 0;
            cards.forEach(function (c) {
                var match = q === '' || c.getAttribute('data-search').indexOf(q) !== -1;
                c.style.display = match ? '' : 'none';
                if (match) shown++;
            });
            none.hidden = shown !== 0;
            grid.hidden = shown === 0;
            echo.textContent = '“' + input.value.trim() + '”';
            count.textContent = q === '' ? plural(total) : plural(shown) + ' de ' + total;
        }

        input.addEventListener('input', apply);
        clear.addEventListener('click', function () { input.value = ''; input.focus(); apply(); });
        apply();
    })();
    </script>`
        : '';

    const content = `    <header class="blog-hero">
        <div class="blog-hero-bg">
            <picture>
                <source media="(max-width: 900px)" srcset="/assets/img/hero/pulido-mobile.webp">
                <img src="/assets/img/hero/pulido.webp" alt="Blog NewConcret">
            </picture>
        </div>
        <div class="blog-hero-ov"></div>
        <div class="blog-hero-inner">
            <div class="eyebrow"><span class="eyebrow-line"></span><span class="eyebrow-tx">Blog NewConcret</span></div>
            <h1 class="blog-hero-h1">Artículos y<br><span class="red">novedades.</span></h1>
            <p class="blog-hero-p">Guías técnicas, casos de obra y todo sobre el mundo de los pisos de hormigón.</p>
        </div>
    </header>

    <section class="blog-list sec">
${buscador}
${cards}
    </section>
${script}`;

    const canonical = `${DOMAIN}/blog/`;
    return pagina({
        title: 'Blog — NewConcret',
        description: 'Guías técnicas, casos de obra y novedades sobre pisos de hormigón, pulido, reparación y mantenimiento.',
        ogImage: '/assets/img/hero/productos.webp',
        canonical,
        ogType: 'website',
        jsonld: {
            '@context': 'https://schema.org',
            '@graph': [
                {
                    '@type': 'BreadcrumbList',
                    itemListElement: [
                        { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${DOMAIN}/` },
                        { '@type': 'ListItem', position: 2, name: 'Blog', item: canonical }
                    ]
                },
                {
                    '@type': 'Blog', '@id': `${DOMAIN}/blog/#blog`, url: canonical,
                    name: 'Blog NewConcret',
                    description: 'Guías técnicas y novedades sobre pisos de hormigón.',
                    inLanguage: SITE.inLanguage, publisher: { '@id': ORG.id }
                }
            ]
        },
        root: '../',
        bodyClass: 'blog-body',
        content
    });
}

// ── Página: artículo ────────────────────────────────────────────────────────
function htmlArticulo(a, todos) {
    const cuerpo  = sanitizeHtml(marked.parse(a.cuerpo_md || ''), SANITIZE);
    const portada = a.portada || '/assets/img/hero/productos.webp';

    const tags = (a.etiquetas || []).length
        ? `        <div class="art-tags">${a.etiquetas.map(t => `<span class="art-tag">#${esc(t)}</span>`).join('')}</div>`
        : '';

    // Relacionados: hasta 2 artículos visibles distintos al actual.
    const relacionados = todos
        .filter(x => x.visible !== false && x.slug !== a.slug)
        .sort((x, y) => String(y.fecha).localeCompare(String(x.fecha)))
        .slice(0, 2);

    const relHtml = relacionados.length
        ? `    <section class="art-related sec">
        <h2 class="art-related-h2">Seguí leyendo</h2>
        <div class="blog-grid blog-grid--2">
${relacionados.map(card).join('\n')}
        </div>
    </section>`
        : '';

    const content = `    <article class="art">
        <header class="art-hero" style="--cover:url('${esc(portada)}')">
            <div class="art-hero-ov"></div>
            <div class="art-hero-inner">
                <a class="art-back" href="/blog/">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>
                    Volver al blog
                </a>
                ${a.categoria ? `<span class="blog-chip art-hero-chip">${esc(a.categoria)}</span>` : ''}
                <h1 class="art-title">${esc(a.titulo)}</h1>
                <div class="art-meta">
                    <span class="art-author">${esc(a.autor || 'NewConcret')}</span>
                    <span class="art-dot">·</span>
                    <time>${esc(fechaLarga(a.fecha))}</time>
                </div>
            </div>
        </header>

        <div class="art-body">
${cuerpo.split('\n').map(l => '            ' + l).join('\n')}
${tags}
        </div>
    </article>

${relHtml}`;

    const canonical = `${DOMAIN}/blog/${a.slug}/`;
    return pagina({
        title: `${a.titulo} — NewConcret`,
        description: a.resumen || a.titulo,
        ogImage: portada,
        canonical,
        ogType: 'article',
        jsonld: {
            '@context': 'https://schema.org',
            '@graph': [
                {
                    '@type': 'BreadcrumbList',
                    itemListElement: [
                        { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${DOMAIN}/` },
                        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${DOMAIN}/blog/` },
                        { '@type': 'ListItem', position: 3, name: a.titulo, item: canonical }
                    ]
                },
                {
                    '@type': 'BlogPosting',
                    headline: a.titulo,
                    description: a.resumen || a.titulo,
                    image: absUrl(portada),
                    datePublished: a.fecha || undefined,
                    dateModified: a.fecha || undefined,
                    author: { '@type': a.autor && a.autor !== 'NewConcret' ? 'Person' : 'Organization', name: a.autor || 'NewConcret' },
                    publisher: { '@id': ORG.id },
                    mainEntityOfPage: canonical,
                    inLanguage: SITE.inLanguage,
                    articleSection: a.categoria || undefined,
                    keywords: (a.etiquetas || []).join(', ') || undefined
                }
            ]
        },
        root: '../../',
        bodyClass: 'blog-body art-page',
        content
    });
}

// ── Generación ──────────────────────────────────────────────────────────────
function generateBlog() {
    const arts    = leerArticulos();
    const blogDir = path.join(ROOT, 'blog');
    fs.mkdirSync(blogDir, { recursive: true });

    // Limpiar carpetas de artículos viejas (deja index.html del listado).
    for (const entry of fs.readdirSync(blogDir, { withFileTypes: true })) {
        if (entry.isDirectory()) fs.rmSync(path.join(blogDir, entry.name), { recursive: true, force: true });
    }

    // Listado
    fs.writeFileSync(path.join(blogDir, 'index.html'), htmlListado(arts), 'utf8');

    // Artículos (solo visibles tienen página; los ocultos no se publican)
    let count = 0;
    for (const a of arts) {
        if (a.visible === false) continue;
        const slug = a.slug || slugify(a.titulo);
        const dir  = path.join(blogDir, slug);
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(path.join(dir, 'index.html'), htmlArticulo(a, arts), 'utf8');
        count++;
    }

    console.log(`[BLOG] Generado: blog/index.html + ${count} artículo(s).`);
    return { ok: true, count };
}

module.exports = { generateBlog, leerArticulos, slugify };

// CLI
if (require.main === module) {
    try { generateBlog(); }
    catch (err) { console.error('[BLOG ERROR]', err.message); process.exit(1); }
}
