const fs = require('fs');
function fixFile(path) {
  let text = fs.readFileSync(path, 'latin1'); 
  
  text = text.replace('  /* ── PAGE HEADER ── */', '  #nav { display: grid !important; grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr) !important; }\n\n  /* ── PAGE HEADER ── */');

  const cssOld = '  .pcard-actions { margin-top: auto; display: flex; gap: 1px; background: var(--st); border: 1px solid var(--st); }\n  .btn-ver, .btn-ft { flex: 1; height: 50px; display: flex; align-items: center; justify-content: center; gap: 0.6rem; font-family: var(--fd); font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.15em; transition: all 0.3s var(--ex); cursor: pointer; border: none; text-decoration: none; }\n  .btn-ver { background: var(--r); color: #fff; }\n  .btn-ver:hover { background: var(--rh); gap: 0.8rem; }\n  .btn-ft { background: var(--dk); color: var(--as); }\n  .btn-ft:hover { background: var(--cb); color: var(--wh); }';
  const cssNew = '  .pcard-actions { margin-top: auto; display: flex; gap: 1px; background: var(--nc-steel); border: 1px solid var(--nc-steel); }\n  .btn-ver, .btn-ft {\n    flex: 1;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 0.6rem;\n    font-family: var(--fd);\n    font-size: 0.75rem;\n    font-weight: 700;\n    text-transform: uppercase;\n    letter-spacing: 0.15em;\n    transition: all 0.3s var(--ex);\n    cursor: pointer;\n    border: none;\n    text-decoration: none;\n  }\n  .btn-ver { background: var(--r); color: #fff; }\n  .btn-ver:hover { background: var(--rh); gap: 0.8rem; }\n  .btn-ft { background: var(--dk); color: var(--as); }\n  .btn-ft:hover { background: var(--cb); color: var(--wh); }';
  text = text.replace(cssOld, cssNew);

  const btnOld1 = '${shop \n          ? `<a href="${shop}" target="_blank" rel="noopener" class="btn-ft" onclick="event.stopPropagation()">Tienda</a>`\n          : (pdf \n              ? `<a href="${ROOT + pdf.replace(/^\\//, \'\')}" target="_blank" rel="noopener" class="btn-ft" onclick="event.stopPropagation()">${iconSVG(\'down\')} Ficha técnica</a>`\n              : `<a href="https://wa.me/5492342464082" target="_blank" rel="noopener" class="btn-ft" onclick="event.stopPropagation()">Consultar</a>`\n            )\n        }';
  const btnOld2 = '${shop \n          ? `<a href="${shop}" target="_blank" rel="noopener" class="btn-ft" onclick="event.stopPropagation()">Tienda</a>`\n          : (pdf \n              ? `<a href="${ROOT + pdf.replace(/^\\//, \'\')}" target="_blank" rel="noopener" class="btn-ft" onclick="event.stopPropagation()">Ficha Técnica ${iconSVG(\'down\')}</a>`\n              : `<a href="https://wa.me/5492342464082" target="_blank" rel="noopener" class="btn-ft" onclick="event.stopPropagation()">Consultar</a>`\n            )\n        }';
  const btnNew = '${pdf \n          ? `<a href="${ROOT + pdf.replace(/^\\//, \'\')}" target="_blank" rel="noopener" class="btn-ft" onclick="event.stopPropagation()">Ficha Técnica ${iconSVG(\'down\')}</a>`\n          : `<button class="btn-ft" onclick="event.stopPropagation(); window.showNCToast(\'Este equipo no cuenta con ficha técnica por el momento.\')">Ficha Técnica ${iconSVG(\'down\')}</button>`\n        }';
  text = text.replace(btnOld1, btnNew);
  text = text.replace(btnOld2, btnNew);

  const matchOld1 = '      if (s !== seccion) return false;\n      if (categoria && c !== categoria) return false;\n      if (subcategoria && subcategoria !== \'all\') return sc === subcategoria;\n      return true;\n    });';
  const matchOld2 = '      if (s !== seccion) return false;\n      if (categoria && c !== categoria) return false;\n      if (subcategoria && subcategoria !== \'all\') return sc === subcategoria;\n      return !sc || sc === \'\';\n    });';
  const matchNew = '      if (s !== seccion) return false;\n      if (categoria && c !== categoria) return false;\n      \n      if (subcategoria && subcategoria !== \'all\') {\n         return sc === subcategoria;\n      } else {\n         return !sc;\n      }\n    });';
  text = text.replace(matchOld1, matchNew);
  text = text.replace(matchOld2, matchNew);

  const modalOld = '  const modalFicha = document.getElementById(\'modalFicha\');\n  if (p.pdfUrl) {\n    modalFicha.href = ROOT + p.pdfUrl.replace(/^\\//, \'\');\n    modalFicha.style.display = \'inline-flex\';\n  } else {\n    modalFicha.style.display = \'none\';\n  }';
  const modalNew = '  const modalFicha = document.getElementById(\'modalFicha\');\n  if (p.pdfUrl) {\n    modalFicha.href = ROOT + p.pdfUrl.replace(/^\\//, \'\');\n    modalFicha.onclick = null;\n    modalFicha.target = "_blank";\n  } else {\n    modalFicha.href = "javascript:void(0)";\n    modalFicha.removeAttribute("target");\n    modalFicha.onclick = function(e) {\n      e.preventDefault();\n      window.showNCToast(\'Este equipo no cuenta con ficha técnica por el momento.\');\n    };\n  }\n  modalFicha.style.display = \'inline-flex\';';
  text = text.replace(modalOld, modalNew);

  fs.writeFileSync(path, text, 'utf8'); // Just overwrite as utf8
}

try { fixFile('c:/newconcret-2.0/pulido/equipos/aspiradoras/index.html'); } catch(e) { console.log("Failed aspiradoras", e); }
try { fixFile('c:/newconcret-2.0/pulido/equipos/lavasecapisos/index.html'); } catch(e) { console.log("Failed lavasecapisos", e); }
try { fixFile('c:/newconcret-2.0/pulido/equipos/accesorios-aspiradoras/index.html'); } catch(e) { console.log("Failed acc-asp", e); }
console.log('Fixed files');
