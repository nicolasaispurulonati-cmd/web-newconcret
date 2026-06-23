const fs = require('fs');
const path = require('path');
const ROOT = 'C:/newconcret-2.0';

const DOWN_SVG = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1v8M4 6l3 3 3-3M2 11h10" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const MODAL_FICHA_CSS = `
        /* Modal ficha técnica — red outline */
        #modalFicha {
            border: 1px solid var(--nc-red) !important;
            color: var(--nc-red) !important;
        }
        #modalFicha:hover {
            background: var(--nc-red) !important;
            color: #fff !important;
        }`;

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
  if (!orig.includes('modalFicha')) continue;
  let c = orig;

  // 1. Add CSS override before closing </style> (only first style block)
  if (!c.includes('#modalFicha')) {
    c = c.replace(/(<\/style>)/, MODAL_FICHA_CSS + '\n$1');
  }

  // 2. Add download icon where it's missing in the modal HTML button

  // Pattern A: multiline without icon — <a ... id="modalFicha" download="">\n            Ficha técnica\n        </a>
  c = c.replace(
    /(<a [^>]*id="modalFicha"[^>]*>)\s*\n(\s*)Ficha técnica\s*\n(\s*)<\/a>/g,
    (m, aTag, indent1, indent2) =>
      aTag + '\n' + indent1 + DOWN_SVG + '\n' + indent1 + 'Ficha técnica\n' + indent2 + '</a>'
  );

  // Pattern B: single-line without icon — <a ...id="modalFicha" download>Ficha técnica</a>
  c = c.replace(
    /(<a [^>]*id="modalFicha"[^>]*>)Ficha técnica<\/a>/g,
    '$1' + DOWN_SVG + ' Ficha técnica</a>'
  );

  if (c !== orig) {
    fs.writeFileSync(filepath, c, 'utf8');
    changed++;
    console.log('ok ' + filepath.replace(ROOT + path.sep, '').replace(ROOT + '/', ''));
  }
}
console.log('\n' + changed + ' files updated');
