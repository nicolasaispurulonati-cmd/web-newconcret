const fs = require('fs');

const files = [
  'c:/newconcret-2.0/mantenimiento/accesorios/index.html',
  'c:/newconcret-2.0/mantenimiento/equipos/index.html',
  'c:/newconcret-2.0/mantenimiento/productos-quimicos/index.html'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  // Replace shop variable to handle both storeUrl and tiendaUrl
  content = content.replace(/const shop = p\.tiendaUrl;/, "const shop = p.storeUrl || p.tiendaUrl;");

  fs.writeFileSync(file, content, 'utf8');
  console.log('Fixed shop url in ' + file);
}
