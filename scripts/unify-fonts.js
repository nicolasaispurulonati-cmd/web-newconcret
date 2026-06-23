/**
 * NEWCONCRET — unify-fonts.js
 * Unifica la tipografía de la marca a DIN Pro / DIN Pro Condensed / Avenir.
 * Quita Barlow, JetBrains Mono y la carga de Google Fonts en los archivos que
 * ya cargan estilo.css (donde viven las @font-face de DIN/Avenir).
 *
 * Uso: node scripts/unify-fonts.js
 */
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');

// Solo archivos que cargan estilo.css (tienen las @font-face DIN/Avenir disponibles).
const TARGETS = [
  'nosotros/index.html',
  'productos/index.html',
  'blog/index.html',
  'blog/como-elegir-el-piso-de-hormigon-pulido/index.html',
  'blog/errores-comunes-al-sellar-juntas/index.html',
  'blog/mantenimiento-de-pisos-pulidos/index.html',
];

const replacements = [
  // 1) Quitar preconnect + stylesheet de Google Fonts (cualquier formato de línea).
  [/[ \t]*<link[^>]*rel=["']preconnect["'][^>]*fonts\.googleapis\.com[^>]*>\s*\n?/gi, ''],
  [/[ \t]*<link[^>]*rel=["']preconnect["'][^>]*fonts\.gstatic\.com[^>]*>\s*\n?/gi, ''],
  [/[ \t]*<link[^>]*fonts\.googleapis\.com\/css2[^>]*>\s*\n?/gi, ''],
  // 2) Remapear tokens de fuente a las familias de la marca.
  [/--fd:\s*'Barlow Condensed',\s*sans-serif;/g, "--fd: 'DINProCond', 'DINPro', sans-serif;"],
  [/--fb:\s*'Barlow',\s*sans-serif;/g, "--fb: 'Avenir', sans-serif;"],
  [/--fm:\s*'JetBrains Mono',\s*monospace;/g, "--fm: 'DINPro', sans-serif;"],
  // 3) Literales sueltos en CSS de componentes.
  [/'JetBrains Mono',\s*monospace/g, "'DINPro', sans-serif"],
  [/'Barlow Condensed',\s*sans-serif/g, "'DINProCond', 'DINPro', sans-serif"],
  [/'Barlow',\s*sans-serif/g, "'Avenir', sans-serif"],
];

let totalFiles = 0;
for (const rel of TARGETS) {
  const file = path.join(ROOT, rel);
  if (!fs.existsSync(file)) { console.log('SKIP (no existe)', rel); continue; }
  let txt = fs.readFileSync(file, 'utf8');
  const before = txt;
  for (const [re, to] of replacements) txt = txt.replace(re, to);
  if (txt !== before) {
    fs.writeFileSync(file, txt);
    totalFiles++;
    console.log('OK ', rel);
  } else {
    console.log('—  sin cambios', rel);
  }
}
console.log(`\nArchivos actualizados: ${totalFiles}/${TARGETS.length}`);
