const fs = require('fs');

const targets = [
  'C:/newconcret-2.0/construccion/equipos/index.html',
  'C:/newconcret-2.0/construccion/productos-quimicos/aditivo-llaneado/index.html',
  'C:/newconcret-2.0/construccion/productos-quimicos/puentes-de-adherencia/index.html',
  'C:/newconcret-2.0/mantenimiento/accesorios/index.html',
  'C:/newconcret-2.0/mantenimiento/accesorios/mopas/index.html',
  'C:/newconcret-2.0/mantenimiento/accesorios/panos/index.html',
  'C:/newconcret-2.0/mantenimiento/equipos/aspiradoras/index.html',
  'C:/newconcret-2.0/mantenimiento/equipos/index.html',
  'C:/newconcret-2.0/mantenimiento/equipos/lavasecapisos/index.html',
  'C:/newconcret-2.0/mantenimiento/equipos/lustradoras/index.html',
  'C:/newconcret-2.0/mantenimiento/productos-quimicos/desengrasantes/index.html',
  'C:/newconcret-2.0/mantenimiento/productos-quimicos/index.html',
  'C:/newconcret-2.0/mantenimiento/productos-quimicos/selladores/index.html',
  'C:/newconcret-2.0/pulido/index.html',
  'C:/newconcret-2.0/pulido/productos-quimicos/aglutinantes/index.html',
  'C:/newconcret-2.0/pulido/productos-quimicos/densificadores/index.html',
  'C:/newconcret-2.0/pulido/productos-quimicos/detergentes/index.html',
  'C:/newconcret-2.0/pulido/productos-quimicos/impermeabilizantes/index.html',
  'C:/newconcret-2.0/pulido/productos-quimicos/puentes-de-adherencia/index.html',
  'C:/newconcret-2.0/pulido/productos-quimicos/selladores/index.html',
  'C:/newconcret-2.0/reparacion/index.html'
];

for (const f of targets) {
  let c = fs.readFileSync(f, 'utf8');
  const orig = c;

  // Pattern A: multiline shop ? Tienda : (pdf ? ...Ficha... : ...Consultar...)
  c = c.replace(
    /\$\{shop\s*\n(\s*)\? `<a href="[^"]*shop[^"]*"[^`]*>Tienda<\/a>`\s*\n\s*: \(pdf\s*\n(\s*)\? `(<a href="[^"]*pdf[^"]*"[^`]*)(?:Ficha Técnica|Ficha técnica|Ficha)([^`]*<\/a>)`\s*\n\s*: `(<a href="https:\/\/wa\.me\/[^`]*>)Consultar<\/a>`\s*\n\s*\)\s*\n\s*\}/gs,
    function(m, i1, i2, pdfA, icon, waA) {
      return '${pdf\n' + i1 + '? `' + pdfA + 'Ficha técnica' + icon + '`\n' +
             i1 + ': `' + waA + 'Consultar</a>`\n' + i1.slice(2) + '}';
    }
  );

  // Pattern B: single-line ${shop ? `...Tienda...` : \n (pdf ? `...Ficha...` : \n `...Consultar...`)}
  c = c.replace(
    /\$\{shop \? `<a href="\$\{fixUrl\(shop\)\}"[^`]*>Tienda<\/a>` : \s*\n\s*\(pdf \? `<a href="\$\{fixUrl\(pdf\)\}"[^`]*>(?:\$\{iconSVG\('down'\)\} )?(?:Ficha Técnica|Ficha técnica)<\/a>` : \s*\n\s*`<a href="https:\/\/wa\.me\/[^`]*>Consultar<\/a>`\)\}/gs,
    '${pdf ? `<a href="${fixUrl(pdf)}" download class="btn-ft" onclick="event.stopPropagation()">Ficha técnica ${iconSVG(\'down\')}</a>` : `<a href="https://wa.me/5492342464082" target="_blank" class="btn-ft" onclick="event.stopPropagation()">Consultar</a>`}'
  );

  if (c !== orig) {
    fs.writeFileSync(f, c, 'utf8');
    console.log('ok ' + f.split('/').slice(-3).join('/'));
  } else {
    console.log('skip ' + f.split('/').slice(-3).join('/'));
  }
}
