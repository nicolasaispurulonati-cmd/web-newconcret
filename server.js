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
const sharp   = require('sharp');
const { generateBlog } = require('./generate-blog');

// ── Optimización: convierte la imagen recién subida a WebP redimensionado ────
// Mantiene el sitio liviano de forma automática (mismos parámetros que
// scripts/optimize-images.js). SVG y GIF se conservan tal cual.
async function optimizeUpload(absPath, publicDir) {
  const ext  = path.extname(absPath).toLowerCase();
  const base = path.basename(absPath, ext);
  if (ext === '.svg' || ext === '.gif') return publicDir + path.basename(absPath);
  const webpAbs = path.join(path.dirname(absPath), base + '.webp');
  try {
    const buf = await sharp(absPath)
      .resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 80, effort: 5 })
      .toBuffer();
    fs.writeFileSync(webpAbs, buf);
    if (path.resolve(webpAbs) !== path.resolve(absPath)) fs.unlinkSync(absPath);
    return publicDir + base + '.webp';
  } catch (e) {
    console.error('[OPTIMIZE ERROR]', e.message);
    return publicDir + path.basename(absPath); // fallback: deja el original
  }
}

const app  = express();
const PORT = 8080;
const ROOT = __dirname;

// ── Middleware ──────────────────────────────────────────────────────────────
app.use(express.json({ limit: '50mb' }));
app.use(express.static(ROOT));

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
    const allowed = ['.jpg','.jpeg','.png','.webp','.gif','.svg'];
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
    const allowed = ['.jpg','.jpeg','.png','.webp','.gif','.svg'];
    cb(null, allowed.includes(path.extname(file.originalname).toLowerCase()));
  }
});

// ── API: Subir imagen ──────────────────────────────────────────────────────
app.post('/api/upload/imagen', uploadImg.single('file'), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'Archivo no válido o faltante.' });
  const publicPath = await optimizeUpload(req.file.path, '/assets/img/productos/');
  console.log('[UPLOAD IMG]', publicPath);
  res.json({ ok: true, path: publicPath });
});

// ── API: Subir PDF ─────────────────────────────────────────────────────────
app.post('/api/upload/doc', uploadDoc.single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'Archivo no válido. Solo PDF.' });
  const publicPath = '/assets/docs/' + req.file.filename;
  console.log('[UPLOAD DOC]', publicPath);
  res.json({ ok: true, path: publicPath });
});

// ── API: Guardar productos.js ──────────────────────────────────────────────
app.post('/api/save-productos', (req, res) => {
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
app.get('/api/get-productos', (req, res) => {
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
app.post('/api/upload/blog', uploadBlogImg.single('file'), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'Archivo no válido o faltante.' });
  const publicPath = await optimizeUpload(req.file.path, '/assets/img/blog/');
  console.log('[UPLOAD BLOG]', publicPath);
  res.json({ ok: true, path: publicPath });
});

// ── API: Leer articulos.js fresco del disco ────────────────────────────────
app.get('/api/get-articulos', (req, res) => {
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
app.post('/api/save-articulos', (req, res) => {
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
app.listen(PORT, () => {
  console.log(`\n✓ NewConcret Server  →  http://localhost:${PORT}`);
  console.log(`✓ Admin Panel        →  http://localhost:${PORT}/admin/\n`);
});
