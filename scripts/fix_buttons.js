const fs = require('fs');
const path = require('path');
const ROOT = 'C:/newconcret-2.0';

function walk(dir) {
  let results = [];
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory() && f !== '.claude' && f !== 'node_modules' && f !== 'admin') {
      results = results.concat(walk(full));
    } else if (f.endsWith('.html')) {
      results.push(full);
    }
  }
  return results;
}

const files = walk(ROOT);
let changed = 0;

for (const filepath of files) {
  let orig = fs.readFileSync(filepath, 'utf8');
  if (!orig.includes('btn-ver') && !orig.includes('pcard-actions')) continue;
  let c = orig;

  // 1. Primary button: "Ver detalles" -> "Ver mas"
  c = c.replace(/Ver detalles (\$\{iconSVG\('arrow'\)\})/g, 'Ver más $1');
  c = c.replace(/Ver detalles (\$\{arrowSVG\})/g, 'Ver más $1');
  c = c.replace(/Ver detalles (<svg[\s\S]*?<\/svg>)/g, 'Ver más $1');

  // 2. CSS font-family in .btn-ver/.btn-ft block
  c = c.replace(/(\.btn-ver,\s*\n\s*\.btn-ft\s*\{[^}]*)font-family:\s*var\(--font-m\)/gs,
    '$1font-family: var(--font-d)');
  c = c.replace(/(\.btn-ver,\s*\n\s*\.btn-ft\s*\{[^}]*)font-family:\s*var\(--fm\)/gs,
    '$1font-family: var(--fd)');

  // 3. CSS font-size 0.7rem -> 0.75rem in btn block
  c = c.replace(/(\.btn-ver,\s*\n\s*\.btn-ft\s*\{[^}]*)font-size:\s*0\.7rem/gs,
    '$1font-size: 0.75rem');

  // 4. CSS font-weight 600 -> 700 in btn block
  c = c.replace(/(\.btn-ver,\s*\n\s*\.btn-ft\s*\{[^}]*)font-weight:\s*600/gs,
    '$1font-weight: 700');

  // 5. Remove border from .btn-ft
  c = c.replace(/(\.btn-ft\s*\{[^}]*)border:\s*1px solid var\(--(?:nc-steel|st)\);\s*\n/gs, '$1');

  // 6. Mobile 0.6rem -> 0.75rem in button rules
  c = c.replace(/(\.btn-ver,\s*\.btn-ft\s*\{[^}]*)font-size:\s*0\.6rem\s*!important/gs,
    '$1font-size: 0.75rem !important');
  c = c.replace(/(\.modal-actions\s*\.btn-ver[\s\S]{0,40}\.modal-actions\s*\.btn-ft\s*\{[^}]*)font-size:\s*0\.6rem\s*!important/gs,
    '$1font-size: 0.75rem !important');

  // 7. Secondary btn: shop->Tienda 3-way -> pdf->Ficha tecnica 2-way
  c = c.replace(
    /\$\{shop\s*\n(\s*)\? `<a href="\$\{(?:fixUrl\()?shop(?:\))?\}"[^`]*>(?:Tienda|Ver en Tienda)<\/a>`\s*\n\s*: \(pdf\s*\n\s*\? `(<a href="\$\{(?:fixUrl\()?pdf(?:\))?\}"[^`]*)(?:Ficha Técnica|Ficha técnica)([^`]*<\/a>)`\s*\n\s*: `(<a href="https:\/\/wa\.me\/[^`]*>)Consultar<\/a>`\s*\n\s*\)\s*\n\s*\}/gs,
    (match, ind, pdfOpen, icon, waOpen) =>
      '${pdf\n' + ind + '? `' + pdfOpen + 'Ficha técnica' + icon + '`\n' +
      ind + ': `' + waOpen + 'Consultar</a>`\n' + ind.slice(2) + '}'
  );

  // 8. Capitalization: Ficha Tecnica -> Ficha tecnica
  c = c.replace(/>Ficha Técnica</g, '>Ficha técnica<');
  c = c.replace(/>Ficha Técnica (\$\{)/g, '>Ficha técnica $1');
  c = c.replace(/Ficha Técnica " \+ downSVG/g, 'Ficha técnica " + downSVG');

  if (c !== orig) {
    fs.writeFileSync(filepath, c, 'utf8');
    changed++;
    console.log('ok ' + filepath.replace(ROOT + '/', '').replace(ROOT + path.sep, ''));
  }
}
console.log('\n' + changed + ' files updated');
