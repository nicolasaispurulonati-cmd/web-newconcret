const fs = require('fs');

const files = [
  'c:/newconcret-2.0/mantenimiento/accesorios/index.html',
  'c:/newconcret-2.0/mantenimiento/equipos/index.html',
  'c:/newconcret-2.0/mantenimiento/productos-quimicos/index.html'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  // We have a syntax error around here:
  // // Sync Pills with Custom Select
  // );
  // document.getElementById('sortSelect')

  content = content.replace(/\/\/ Sync Pills with Custom Select\s*\);\s*document\.getElementById\('sortSelect'\)/g, "document.getElementById('sortSelect')");

  fs.writeFileSync(file, content, 'utf8');
  console.log('Fixed syntax error in ' + file);
}
