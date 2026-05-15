const fs = require('fs');

const files = [
  'c:/newconcret-2.0/mantenimiento/accesorios/index.html',
  'c:/newconcret-2.0/mantenimiento/equipos/index.html',
  'c:/newconcret-2.0/mantenimiento/productos-quimicos/index.html'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  // Replace the pcard-actions logic inside renderCard()
  const oldActionsRegex = /<div class="pcard-actions">[\s\S]*?<\/div>/;

  const newActions = `<div class="pcard-actions">
        <button class="btn-ver">Ver detalles <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 3l4 4-4 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg></button>
        \${pdf 
          ? \`<a href="\${pdf}" target="_blank" rel="noopener" class="btn-ft" onclick="event.stopPropagation()">Ficha Técnica <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1v8M4 6l3 3 3-3M2 11h10" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></a>\`
          : \`<button class="btn-ft" onclick="event.stopPropagation(); window.showNCToast('Este producto no cuenta con ficha técnica por el momento.')">Ficha Técnica <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1v8M4 6l3 3 3-3M2 11h10" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>\`
        }
      </div>`;

  // Actually, there are two pcard-actions in the file: one in the CSS/HTML somewhere, and one inside renderCard.
  // We need to replace only the one inside renderCard!
  // It's after `<div class="pcard-features">\${feats}<\/div>`
  
  const targetSplit = `<div class="pcard-features">\${feats}</div>`;
  const parts = content.split(targetSplit);
  if (parts.length === 2) {
    const endDivPos = parts[1].indexOf('</div>\n    </div>\n  </div>`;');
    if (endDivPos !== -1) {
       parts[1] = '\n      ' + newActions + parts[1].substring(endDivPos);
       content = parts[0] + targetSplit + parts[1];
    }
  }

  // Also, update "Ver detalles \${iconSVG('arrow')}" to just use raw SVG like before to avoid breaking if iconSVG is missing, but it is defined.
  
  fs.writeFileSync(file, content, 'utf8');
  console.log('Fixed buttons in ' + file);
}
