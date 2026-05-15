const fs = require('fs');
const path = require('path');

const template = fs.readFileSync('c:/newconcret-2.0/construccion/materiales/index.html', 'utf8');

const pages = [
  {
    path: 'c:/newconcret-2.0/mantenimiento/accesorios/index.html',
    title: 'Accesorios para Mantenimiento | NewConcret',
    desc: 'Catálogo de accesorios para el mantenimiento y limpieza de pisos industriales y comerciales.',
    heroTitle: 'ACCESORIOS DE<br>MANTENIMIENTO',
    heroImgDesktop: 'hero/mantenimiento.png',
    heroImgMobile: 'hero/mantenimiento-mobile.png',
    cat: 'accesorios',
    level: '../../../'
  },
  {
    path: 'c:/newconcret-2.0/mantenimiento/equipos/index.html',
    title: 'Equipos de Mantenimiento | NewConcret',
    desc: 'Máquinas y equipos de alto rendimiento para el mantenimiento de pisos.',
    heroTitle: 'EQUIPOS DE<br>MANTENIMIENTO',
    heroImgDesktop: 'hero/mantenimiento.png',
    heroImgMobile: 'hero/mantenimiento-mobile.png',
    cat: 'equipos',
    level: '../../../'
  },
  {
    path: 'c:/newconcret-2.0/mantenimiento/productos-quimicos/index.html',
    title: 'Químicos para Mantenimiento | NewConcret',
    desc: 'Productos químicos especializados para la limpieza, cuidado y protección de pisos de hormigón.',
    heroTitle: 'QUÍMICOS DE<br>MANTENIMIENTO',
    heroImgDesktop: 'hero/mantenimiento.png',
    heroImgMobile: 'hero/mantenimiento-mobile.png',
    cat: 'productos-quimicos',
    level: '../../../'
  }
];

const pillsHTML = `
    <button class="pill" onclick="window.location.href='../'">Todos</button>
    <button class="pill {CAT_EQUIPOS}" onclick="window.location.href='../equipos/'">Equipos</button>
    <button class="pill {CAT_QUIMICOS}" onclick="window.location.href='../productos-quimicos/'">Químicos</button>
    <button class="pill {CAT_ACCESORIOS}" onclick="window.location.href='../accesorios/'">Accesorios</button>
`;

const customFilterHTML = `
    <div class="custom-option" onclick="window.location.href='../'">Todas las categorías</div>
    <div class="custom-option {CAT_EQUIPOS}" onclick="window.location.href='../equipos/'">Equipos</div>
    <div class="custom-option {CAT_QUIMICOS}" onclick="window.location.href='../productos-quimicos/'">Químicos</div>
    <div class="custom-option {CAT_ACCESORIOS}" onclick="window.location.href='../accesorios/'">Accesorios</div>
`;

pages.forEach(p => {
  let html = template;
  
  const dir = path.dirname(p.path);
  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir, { recursive: true });
  }

  // Adjust paths
  html = html.replace(/\.\.\/\.\.\//g, p.level);
  html = html.replace(/const ROOT = '\.\.\/\.\.\/';/, `const ROOT = '${p.level}';`);
  
  // Title and desc
  html = html.replace(/<title>.*?<\/title>/, `<title>${p.title}</title>`);
  html = html.replace(/<meta name="description".*?>/, `<meta name="description" content="${p.desc}">`);
  
  // Hero Images
  html = html.replace(/url\('.*?construccion-materiales\.jpg'\)/, `url('${p.level}assets/img/${p.heroImgDesktop}')`);
  html = html.replace(/url\('.*?construccion-materiales-mobile\.jpg'\)/, `url('${p.level}assets/img/${p.heroImgMobile}')`);
  
  // Hero Title
  html = html.replace(/<h1 class="ph-title">[\s\S]*?<\/h1>/, `<h1 class="ph-title">${p.heroTitle}</h1>`);
  html = html.replace(/<b id="total-count">.*?<\/b>/, `<b id="total-count">0</b>`);
  html = html.replace(/<div class="ph-count-tx">MATERIALES DISPONIBLES<\/div>/, `<div class="ph-count-tx">PRODUCTOS DISPONIBLES</div>`);
  html = html.replace(/<div class="ph-eyebrow-tx">MATERIALES<\/div>/, `<div class="ph-eyebrow-tx">MANTENIMIENTO</div>`);
  
  // Pills
  let actualPills = pillsHTML
    .replace('{CAT_EQUIPOS}', p.cat === 'equipos' ? 'active' : '')
    .replace('{CAT_QUIMICOS}', p.cat === 'productos-quimicos' ? 'active' : '')
    .replace('{CAT_ACCESORIOS}', p.cat === 'accesorios' ? 'active' : '');
  html = html.replace(/<div class="filter-pills hide-mobile">[\s\S]*?<\/div>/, `<div class="filter-pills hide-mobile">${actualPills}</div>`);
  
  let actualOptions = customFilterHTML
    .replace('{CAT_EQUIPOS}', p.cat === 'equipos' ? 'selected' : '')
    .replace('{CAT_QUIMICOS}', p.cat === 'productos-quimicos' ? 'selected' : '')
    .replace('{CAT_ACCESORIOS}', p.cat === 'accesorios' ? 'selected' : '');
  html = html.replace(/<div class="custom-select-options">[\s\S]*?<\/div>/, `<div class="custom-select-options">${actualOptions}</div>`);
  
  // Trigger text
  const triggerMap = {'equipos': 'Equipos', 'productos-quimicos': 'Químicos', 'accesorios': 'Accesorios'};
  html = html.replace(/<div class="custom-select-trigger" id="customFilterTrigger">.*?<\/div>/, `<div class="custom-select-trigger" id="customFilterTrigger">${triggerMap[p.cat]}</div>`);
  
  // JS Config
  html = html.replace(/const PAGE_SECCION = 'construccion';/, "const PAGE_SECCION = 'mantenimiento';");
  html = html.replace(/const PAGE_CATEGORIA = 'materiales';/, `const PAGE_CATEGORIA = '${p.cat}';`);
  
  // Set subcategoria to 'all' permanently because there are no subcategories here
  html = html.replace(/const PAGE_SUBCATEGORIA = '.*?';/, `const PAGE_SUBCATEGORIA = 'all';`);
  html = html.replace(/let activeFilter = 'all';/, "let activeFilter = 'all';");
  if (html.includes("let activeFilter = PAGE_SUBCATEGORIA;")) {
      html = html.replace(/let activeFilter = PAGE_SUBCATEGORIA;/, "let activeFilter = 'all';");
  }

  // Remove the activeFilter JS logic from the pills, since they navigate now
  html = html.replace(/document\.querySelectorAll\('\.pill'\)\.forEach\(btn => \{[\s\S]*?render\(\);\s*\}\);\s*\}\);/, "");
  html = html.replace(/initCustomSelect\('customFilter', \(val\) => \{[\s\S]*?render\(\);\s*\}\);/, "");
  html = html.replace(/function syncPills\(filterVal\) \{[\s\S]*?\}/, "");
  
  // Texts
  html = html.replace(/Este material no cuenta con ficha técnica/g, "Este producto no cuenta con ficha técnica");
  html = html.replace(/\| Material /g, "| Producto ");
  html = html.replace(/cat_label \|\| 'Material'/g, "cat_label || 'Producto'");

  fs.writeFileSync(p.path, html, 'utf8');
});

console.log('Successfully generated mantenimiento subpages with strict categories.');
