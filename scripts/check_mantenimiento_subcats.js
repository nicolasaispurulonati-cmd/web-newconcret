const fs = require('fs');

const content = fs.readFileSync('c:/newconcret-2.0/assets/data/productos.js', 'utf8');

// The file looks like: `const productos = [ ... ];`
// We can use eval to load it.
const script = content + '\nmodule.exports = productos;';
fs.writeFileSync('c:/newconcret-2.0/temp_prod.js', script);
const productos = require('c:/newconcret-2.0/temp_prod.js');

const subcats = new Set();
productos.forEach(p => {
  if (p.rutas) {
    p.rutas.forEach(r => {
      const s = r['sección'] || r['seccion'];
      const c = r['categoría'] || r['categoria'];
      const sc = r['subcategoría'] || r['subcategoria'];
      if (s === 'mantenimiento' && c === 'equipos' && sc) {
        subcats.add(sc);
      }
    });
  }
});

console.log("Subcats in mantenimiento/equipos:", Array.from(subcats));
