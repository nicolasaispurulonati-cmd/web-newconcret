const fs = require('fs');
const template = fs.readFileSync('c:/newconcret-2.0/construccion/materiales/index.html', 'utf8');

const pages = [
  {
    path: 'c:/newconcret-2.0/pulido/insumos/index.html',
    title: 'Insumos para Pulido | NewConcret',
    desc: 'Catálogo completo de insumos diamantados, metales de desbaste y discos resinoides para el pulido y tratamiento de pisos.',
    heroTitle: 'INSUMOS PARA<br>PULIDO',
    heroImgDesktop: 'hero/pulido.jpg',
    heroImgMobile: 'hero/pulido-mobile.jpg',
    sub: 'all',
    level: '../../'
  },
  {
    path: 'c:/newconcret-2.0/pulido/insumos/metales-desbaste/index.html',
    title: 'Metales de Desbaste | NewConcret',
    desc: 'Metales de desbaste diamantados para preparación de superficies.',
    heroTitle: 'METALES DE<br>DESBASTE',
    heroImgDesktop: 'hero/pulido.jpg',
    heroImgMobile: 'hero/pulido-mobile.jpg',
    sub: 'metales-desbaste',
    level: '../../../'
  },
  {
    path: 'c:/newconcret-2.0/pulido/insumos/discos-resinoides/index.html',
    title: 'Discos Resinoides | NewConcret',
    desc: 'Discos resinoides para el pulido y abrillantado de pisos de hormigón.',
    heroTitle: 'DISCOS<br>RESINOIDES',
    heroImgDesktop: 'hero/pulido.jpg',
    heroImgMobile: 'hero/pulido-mobile.jpg',
    sub: 'discos-resinoides',
    level: '../../../'
  },
  {
    path: 'c:/newconcret-2.0/pulido/insumos/panos-diamantados/index.html',
    title: 'Paños Diamantados | NewConcret',
    desc: 'Paños diamantados de alto rendimiento para el mantenimiento de pisos.',
    heroTitle: 'PAÑOS<br>DIAMANTADOS',
    heroImgDesktop: 'hero/pulido.jpg',
    heroImgMobile: 'hero/pulido-mobile.jpg',
    sub: 'panos-diamantados',
    level: '../../../'
  }
];

const pillsHTML = `
    <button class="pill {SUB_ALL}" data-filter="all">Todos</button>
    <button class="pill {SUB_METALES}" data-filter="metales-desbaste">Metales desbaste</button>
    <button class="pill {SUB_DISCOS}" data-filter="discos-resinoides">Discos resinoides</button>
    <button class="pill {SUB_PANOS}" data-filter="panos-diamantados">Paños diamantados</button>
`;

const customFilterHTML = `
    <div class="custom-option {SUB_ALL}" data-value="all">Todos</div>
    <div class="custom-option {SUB_METALES}" data-value="metales-desbaste">Metales desbaste</div>
    <div class="custom-option {SUB_DISCOS}" data-value="discos-resinoides">Discos resinoides</div>
    <div class="custom-option {SUB_PANOS}" data-value="panos-diamantados">Paños diamantados</div>
`;

pages.forEach(p => {
  let html = template;
  
  // Adjust paths from ../../ to the correct level
  html = html.replace(/\.\.\/\.\.\//g, p.level);
  
  // Replace ROOT inside JS correctly. In the template it is: const ROOT = '../../';
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
  html = html.replace(/<div class="ph-count-tx">MATERIALES DISPONIBLES<\/div>/, `<div class="ph-count-tx">INSUMOS DISPONIBLES</div>`);
  html = html.replace(/<div class="ph-eyebrow-tx">MATERIALES<\/div>/, `<div class="ph-eyebrow-tx">INSUMOS</div>`);
  
  // Pills
  let actualPills = pillsHTML
    .replace('{SUB_ALL}', p.sub === 'all' ? 'active' : '')
    .replace('{SUB_METALES}', p.sub === 'metales-desbaste' ? 'active' : '')
    .replace('{SUB_DISCOS}', p.sub === 'discos-resinoides' ? 'active' : '')
    .replace('{SUB_PANOS}', p.sub === 'panos-diamantados' ? 'active' : '');
  html = html.replace(/<div class="filter-pills hide-mobile">[\s\S]*?<\/div>/, `<div class="filter-pills hide-mobile">${actualPills}</div>`);
  
  let actualOptions = customFilterHTML
    .replace('{SUB_ALL}', p.sub === 'all' ? 'selected' : '')
    .replace('{SUB_METALES}', p.sub === 'metales-desbaste' ? 'selected' : '')
    .replace('{SUB_DISCOS}', p.sub === 'discos-resinoides' ? 'selected' : '')
    .replace('{SUB_PANOS}', p.sub === 'panos-diamantados' ? 'selected' : '');
  html = html.replace(/<div class="custom-select-options">[\s\S]*?<\/div>/, `<div class="custom-select-options">${actualOptions}</div>`);
  
  // Trigger text
  const triggerMap = {'all': 'Todos', 'metales-desbaste': 'Metales desbaste', 'discos-resinoides': 'Discos resinoides', 'panos-diamantados': 'Paños diamantados'};
  html = html.replace(/<div class="custom-select-trigger" id="customFilterTrigger">.*?<\/div>/, `<div class="custom-select-trigger" id="customFilterTrigger">${triggerMap[p.sub]}</div>`);
  
  // JS Config
  html = html.replace(/const PAGE_SECCION = 'construccion';/, "const PAGE_SECCION = 'pulido';");
  html = html.replace(/const PAGE_CATEGORIA = 'materiales';/, "const PAGE_CATEGORIA = 'insumos';");
  
  html = html.replace(/const PAGE_SUBCATEGORIA = '.*?';/, `const PAGE_SUBCATEGORIA = '${p.sub}';`);
  
  if (p.sub === 'all') {
    html = html.replace(/let activeFilter = PAGE_SUBCATEGORIA;/, "let activeFilter = 'all';");
  } else {
    // Replace let activeFilter = PAGE_SUBCATEGORIA or let activeFilter = 'all'
    if (html.includes("let activeFilter = 'all';")) {
        html = html.replace(/let activeFilter = 'all';/, "let activeFilter = PAGE_SUBCATEGORIA;");
    } else {
        html = html.replace(/let activeFilter = PAGE_SUBCATEGORIA;/, "let activeFilter = PAGE_SUBCATEGORIA;");
    }
  }

  // Toast texts
  html = html.replace(/Este material no cuenta con ficha técnica/g, "Este insumo no cuenta con ficha técnica");
  html = html.replace(/\| Material /g, "| Insumo ");
  html = html.replace(/cat_label \|\| 'Material'/g, "cat_label || 'Insumo'");
  
  // Ensure we don't break the regex replacement like before
  // Actually, the template uses `pdfUrl.replace(/^\//, '')` so it's fine.

  fs.writeFileSync(p.path, html, 'utf8');
});

console.log('Successfully generated insumos pages based on materiales template.');
