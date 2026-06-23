/**
 * NEWCONCRET — server.js
 * Servidor Express con API para el Panel Admin.
 * Reemplaza http-server para permitir:
 *  - Subida real de imágenes y PDFs al disco
 *  - Guardado automático de productos.js
 */

const express = require('express');
const multer  = require('multer');
const fs      = require('fs');
const path    = require('path');
const vm      = require('vm');
const crypto  = require('crypto');
const sharp   = require('sharp');
const { generateBlog } = require('./generate-blog');

// ── Optimización: convierte la imagen recién subida a WebP redimensionado ────
// Mantiene el sitio liviano de forma automática (mismos parámetros que
// scripts/optimize-images.js). SVG y GIF se conservan tal cual.
async function optimizeUpload(absPath, publicDir) {
  const ext  = path.extname(absPath).toLowerCase();
  const base = path.basename(absPath, ext);
  const webpAbs = path.join(path.dirname(absPath), base + '.webp');

  // Validación + conversión. sharp solo procesa imágenes raster reales: actúa
  // como validación de magic-bytes (un .png que en realidad es HTML/script
  // hace fallar el decode y se rechaza). Leemos el archivo a un Buffer primero
  // (se abre y se cierra) para evitar que libvips lo deje bloqueado en Windows.
  let buf;
  try {
    const input = fs.readFileSync(absPath);
    buf = await sharp(input)
      .resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 80, effort: 5 })
      .toBuffer();
  } catch (e) {
    console.error('[OPTIMIZE ERROR]', e.message);
    try { fs.unlinkSync(absPath); } catch { /* ya no existe */ }
    return null; // señal de rechazo: el archivo no era una imagen válida
  }

  // Conversión OK: guardamos el webp. Borrar el original es best-effort: un
  // EBUSY puntual de Windows no debe descartar una conversión exitosa.
  fs.writeFileSync(webpAbs, buf);
  if (path.resolve(webpAbs) !== path.resolve(absPath)) {
    try { fs.unlinkSync(absPath); }
    catch (e) { console.warn('[OPTIMIZE] no se pudo borrar el original:', e.message); }
  }
  return publicDir + base + '.webp';
}

const app  = express();
const ROOT = __dirname;

// ── Carga de .env (local, gitignored) ───────────────────────────────────────
// Parser mínimo KEY=VALUE; no pisa variables ya presentes en el entorno.
(function loadEnv() {
  const p = path.join(ROOT, '.env');
  if (!fs.existsSync(p)) return;
  for (const line of fs.readFileSync(p, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Za-z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !(m[1] in process.env)) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
})();

const PORT = Number(process.env.PORT) || 8080;
const HOST = process.env.HOST || '127.0.0.1';   // solo localhost por defecto
const SESSION_TTL = 8 * 60 * 60 * 1000;          // 8 horas
const ADMIN_USER  = process.env.ADMIN_USER || 'admin';
const PASS_HASH   = process.env.ADMIN_PASSWORD_HASH || '';  // formato salt:hash (scrypt)
const SECRET      = process.env.SESSION_SECRET || '';
const AUTH_READY  = Boolean(PASS_HASH && SECRET);

if (!AUTH_READY) {
  console.warn('\n⚠ Admin SIN configurar. Ejecutá:  node scripts/set-admin-password.js "<contraseña>"');
  console.warn('  Hasta entonces, el panel y la API quedan BLOQUEADOS (fail-closed).\n');
}

// ── Verificación de contraseña (scrypt, comparación en tiempo constante) ─────
function verifyPassword(password, stored) {
  if (!stored || !password) return false;
  const [salt, hash] = stored.split(':');
  if (!salt || !hash) return false;
  const derived = crypto.scryptSync(String(password), salt, 64);
  const expected = Buffer.from(hash, 'hex');
  return derived.length === expected.length && crypto.timingSafeEqual(derived, expected);
}

// ── Tokens de sesión firmados (HMAC-SHA256) ──────────────────────────────────
function signToken(payload) {
  const body = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const sig  = crypto.createHmac('sha256', SECRET).update(body).digest('base64url');
  return body + '.' + sig;
}
function verifyToken(token) {
  if (!token || !SECRET) return null;
  const [body, sig] = String(token).split('.');
  if (!body || !sig) return null;
  const expected = crypto.createHmac('sha256', SECRET).update(body).digest('base64url');
  const a = Buffer.from(sig), b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;
  try {
    const p = JSON.parse(Buffer.from(body, 'base64url').toString());
    return (p && p.exp && Date.now() < p.exp) ? p : null;
  } catch { return null; }
}

function parseCookies(req) {
  const out = {};
  (req.headers.cookie || '').split(';').forEach(c => {
    const i = c.indexOf('='); if (i < 0) return;
    out[c.slice(0, i).trim()] = decodeURIComponent(c.slice(i + 1).trim());
  });
  return out;
}

// ── Rate-limit simple de login (anti fuerza bruta) ───────────────────────────
const attempts = new Map();           // ip -> { count, resetAt }
const MAX_ATTEMPTS = 7, WINDOW = 15 * 60 * 1000;
function tooManyAttempts(ip) {
  const now = Date.now();
  let rec = attempts.get(ip);
  if (!rec || now > rec.resetAt) { rec = { count: 0, resetAt: now + WINDOW }; attempts.set(ip, rec); }
  rec.count++;
  return rec.count > MAX_ATTEMPTS;
}

// ── Middleware: exige sesión válida en toda la API de datos ───────────────────
function requireAuth(req, res, next) {
  if (!AUTH_READY) return res.status(503).json({ error: 'Admin no configurado en el servidor.' });
  const session = verifyToken(parseCookies(req).nc_session);
  if (!session) return res.status(401).json({ error: 'No autenticado.' });
  req.session = session;
  next();
}

// ── Middleware ──────────────────────────────────────────────────────────────
app.use(express.json({ limit: '50mb' }));

// ── API: Auth ────────────────────────────────────────────────────────────────
app.post('/api/login', (req, res) => {
  const ip = req.ip || req.socket.remoteAddress || 'local';
  if (!AUTH_READY) return res.status(503).json({ error: 'Admin no configurado. Ejecutá set-admin-password.js' });
  if (tooManyAttempts(ip)) return res.status(429).json({ error: 'Demasiados intentos. Esperá unos minutos.' });

  const { user, pass } = req.body || {};
  const userOk = !process.env.ADMIN_USER || user === ADMIN_USER;
  if (userOk && verifyPassword(pass, PASS_HASH)) {
    attempts.delete(ip);
    const token = signToken({ u: ADMIN_USER, exp: Date.now() + SESSION_TTL });
    res.cookie('nc_session', token, {
      httpOnly: true, sameSite: 'strict', secure: false, path: '/', maxAge: SESSION_TTL
    });
    return res.json({ ok: true });
  }
  res.status(401).json({ error: 'Usuario o contraseña incorrectos.' });
});

app.post('/api/logout', (req, res) => {
  res.clearCookie('nc_session', { path: '/' });
  res.json({ ok: true });
});

app.get('/api/session', (req, res) => {
  res.json({ authenticated: AUTH_READY && Boolean(verifyToken(parseCookies(req).nc_session)) });
});

// Estáticos DESPUÉS de los endpoints de auth. `dotfiles: deny` evita servir
// .env, .git, etc. aunque el server solo escuche en localhost.
app.use(express.static(ROOT, { dotfiles: 'deny' }));

// ── Multer: almacenamiento de imágenes ─────────────────────────────────────
const imgStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(ROOT, 'assets', 'img', 'productos');
    fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const ext  = path.extname(file.originalname).toLowerCase();
    const base = path.basename(file.originalname, ext)
                     .replace(/\s+/g, '-')
                     .replace(/[^a-z0-9\-]/gi, '')
                     .toLowerCase();
    cb(null, `${base}-${Date.now()}${ext}`);
  }
});

// ── Multer: almacenamiento de documentos PDF ───────────────────────────────
const docStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(ROOT, 'assets', 'docs');
    fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const ext  = path.extname(file.originalname).toLowerCase();
    const base = path.basename(file.originalname, ext)
                     .replace(/\s+/g, '-')
                     .replace(/[^a-z0-9\-]/gi, '')
                     .toLowerCase();
    cb(null, `${base}-${Date.now()}${ext}`);
  }
});

const uploadImg = multer({
  storage: imgStorage,
  limits: { fileSize: 20 * 1024 * 1024 },  // 20 MB
  fileFilter: (req, file, cb) => {
    const allowed = ['.jpg','.jpeg','.png','.webp'];  // sin .svg/.gif (XSS / no-raster)
    cb(null, allowed.includes(path.extname(file.originalname).toLowerCase()));
  }
});

const uploadDoc = multer({
  storage: docStorage,
  limits: { fileSize: 30 * 1024 * 1024 },  // 30 MB
  fileFilter: (req, file, cb) => {
    cb(null, path.extname(file.originalname).toLowerCase() === '.pdf');
  }
});

// ── Multer: imágenes del blog (carpeta separada) ───────────────────────────
const blogImgStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(ROOT, 'assets', 'img', 'blog');
    fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const ext  = path.extname(file.originalname).toLowerCase();
    const base = path.basename(file.originalname, ext)
                     .replace(/\s+/g, '-')
                     .replace(/[^a-z0-9\-]/gi, '')
                     .toLowerCase();
    cb(null, `${base}-${Date.now()}${ext}`);
  }
});

const uploadBlogImg = multer({
  storage: blogImgStorage,
  limits: { fileSize: 20 * 1024 * 1024 },  // 20 MB
  fileFilter: (req, file, cb) => {
    const allowed = ['.jpg','.jpeg','.png','.webp'];  // sin .svg/.gif (XSS / no-raster)
    cb(null, allowed.includes(path.extname(file.originalname).toLowerCase()));
  }
});

// ── API: Subir imagen ──────────────────────────────────────────────────────
app.post('/api/upload/imagen', requireAuth, uploadImg.single('file'), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'Archivo no válido o faltante.' });
  const publicPath = await optimizeUpload(req.file.path, '/assets/img/productos/');
  if (!publicPath) return res.status(400).json({ error: 'El archivo no es una imagen válida.' });
  console.log('[UPLOAD IMG]', publicPath);
  res.json({ ok: true, path: publicPath });
});

// ── API: Subir PDF ─────────────────────────────────────────────────────────
app.post('/api/upload/doc', requireAuth, uploadDoc.single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'Archivo no válido. Solo PDF.' });
  // Validación de magic-bytes: un PDF real empieza con "%PDF-".
  let head = '';
  try { const fd = fs.openSync(req.file.path, 'r'); const b = Buffer.alloc(5); fs.readSync(fd, b, 0, 5, 0); fs.closeSync(fd); head = b.toString('latin1'); } catch {}
  if (head !== '%PDF-') {
    try { fs.unlinkSync(req.file.path); } catch {}
    return res.status(400).json({ error: 'El archivo no es un PDF válido.' });
  }
  const publicPath = '/assets/docs/' + req.file.filename;
  console.log('[UPLOAD DOC]', publicPath);
  res.json({ ok: true, path: publicPath });
});

// ── API: Guardar productos.js ──────────────────────────────────────────────
app.post('/api/save-productos', requireAuth, (req, res) => {
  try {
    const { productos } = req.body;
    if (!Array.isArray(productos)) {
      return res.status(400).json({ error: 'Payload inválido: se esperaba array "productos".' });
    }

    const filePath = path.join(ROOT, 'assets', 'data', 'productos.js');

    const content = [
      '/* ',
      '   NEWCONCRET - productos.js',
      '   Catalogo unificado de productos.',
      '*/',
      '',
      "const STORE_BASE = 'https://tiendalonati.com.ar';",
      '',
      `const productos = ${JSON.stringify(productos, null, 4)};`
    ].join('\n');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log('[SAVE] productos.js actualizado —', productos.length, 'productos');
    res.json({ ok: true, count: productos.length });
  } catch (err) {
    console.error('[SAVE ERROR]', err.message);
    res.status(500).json({ error: err.message });
  }
});

// ── API: Leer productos.js fresco del disco (sin caché) ─────────────────────────
app.get('/api/get-productos', requireAuth, (req, res) => {
  try {
    const filePath = path.join(ROOT, 'assets', 'data', 'productos.js');
    const code = fs.readFileSync(filePath, 'utf8');
    // Convertir 'const productos =' a 'var productos =' para que el VM lo exponga en el sandbox
    const modifiedCode = code.replace(/const\s+productos\s*=/, 'var productos =');
    const sandbox = {};
    vm.createContext(sandbox);
    vm.runInContext(modifiedCode, sandbox);
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
    res.json({ ok: true, productos: sandbox.productos || [] });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

// ══ BLOG ════════════════════════════════════════════════════════════════════

// ── API: Subir imagen del blog ─────────────────────────────────────────────
app.post('/api/upload/blog', requireAuth, uploadBlogImg.single('file'), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'Archivo no válido o faltante.' });
  const publicPath = await optimizeUpload(req.file.path, '/assets/img/blog/');
  if (!publicPath) return res.status(400).json({ error: 'El archivo no es una imagen válida.' });
  console.log('[UPLOAD BLOG]', publicPath);
  res.json({ ok: true, path: publicPath });
});

// ── API: Leer articulos.js fresco del disco ────────────────────────────────
app.get('/api/get-articulos', requireAuth, (req, res) => {
  try {
    const filePath = path.join(ROOT, 'assets', 'data', 'articulos.js');
    const code = fs.readFileSync(filePath, 'utf8')
                   .replace(/const\s+articulos\s*=/, 'var articulos =');
    const sandbox = {};
    vm.createContext(sandbox);
    vm.runInContext(code, sandbox);
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
    res.json({ ok: true, articulos: sandbox.articulos || [] });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

// ── API: Guardar articulos.js y regenerar el blog ──────────────────────────
app.post('/api/save-articulos', requireAuth, (req, res) => {
  try {
    const { articulos } = req.body;
    if (!Array.isArray(articulos)) {
      return res.status(400).json({ error: 'Payload inválido: se esperaba array "articulos".' });
    }

    const filePath = path.join(ROOT, 'assets', 'data', 'articulos.js');
    const content = [
      '/*',
      '   NEWCONCRET - articulos.js',
      '   Blog / artículos. Editable desde el Panel Admin.',
      '   El cuerpo se escribe en Markdown y se convierte a HTML al generar las páginas.',
      '*/',
      '',
      `const articulos = ${JSON.stringify(articulos, null, 4)};`
    ].join('\n');

    fs.writeFileSync(filePath, content, 'utf8');

    // Regenerar las páginas estáticas del blog automáticamente.
    const result = generateBlog();
    console.log('[SAVE] articulos.js actualizado —', articulos.length, 'artículos; páginas:', result.count);
    res.json({ ok: true, count: articulos.length, paginas: result.count });
  } catch (err) {
    console.error('[SAVE ARTICULOS ERROR]', err.message);
    res.status(500).json({ error: err.message });
  }
});

// ── Fallback: servir index.html para rutas de directorio ──────────────────
app.get('/{*splat}', (req, res, next) => {
  if (path.extname(req.path)) return next();
  const htmlPath = path.join(ROOT, req.path, 'index.html');
  if (fs.existsSync(htmlPath)) return res.sendFile(htmlPath);
  next();
});

// ── Start ──────────────────────────────────────────────────────────────────
app.listen(PORT, HOST, () => {
  console.log(`\n✓ NewConcret Server  →  http://localhost:${PORT}`);
  console.log(`✓ Admin Panel        →  http://localhost:${PORT}/admin/`);
  console.log(`✓ Escuchando solo en ${HOST} (no accesible desde la red)`);
  console.log(`✓ Auth: ${AUTH_READY ? 'configurada' : 'NO configurada — ejecutá set-admin-password.js'}\n`);
});
