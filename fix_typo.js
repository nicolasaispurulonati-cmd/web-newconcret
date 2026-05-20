const fs = require('fs');

const targetFile = 'c:/newconcret-2.0/capacitacion/index.html';
let content = fs.readFileSync(targetFile, 'utf8');

// Remove Google Fonts links
content = content.replace(/<link\s+rel="preconnect"\s+href="https:\/\/fonts\.googleapis\.com">\s*<link\s+href="https:\/\/fonts\.googleapis\.com\/css2\?family=Barlow\+Condensed[^"]+"\s+rel="stylesheet">/gi, '');

// Remove local variables for fonts
content = content.replace(/--fd:\s*'[^']+',\s*sans-serif;\s*/g, '');
content = content.replace(/--fb:\s*'[^']+',\s*sans-serif;\s*/g, '');
content = content.replace(/--fm:\s*'[^']+',\s*monospace;\s*/g, '');

// Replace variable usages
content = content.replace(/var\(--fd\)/g, 'var(--font-d)');
content = content.replace(/var\(--fb\)/g, 'var(--font-b)');
content = content.replace(/var\(--fm\)/g, 'var(--font-m)');

fs.writeFileSync(targetFile, content);
console.log('Typography updated to global tokens');
