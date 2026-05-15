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
    sub: 'accesorios',
    level: '../../../'
  },
  {
    path: 'c:/newconcret-2.0/mantenimiento/equipos/index.html',
    title: 'Equipos de Mantenimiento | NewConcret',
    desc: 'Máquinas y equipos de alto rendimiento para el mantenimiento de pisos.',
    heroTitle: 'EQUIPOS DE<br>MANTENIMIENTO',
    heroImgDesktop: 'hero/mantenimiento.png',
    heroImgMobile: 'hero/mantenimiento-mobile.png',
    sub: 'equipos',
    level: '../../../'
  },
  {
    path: 'c:/newconcret-2.0/mantenimiento/productos-quimicos/index.html',
    title: 'Químicos para Mantenimiento | NewConcret',
    desc: 'Productos químicos especializados para la limpieza, cuidado y protección de pisos de hormigón.',
    heroTitle: 'QUÍMICOS DE<br>MANTENIMIENTO',
    heroImgDesktop: 'hero/mantenimiento.png',
    heroImgMobile: 'hero/mantenimiento-mobile.png',
    sub: 'productos-quimicos',
    level: '../../../'
  }
];

const pillsHTML = `
    <button class="pill" data-filter="all" onclick="window.location.href='../'">Todos</button>
    <button class="pill {SUB_EQUIPOS}" data-filter="equipos">Equipos</button>
    <button class="pill {SUB_QUIMICOS}" data-filter="productos-quimicos">Químicos</button>
    <button class="pill {SUB_ACCESORIOS}" data-filter="accesorios">Accesorios</button>
`;

const customFilterHTML = `
    <div class="custom-option" data-value="all" onclick="window.location.href='../'">Todos</div>
    <div class="custom-option {SUB_EQUIPOS}" data-value="equipos">Equipos</div>
    <div class="custom-option {SUB_QUIMICOS}" data-value="productos-quimicos">Químicos</div>
    <div class="custom-option {SUB_ACCESORIOS}" data-value="accesorios">Accesorios</div>
`;

pages.forEach(p => {
  let html = template;
  
  // Create directories if they don't exist
  const dir = path.dirname(p.path);
  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir, { recursive: true });
  }

  // Adjust paths from ../../ to the correct level
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
    .replace('{SUB_EQUIPOS}', p.sub === 'equipos' ? 'active' : '')
    .replace('{SUB_QUIMICOS}', p.sub === 'productos-quimicos' ? 'active' : '')
    .replace('{SUB_ACCESORIOS}', p.sub === 'accesorios' ? 'active' : '');
  html = html.replace(/<div class="filter-pills hide-mobile">[\s\S]*?<\/div>/, `<div class="filter-pills hide-mobile">${actualPills}</div>`);
  
  let actualOptions = customFilterHTML
    .replace('{SUB_EQUIPOS}', p.sub === 'equipos' ? 'selected' : '')
    .replace('{SUB_QUIMICOS}', p.sub === 'productos-quimicos' ? 'selected' : '')
    .replace('{SUB_ACCESORIOS}', p.sub === 'accesorios' ? 'selected' : '');
  html = html.replace(/<div class="custom-select-options">[\s\S]*?<\/div>/, `<div class="custom-select-options">${actualOptions}</div>`);
  
  // Trigger text
  const triggerMap = {'equipos': 'Equipos', 'productos-quimicos': 'Químicos', 'accesorios': 'Accesorios'};
  html = html.replace(/<div class="custom-select-trigger" id="customFilterTrigger">.*?<\/div>/, `<div class="custom-select-trigger" id="customFilterTrigger">${triggerMap[p.sub]}</div>`);
  
  // JS Config
  html = html.replace(/const PAGE_SECCION = 'construccion';/, "const PAGE_SECCION = 'mantenimiento';");
  html = html.replace(/const PAGE_CATEGORIA = 'materiales';/, "const PAGE_CATEGORIA = 'mantenimiento';");
  
  html = html.replace(/const PAGE_SUBCATEGORIA = '.*?';/, `const PAGE_SUBCATEGORIA = '${p.sub}';`);
  
  if (html.includes("let activeFilter = 'all';")) {
      html = html.replace(/let activeFilter = 'all';/, "let activeFilter = PAGE_SUBCATEGORIA;");
  } else {
      html = html.replace(/let activeFilter = PAGE_SUBCATEGORIA;/, "let activeFilter = PAGE_SUBCATEGORIA;");
  }

  // Toast and other texts
  html = html.replace(/Este material no cuenta con ficha técnica/g, "Este producto no cuenta con ficha técnica");
  html = html.replace(/\| Material /g, "| Producto ");
  html = html.replace(/cat_label \|\| 'Material'/g, "cat_label || 'Producto'");

  fs.writeFileSync(p.path, html, 'utf8');
});

console.log('Successfully generated mantenimiento subpages.');
