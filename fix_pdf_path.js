const fs = require('fs');

const dirs = [
  'c:/newconcret-2.0/mantenimiento/equipos/aspiradoras/index.html',
  'c:/newconcret-2.0/mantenimiento/equipos/lavasecapisos/index.html',
  'c:/newconcret-2.0/mantenimiento/equipos/lustradoras/index.html'
];

dirs.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/modalFicha\.href = p\.pdfUrl;/g, "modalFicha.href = ROOT + p.pdfUrl.replace(/^\\//, '');");
  fs.writeFileSync(file, content);
  console.log('Fixed pdfUrl in ' + file);
});
