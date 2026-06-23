const fs = require('fs');

const targets = [
  'C:/newconcret-2.0/pulido/productos-quimicos/aglutinantes/index.html',
  'C:/newconcret-2.0/pulido/productos-quimicos/densificadores/index.html',
  'C:/newconcret-2.0/pulido/productos-quimicos/detergentes/index.html',
  'C:/newconcret-2.0/pulido/productos-quimicos/impermeabilizantes/index.html',
  'C:/newconcret-2.0/pulido/productos-quimicos/puentes-de-adherencia/index.html',
  'C:/newconcret-2.0/pulido/productos-quimicos/selladores/index.html'
];

for (const f of targets) {
  let c = fs.readFileSync(f, 'utf8');
  const orig = c;

  // Pattern: ${shop\n ? `...Tienda...`\n : (pdf ? `...Ficha...` : `...Consultar...`)\n }
  c = c.replace(
    /\$\{shop\s*\n(\s*)\? `<a href="\$\{fixUrl\(shop\)\}"[^`]*>Tienda<\/a>`\s*\n\s*: \(pdf \? `<a href="\$\{fixUrl\(pdf\)\}"[^`]*>(?:Ficha Técnica|Ficha técnica|Ficha) \$\{iconSVG\('down'\)\}<\/a>` : `<a href="https:\/\/wa\.me\/[^`]*>Consultar<\/a>`\)\s*\n\s*\}/gs,
    function(m, ind) {
      return '${pdf\n' + ind + '? `<a href="${fixUrl(pdf)}" download class="btn-ft" onclick="event.stopPropagation()">Ficha técnica ${iconSVG(\'down\')}</a>`\n' +
             ind + ': `<a href="https://wa.me/5492342464082" target="_blank" class="btn-ft" onclick="event.stopPropagation()">Consultar</a>`\n' +
             ind.slice(2) + '}';
    }
  );

  if (c !== orig) {
    fs.writeFileSync(f, c, 'utf8');
    console.log('ok ' + f.split('/').slice(-3).join('/'));
  } else {
    console.log('skip ' + f.split('/').slice(-3).join('/'));
  }
}
