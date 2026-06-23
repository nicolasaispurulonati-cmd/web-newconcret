/**
 * NEWCONCRET — optimize-images.js
 * Convierte imágenes raster pesadas (PNG/JPG) de assets/img a WebP redimensionado,
 * actualiza todas las referencias (.html, productos.js, articulos.js, css, js) y
 * mueve los originales a _img_originals/ (reversible, no se despliega).
 *
 * Uso:
 *   node scripts/optimize-images.js --dry-run   → solo reporta, no escribe nada
 *   node scripts/optimize-images.js             → aplica los cambios
 *   node scripts/optimize-images.js --no-move   → convierte pero deja los originales en su lugar
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const IMG_DIR = path.join(ROOT, 'assets', 'img');
const BACKUP_DIR = path.join(ROOT, '_img_originals');

const DRY = process.argv.includes('--dry-run');
const NO_MOVE = process.argv.includes('--no-move');

// ── Parámetros de conversión ────────────────────────────────────────────────
const MIN_SIZE = 100 * 1024;   // solo procesar imágenes ≥ 100KB
const QUALITY = 80;            // calidad WebP
const MAX_DEFAULT = 1600;      // lado mayor por defecto
const MAX_HERO = 1920;         // lado mayor para /hero (full-bleed)
const MIN_GAIN = 0.10;         // descartar webp si no ahorra al menos 10%

// Carpetas que pueden contener referencias a las imágenes.
const REF_GLOBS = ['.html'];
const REF_EXTRA_FILES = [
  'assets/data/productos.js',
  'assets/data/articulos.js',
  'assets/data/site-structure.js',
];
const REF_DIRS = ['assets/css', 'assets/js'];
// Carpetas a excluir del barrido de referencias.
const EXCLUDE = ['node_modules', '_img_originals', 'scripts', '.git'];

const fmt = b => (b / 1048576).toFixed(2) + ' MB';

function walk(dir, test) {
  let out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (EXCLUDE.includes(e.name)) continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out = out.concat(walk(p, test));
    else if (test(p)) out.push(p);
  }
  return out;
}

(async () => {
  console.log(`\n=== optimize-images ${DRY ? '(DRY RUN)' : ''} ===\n`);

  const candidates = walk(IMG_DIR, p => /\.(png|jpe?g)$/i.test(p))
    .map(f => ({ f, size: fs.statSync(f).size }))
    .filter(x => x.size >= MIN_SIZE)
    .sort((a, b) => b.size - a.size);

  console.log(`Candidatas (≥ ${MIN_SIZE / 1024}KB): ${candidates.length}`);

  const map = {};            // relPathOriginal -> relPathWebp (rutas posix relativas a ROOT)
  let beforeTot = 0, afterTot = 0, converted = 0, skipped = 0;

  for (const { f, size } of candidates) {
    const rel = path.relative(ROOT, f).replace(/\\/g, '/');
    const webpAbs = f.replace(/\.(png|jpe?g)$/i, '.webp');
    const webpRel = path.relative(ROOT, webpAbs).replace(/\\/g, '/');
    const isHero = /[\\/]hero[\\/]/i.test(f);
    const maxDim = isHero ? MAX_HERO : MAX_DEFAULT;

    try {
      const buf = await sharp(f)
        .resize({ width: maxDim, height: maxDim, fit: 'inside', withoutEnlargement: true })
        .webp({ quality: QUALITY, effort: 5 })
        .toBuffer();

      const gain = 1 - buf.length / size;
      if (gain < MIN_GAIN) {
        skipped++;
        console.log(`  skip  ${rel}  (webp no ahorra: ${(gain * 100).toFixed(0)}%)`);
        continue;
      }

      beforeTot += size;
      afterTot += buf.length;
      converted++;
      map[rel] = webpRel;

      if (!DRY) fs.writeFileSync(webpAbs, buf);
      console.log(`  ok    ${fmt(size)} → ${fmt(buf.length)}  (-${(gain * 100).toFixed(0)}%)  ${rel}`);
    } catch (e) {
      skipped++;
      console.log(`  ERR   ${rel}: ${e.message}`);
    }
  }

  console.log(`\nConvertidas: ${converted} | Saltadas: ${skipped}`);
  console.log(`Peso imágenes: ${fmt(beforeTot)} → ${fmt(afterTot)}  (ahorro ${fmt(beforeTot - afterTot)}, -${beforeTot ? ((1 - afterTot / beforeTot) * 100).toFixed(0) : 0}%)`);

  // ── Reescritura de referencias ────────────────────────────────────────────
  const refFiles = [
    ...walk(ROOT, p => REF_GLOBS.includes(path.extname(p).toLowerCase())),
    ...REF_EXTRA_FILES.map(r => path.join(ROOT, r)).filter(fs.existsSync),
    ...REF_DIRS.flatMap(d => fs.existsSync(path.join(ROOT, d))
      ? walk(path.join(ROOT, d), p => /\.(js|css)$/i.test(p)) : []),
  ];

  const entries = Object.entries(map); // [origRel, webpRel]
  let filesTouched = 0, totalRepl = 0;

  for (const file of refFiles) {
    let txt;
    try { txt = fs.readFileSync(file, 'utf8'); } catch { continue; }
    let n = 0;
    for (const [orig, webp] of entries) {
      if (txt.includes(orig)) {
        const before = txt;
        txt = txt.split(orig).join(webp);
        n += (before.length - txt.length === 0)
          ? before.split(orig).length - 1
          : before.split(orig).length - 1;
      }
    }
    if (n > 0) {
      filesTouched++;
      totalRepl += n;
      if (!DRY) fs.writeFileSync(file, txt);
    }
  }
  console.log(`\nReferencias: ${totalRepl} reemplazos en ${filesTouched} archivos`);

  // ── Mover originales a backup ─────────────────────────────────────────────
  if (!DRY && !NO_MOVE && converted > 0) {
    let moved = 0;
    for (const orig of Object.keys(map)) {
      const src = path.join(ROOT, orig);
      const dst = path.join(BACKUP_DIR, orig);
      fs.mkdirSync(path.dirname(dst), { recursive: true });
      fs.renameSync(src, dst);
      moved++;
    }
    console.log(`Originales movidos a _img_originals/: ${moved}`);
  } else if (NO_MOVE) {
    console.log('Originales conservados en su lugar (--no-move).');
  }

  console.log('\nListo.' + (DRY ? ' (dry-run: no se escribió nada)' : ''));
})().catch(e => { console.error(e); process.exit(1); });
