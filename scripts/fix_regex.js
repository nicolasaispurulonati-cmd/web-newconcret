const fs = require('fs');

const files = [
  'c:/newconcret-2.0/mantenimiento/productos-quimicos/index.html',
  'c:/newconcret-2.0/mantenimiento/accesorios/index.html'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    // Replace the specific regex literal syntax error /^\\// with /^\//
    content = content.split('/^\\\\//').join('/^\\//');
    fs.writeFileSync(file, content);
    console.log('Fixed ' + file);
  }
});
