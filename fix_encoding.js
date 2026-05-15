const fs = require('fs');
function fixFile(path) {
  let text = fs.readFileSync(path, 'utf8');
  
  // Fix the UTF-8 double encoding corruption
  text = text.replace(/Ã³/g, 'ó');
  text = text.replace(/Ã­/g, 'í');
  text = text.replace(/Ã±/g, 'ñ');
  text = text.replace(/Ã¡/g, 'á');
  text = text.replace(/Ã©/g, 'é');
  text = text.replace(/Ãº/g, 'ú');
  text = text.replace(/Ã/g, 'í'); // Any leftover Ã is probably í from 'categoría' or 'subcategoría' if the invisible char was lost
  
  fs.writeFileSync(path, text, 'utf8');
}

fixFile('c:/newconcret-2.0/pulido/equipos/aspiradoras/index.html');
fixFile('c:/newconcret-2.0/pulido/equipos/lavasecapisos/index.html');
fixFile('c:/newconcret-2.0/pulido/equipos/accesorios-aspiradoras/index.html');
console.log('Fixed encoding in files.');
