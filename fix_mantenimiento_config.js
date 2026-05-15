const fs = require('fs');

const pages = [
  { path: 'c:/newconcret-2.0/mantenimiento/accesorios/index.html', cat: 'accesorios' },
  { path: 'c:/newconcret-2.0/mantenimiento/equipos/index.html', cat: 'equipos' },
  { path: 'c:/newconcret-2.0/mantenimiento/productos-quimicos/index.html', cat: 'productos-quimicos' }
];

for (const p of pages) {
  let content = fs.readFileSync(p.path, 'utf8');

  // Fix Variables mapping
  content = content.replace(/const PAGE_SECCION\s*=\s*'construccion';/, "const PAGE_SECCION      = 'mantenimiento';");
  content = content.replace(/const PAGE_CATEGORIA\s*=\s*'materiales';/, `const PAGE_CATEGORIA    = '${p.cat}';`);
  content = content.replace(/const PAGE_SUBCATEGORIA\s*=\s*null;/, "const PAGE_SUBCATEGORIA = 'all';");

  // Fix renderCard hardcoded logic
  content = content.replace(/\(r\.sección === 'construccion' \|\| r\.seccion === 'construccion'\)/g, "(r.sección === 'mantenimiento' || r.seccion === 'mantenimiento')");
  content = content.replace(/\(r\.categoría === 'materiales' \|\| r\.categoria === 'materiales'\)/g, `(r.categoría === '${p.cat}' || r.categoria === '${p.cat}')`);
  
  // The route logic in renderCard looks for subcategoría to display as label. 
  // In mantenimiento, there is NO subcategoría, the label SHOULD BE the categoría!
  // So instead of finding route with subcategoría, it should just use the category!
  
  const originalRenderCardLogic = `
  // Resolve category label from routes if missing
  let rawCat = p.cat_label;
  if (!rawCat && p.rutas) {
      // Prioritize route with subcategory for this category
      const route = p.rutas.find(r => 
        (r.sección === 'mantenimiento' || r.seccion === 'mantenimiento') && 
        (r.categoría === '${p.cat}' || r.categoria === '${p.cat}') && 
        (r.subcategoría || r.subcategoria)
      );
      if (route) {
          rawCat = route.subcategoría || route.subcategoria;
      } else {
          // Fallback to first construction route
          const fallback = p.rutas.find(r => (r.sección === 'mantenimiento' || r.seccion === 'mantenimiento'));
          if (fallback) rawCat = fallback.subcategoría || fallback.subcategoria || fallback.categoría || fallback.categoria;
      }
  }
  let catLabel = rawCat || 'Producto';
  catLabel = catLabel.charAt(0).toUpperCase() + catLabel.slice(1).replace(/-/g, ' ');`;

  const newRenderCardLogic = `
  // Resolve category label
  let catLabel = p.cat_label || '${p.cat}';
  if (catLabel === 'productos-quimicos') catLabel = 'Químicos';
  catLabel = catLabel.charAt(0).toUpperCase() + catLabel.slice(1).replace(/-/g, ' ');`;

  // I will replace the entire logic block from `// Resolve category label from routes if missing` down to `replace(/-/g, ' ');`
  content = content.replace(/\/\/ Resolve category label from routes if missing[\s\S]*?catLabel\.charAt\(0\)\.toUpperCase\(\) \+ catLabel\.slice\(1\)\.replace\(\/-\/g, ' '\);/, newRenderCardLogic);

  // Fix the "Mostrando X materiales de construccion" to "Mostrando X productos de mantenimiento"
  content = content.replace(/materiales de construcción/g, "productos de mantenimiento");

  fs.writeFileSync(p.path, content, 'utf8');
  console.log('Fixed config in ' + p.path);
}
