const fs = require('fs');
const path = require('path');

const dirs = [
  'c:/newconcret-2.0/mantenimiento/equipos/aspiradoras/index.html',
  'c:/newconcret-2.0/mantenimiento/equipos/lavasecapisos/index.html',
  'c:/newconcret-2.0/mantenimiento/equipos/lustradoras/index.html'
];

const cssTarget = `  .pcard-actions { display: flex; gap: .5rem; margin-top: auto; }
  .btn-ver { flex: 1.5; background: var(--r); color: #fff; font-family: var(--fd); font-weight: 700; text-transform: uppercase; font-size: .75rem; height: 48px; border: none; display: flex; align-items: center; justify-content: center; gap: .5rem; clip-path: polygon(0 0, 100% 0, 100% 70%, 90% 100%, 0 100%); transition: background .3s; }
  .btn-ver:hover { background: var(--rh); }
  .btn-ft { flex: 1; border: 1px solid var(--st); color: var(--as); font-family: var(--fd); font-weight: 600; text-transform: uppercase; font-size: .7rem; height: 48px; display: flex; align-items: center; justify-content: center; text-decoration: none; transition: all .3s; }
  .btn-ft:hover { background: var(--st); color: var(--wh); }`;

const cssReplacement = `  .pcard-actions { margin-top: auto; display: flex; gap: 1px; background: var(--st); border: 1px solid var(--st); }
  .btn-ver, .btn-ft {
    flex: 1;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    font-family: var(--fd);
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    transition: all 0.3s var(--ex);
    cursor: pointer;
    border: none;
    text-decoration: none;
  }
  .btn-ver { background: var(--r); color: #fff; }
  .btn-ver:hover { background: var(--rh); gap: 0.8rem; }
  .btn-ft { background: var(--dk); color: var(--as); }
  .btn-ft:hover { background: var(--cb); color: var(--wh); }`;

const renderCardActionsTarget = `      <div class="pcard-actions">
        <button class="btn-ver">
          Ver detalles \${iconSVG('arrow')}
        </button>
        \${shop 
          ? \`<a href="\${shop}" target="_blank" rel="noopener" class="btn-ft" onclick="event.stopPropagation()" style="flex:1;">Ver en tienda</a>\`
          : (pdf 
              ? \`<a href="\${pdf}" target="_blank" rel="noopener" class="btn-ft" onclick="event.stopPropagation()" style="flex:1;">Ficha técnica</a>\`
              : \`<a href="https://wa.me/5492342464082" target="_blank" rel="noopener" class="btn-ft" onclick="event.stopPropagation()" style="flex:1;">Consultar</a>\`
            )
        }
      </div>`;

const renderCardActionsReplacement = `      <div class="pcard-actions">
        <button class="btn-ver">
          Ver detalles \${iconSVG('arrow')}
        </button>
        \${shop 
          ? \`<a href="\${shop}" target="_blank" rel="noopener" class="btn-ft" onclick="event.stopPropagation()">Tienda</a>\`
          : (pdf 
              ? \`<a href="\${ROOT + pdf.replace(/^\\//, '')}" target="_blank" rel="noopener" class="btn-ft" onclick="event.stopPropagation()">Ficha Técnica \${iconSVG('down')}</a>\`
              : \`<a href="https://wa.me/5492342464082" target="_blank" rel="noopener" class="btn-ft" onclick="event.stopPropagation()">Consultar</a>\`
            )
        }
      </div>`;

const modalActionsTarget = `        <div class="modal-actions">
          <a href="#" class="btn-ver" style="flex:1;" id="modalConsultar">
            Consultar disponibilidad
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 3l4 4-4 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>
          </a>
          <a href="#" class="btn-ft" id="modalFicha" download>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1v8M4 6l3 3 3-3M2 11h10" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Ficha técnica
          </a>
        </div>`;

const modalActionsReplacement = `        <div class="modal-actions">
          <a href="#" class="btn-ver" style="flex:1;" id="modalConsultar">
            Ver en tienda
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 3l4 4-4 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>
          </a>
          <a href="#" class="btn-ft" id="modalFicha" download>
            Ficha técnica
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1v8M4 6l3 3 3-3M2 11h10" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
        </div>`;

const openModalLogicTarget = `  const wp = \`https://wa.me/5492342464082?text=Hola,%20me%20interesa%20el%20producto:%20\${encodeURIComponent(p.nombre)}%20(SKU:%20\${p.sku})\`;
  document.getElementById('modalConsultar').href = wp;`;

const openModalLogicReplacement = `  const modalTienda = document.getElementById('modalConsultar');
  if (p.storeUrl) {
    modalTienda.href = p.storeUrl;
    modalTienda.innerHTML = \`Ver en tienda <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 3l4 4-4 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>\`;
    modalTienda.target = "_blank";
  } else {
    const wp = \`https://wa.me/5492342464082?text=Hola,%20me%20interesa%20el%20producto:%20\${encodeURIComponent(p.nombre)}%20(SKU:%20\${p.sku})\`;
    modalTienda.href = wp;
    modalTienda.innerHTML = \`Consultar disponibilidad <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 3l4 4-4 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>\`;
    modalTienda.target = "_blank";
  }`;

dirs.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace CSS
  content = content.replace(cssTarget, cssReplacement);
  
  // Replace tiendaUrl
  content = content.replace(/const shop = p\.tiendaUrl;/g, 'const shop = p.storeUrl;');
  
  // Replace pcard-actions HTML
  content = content.replace(renderCardActionsTarget, renderCardActionsReplacement);
  
  // Replace modal HTML
  content = content.replace(modalActionsTarget, modalActionsReplacement);
  
  // Replace openModal logic
  content = content.replace(openModalLogicTarget, openModalLogicReplacement);

  // One last check for missing storeUrl check
  content = content.replace(/p\.pdfUrl;\s*modalFicha\.href = p\.pdfUrl;/g, "p.pdfUrl;\n    modalFicha.href = ROOT + p.pdfUrl.replace(/^\\//, '');");

  fs.writeFileSync(file, content);
  console.log('Updated ' + file);
});
