const fs = require('fs');
const path = require('path');

const template = fs.readFileSync('c:/newconcret-2.0/pulido/equipos/index.html', 'utf8');

const p = {
  path: 'c:/newconcret-2.0/mantenimiento/equipos/index.html',
  title: 'Equipos de Mantenimiento | NewConcret',
  desc: 'Máquinas y equipos de alto rendimiento para el mantenimiento de pisos.',
  heroTitle: 'EQUIPOS DE<br>MANTENIMIENTO',
  heroImgDesktop: 'hero/mantenimiento.png',
  heroImgMobile: 'hero/mantenimiento-mobile.png',
  level: '../../../'
};

let html = template;

// Adjust paths
html = html.replace(/\.\.\/\.\.\//g, p.level);
html = html.replace(/const ROOT              = '\.\.\/\.\.\/';/, `const ROOT              = '${p.level}';`);

// Title and desc
html = html.replace(/<title>.*?<\/title>/, `<title>${p.title}</title>`);
html = html.replace(/<meta name="description".*?>/, `<meta name="description" content="${p.desc}">`);

// Hero Images
html = html.replace(/url\('.*?pulido\.jpg'\)/, `url('${p.level}assets/img/${p.heroImgDesktop}')`);
html = html.replace(/url\('.*?pulido-mobile\.jpg'\)/, `url('${p.level}assets/img/${p.heroImgMobile}')`);

// Hero Title
html = html.replace(/<h1 class="ph-title">[\s\S]*?<\/h1>/, `<h1 class="ph-title">${p.heroTitle}</h1>`);
html = html.replace(/<b id="total-count">.*?<\/b>/, `<b id="total-count">0</b>`);
html = html.replace(/<div class="ph-count-tx">.*?<\/div>/, `<div class="ph-count-tx">productos disponibles</div>`);
html = html.replace(/<span class="ph-eyebrow-tx">.*?<\/span>/, `<span class="ph-eyebrow-tx">Equipos · Mantenimiento</span>`);
html = html.replace(/<p class="ph-desc">.*?<\/p>/, `<p class="ph-desc">${p.desc}</p>`);

// Pills (Mantenimiento Equipos)
const pillsHTML = `
    <button class="pill active" data-filter="all">Todos</button>
    <button class="pill" data-filter="aspiradoras">Aspiradoras</button>
    <button class="pill" data-filter="lustradoras">Lustradoras</button>
    <button class="pill" data-filter="lavasecapisos">Lavasecapisos</button>
`;
html = html.replace(/<div class="filter-pills hide-mobile">[\s\S]*?<\/div>/, `<div class="filter-pills hide-mobile">${pillsHTML}</div>`);

const customFilterHTML = `
    <div class="custom-option selected" data-value="all">Todas las categorías</div>
    <div class="custom-option" data-value="aspiradoras">Aspiradoras</div>
    <div class="custom-option" data-value="lustradoras">Lustradoras</div>
    <div class="custom-option" data-value="lavasecapisos">Lavasecapisos</div>
`;
html = html.replace(/<div class="custom-select-options">[\s\S]*?<\/div>/, `<div class="custom-select-options">${customFilterHTML}</div>`);

// JS Config
html = html.replace(/const PAGE_SECCION      = 'pulido';/, "const PAGE_SECCION      = 'mantenimiento';");
html = html.replace(/const PAGE_CATEGORIA    = 'equipos';/, "const PAGE_CATEGORIA    = 'equipos';");

// Label in showing text
html = html.replace(/equipos de pulido/g, "equipos de mantenimiento");

fs.writeFileSync(p.path, html, 'utf8');

console.log('Successfully regenerated mantenimiento/equipos/index.html using pulido/equipos as base.');
