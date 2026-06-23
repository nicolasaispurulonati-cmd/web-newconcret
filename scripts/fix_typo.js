const fs = require('fs');

const targetFile = 'c:/newconcret-2.0/sistema-newconcret/index.html';
let content = fs.readFileSync(targetFile, 'utf8');

// Remove Google Fonts link
content = content.replace(/<link\s+href="https:\/\/fonts\.googleapis\.com\/css2\?[^"]+"\s+rel="stylesheet">\s*/gi, '');

// Remove local font token declarations from :root
content = content.replace(/\s*--fd:\s*'[^']+',\s*sans-serif;\s*/g, '\n            ');
content = content.replace(/\s*--fb:\s*'[^']+',\s*sans-serif;\s*/g, '\n            ');
content = content.replace(/\s*--fm:\s*'[^']+',\s*monospace;\s*/g, '\n            ');

// Replace variable usages throughout
content = content.replace(/var\(--fd\)/g, 'var(--font-d)');
content = content.replace(/var\(--fb\)/g, 'var(--font-b)');
content = content.replace(/var\(--fm\)/g, 'var(--font-m)');

fs.writeFileSync(targetFile, content);
console.log('Done: typography tokens updated to global variables.');
