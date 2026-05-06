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

// ── API: Subir imagen ──────────────────────────────────────────────────────
app.post('/api/upload/imagen', uploadImg.single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'Archivo no válido o faltante.' });
  const publicPath = '/assets/img/productos/' + req.file.filename;
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
