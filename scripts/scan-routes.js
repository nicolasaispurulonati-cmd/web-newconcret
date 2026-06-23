const fs = require('fs');
const code = fs.readFileSync('./assets/data/productos.js', 'utf8');
// Execute in a context where the var is returned
const productos = (new Function(code + '; return productos;'))();


const SECTION = process.argv[2] || 'pulido';
const map = {};

productos.forEach(p => {
  const rutas = p.rutas || [];
  rutas.filter(r => r['sección'] === SECTION).forEach(r => {
    const key = (r['categoría'] || 'root') + '/' + (r['subcategoría'] || 'root');
    if (!map[key]) map[key] = [];
    if (!map[key].includes(p.nombre)) map[key].push(p.nombre);
  });
  // Fallback: legacy fields
  if (!rutas.length && Array.isArray(p.secciones) && p.secciones.includes(SECTION)) {
    const key = (p.categoria || 'root') + '/' + (p.subcategoria || 'root');
    if (!map[key]) map[key] = [];
    if (!map[key].includes(p.nombre)) map[key].push(p.nombre);
  }
});

Object.entries(map).sort().forEach(([k, v]) => console.log(k, '->', v.join(', ')));
