const fs = require('fs');

// Read the actual matchProduct from insumos/index.html
const html = fs.readFileSync('c:/newconcret-2.0/pulido/insumos/index.html', 'utf8');
const match = html.match(/function matchProduct[\s\S]*?^}/m);
if (!match) {
    console.log("Could not extract matchProduct");
    process.exit(1);
}

// Extract product data
const productosJs = fs.readFileSync('c:/newconcret-2.0/assets/data/productos.js', 'utf8');
// remove "const productos = "
const jsonStr = productosJs.replace(/const\s+productos\s*=\s*/, '').replace(/;$/, '');
const productos = JSON.parse(jsonStr);

// Create the context
const script = `
${match[0]}

let count = 0;
for (const p of productos) {
    if (matchProduct(p, 'pulido', 'insumos', 'all')) {
        count++;
    }
}
console.log("Matched products for insumos/index.html:", count);
`;

fs.writeFileSync('c:/newconcret-2.0/scratch.js', script);
