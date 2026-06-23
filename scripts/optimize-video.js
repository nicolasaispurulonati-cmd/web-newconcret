/**
 * NEWCONCRET — optimize-video.js
 * Re-encoda el video hero y genera:
 *   - principal.mp4         (desktop, 1280px, H.264 CRF 26, sin audio)
 *   - principal-mobile.mp4  (mobile, 1080px, CRF 24 — nítido en pantallas retina)
 *   - principal-poster.webp (primer frame, para mostrar al instante)
 *
 * Idempotente: siempre encoda DESDE el original real respaldado en
 * _img_originals/. Re-ejecutarlo no degrada en cascada ni pisa el original.
 *
 * Uso: node scripts/optimize-video.js
 */

const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const ffmpeg = require('ffmpeg-static');

const ROOT = path.resolve(__dirname, '..');
const HERO = path.join(ROOT, 'assets', 'img', 'hero');
const SRC = path.join(HERO, 'principal.mp4');
const BACKUP_DIR = path.join(ROOT, '_img_originals', 'assets', 'img', 'hero');
const BACKUP_SRC = path.join(BACKUP_DIR, 'principal.mp4');

const fmt = b => (b / 1048576).toFixed(2) + ' MB';
const run = args => execFileSync(ffmpeg, args, { stdio: ['ignore', 'ignore', 'inherit'] });

// ── Asegurar que el original real esté respaldado, y encodar SIEMPRE desde él ──
fs.mkdirSync(BACKUP_DIR, { recursive: true });
if (!fs.existsSync(BACKUP_SRC)) {
  if (!fs.existsSync(SRC)) { console.error('No existe', SRC); process.exit(1); }
  fs.copyFileSync(SRC, BACKUP_SRC);  // primera corrida: preservar el original
}
const TRUE_SRC = BACKUP_SRC;
const origSize = fs.statSync(TRUE_SRC).size;
console.log('Original (fuente):', fmt(origSize));

const tmpDesktop = path.join(HERO, '_tmp-desktop.mp4');
const mobileOut = path.join(HERO, 'principal-mobile.mp4');
const posterPng = path.join(HERO, '_tmp-poster.png');
const posterWebp = path.join(HERO, 'principal-poster.webp');

// ── Desktop: 1280px, CRF 26 ───────────────────────────────────────────────────
console.log('Encodeando desktop (1280px, CRF 26)…');
run(['-y', '-i', TRUE_SRC,
  '-vf', 'scale=1280:-2',
  '-c:v', 'libx264', '-crf', '26', '-preset', 'slow',
  '-an', '-pix_fmt', 'yuv420p', '-movflags', '+faststart',
  tmpDesktop]);

// ── Mobile: 1080px, CRF 24 (retina-friendly) ─────────────────────────────────
console.log('Encodeando mobile (1080px, CRF 24)…');
run(['-y', '-i', TRUE_SRC,
  '-vf', 'scale=1080:-2',
  '-c:v', 'libx264', '-crf', '24', '-preset', 'slow',
  '-an', '-pix_fmt', 'yuv420p', '-movflags', '+faststart',
  mobileOut]);

// ── Poster: frame a 1s → webp ─────────────────────────────────────────────────
console.log('Generando poster…');
run(['-y', '-ss', '1', '-i', TRUE_SRC, '-frames:v', '1', '-vf', 'scale=1280:-2', '-update', '1', posterPng]);
(async () => {
  await sharp(posterPng).webp({ quality: 82 }).toFile(posterWebp);
  fs.unlinkSync(posterPng);

  // Reemplazar el desktop servido por la versión optimizada (sin tocar el backup).
  fs.renameSync(tmpDesktop, SRC);

  console.log('\n── Resultado ──');
  console.log('principal.mp4 (desktop):', fmt(origSize), '→', fmt(fs.statSync(SRC).size));
  console.log('principal-mobile.mp4:   ', fmt(fs.statSync(mobileOut).size));
  console.log('principal-poster.webp:  ', fmt(fs.statSync(posterWebp).size));
})().catch(e => { console.error(e); process.exit(1); });
