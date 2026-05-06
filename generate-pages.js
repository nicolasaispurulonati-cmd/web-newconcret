const fs   = require('fs');
const path = require('path');

/* ──────────────────────────────────────
   SHARED CSS (identical to master template)
────────────────────────────────────── */
const CSS = `
  :root{--r:#C1121F;--bk:#0A0A0A;--dk:#111111;--cb:#161616;--st:#272727;--mi:#555;--as:#888;--lt:#CACAC8;--wh:#F4F4F2;--fm:'JetBrains Mono',monospace;--fd:'Barlow Condensed',sans-serif;--fb:'Barlow',sans-serif;--ex:cubic-bezier(0.16,1,0.3,1);}
  .nav-home{display:flex!important;}
  @media(min-width:1024px){.grid-wrap{grid-template-columns:repeat(3,1fr)!important;gap:1.5px!important;}}
  .products-section{padding:2.5rem;background:var(--bk);}
  .grid-wrap{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:1.5px;background:var(--st);}
  .grid-wrap.list-view{grid-template-columns:1fr!important;}
  .pcard{background:var(--dk);display:flex;flex-direction:column;position:relative;overflow:hidden;cursor:none;transition:background .25s;}
  .pcard:hover{background:var(--cb);}
  .pcard::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:var(--r);transform:scaleX(0);transform-origin:left;transition:transform .4s var(--ex);z-index:2;}
  .pcard:hover::before{transform:scaleX(1);}
  .pcard-img-wrap{position:relative;overflow:hidden;aspect-ratio:1/1;flex-shrink:0;background:var(--cb);padding:1.5rem;display:flex;align-items:center;justify-content:center;}
  .pcard-img{width:100%;height:100%;object-fit:contain;display:block;transition:transform .6s var(--ex);}
  .pcard:hover .pcard-img{transform:scale(1.08);}
  .pcard-img-ov{display:none;}
  .pcard-badge{position:absolute;top:1rem;left:1rem;z-index:1;font-family:var(--fm);font-size:.58rem;letter-spacing:.14em;text-transform:uppercase;color:var(--r);background:rgba(10,10,10,.85);padding:.25rem .65rem;border:1px solid rgba(193,18,31,.3);}
  .pcard-badge-new{position:absolute;top:1rem;right:1rem;z-index:1;font-family:var(--fm);font-size:.55rem;letter-spacing:.12em;text-transform:uppercase;color:#fff;background:var(--r);padding:.22rem .55rem;}
  .pcard-sku{position:absolute;bottom:.75rem;right:1rem;z-index:1;font-family:var(--fm);font-size:.55rem;letter-spacing:.1em;color:rgba(255,255,255,.25);}
  .pcard-body{padding:1.6rem 1.75rem;flex:1;display:flex;flex-direction:column;}
  .pcard-cat{font-family:var(--fm);font-size:.6rem;letter-spacing:.15em;text-transform:uppercase;color:var(--r);margin-bottom:.55rem;}
  .pcard-name{font-family:var(--fd);font-weight:800;font-size:1.35rem;text-transform:uppercase;color:var(--wh);letter-spacing:.01em;line-height:1.05;margin-bottom:.6rem;}
  .pcard-desc{font-size:.83rem;font-weight:300;color:var(--as);line-height:1.55;margin-bottom:1.25rem;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}
  .pcard-features{display:flex;flex-direction:column;margin-bottom:1.5rem;border:1px solid var(--st);}
  .pcard-feat{display:flex;align-items:flex-start;gap:.8rem;padding:.65rem 1rem;border-bottom:1px solid var(--st);transition:background .2s;}
  .pcard-feat:last-child{border-bottom:none;}
  .pcard-feat-ic{width:22px;height:22px;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:var(--st);color:var(--r);font-size:10px;}
  .pcard-feat-tx{flex:1;}
  .pcard-feat-label{font-family:var(--fm);font-size:.56rem;letter-spacing:.12em;text-transform:uppercase;color:var(--mi);display:block;margin-bottom:.1rem;}
  .pcard-feat-val{font-family:var(--fd);font-weight:600;font-size:.9rem;color:var(--lt);}
  .pcard-actions{display:flex;gap:.75rem;margin-top:auto;flex-wrap:wrap;}
  .btn-ver{flex:1;display:inline-flex;align-items:center;justify-content:center;gap:.55rem;font-family:var(--fd);font-weight:700;font-size:.74rem;letter-spacing:.16em;text-transform:uppercase;color:#fff;background:var(--r);padding:.75rem 1.25rem;text-decoration:none;clip-path:polygon(0 0,100% 0,100% 68%,92% 100%,0 100%);position:relative;overflow:hidden;transition:background .2s;border:none;cursor:none;}
  .btn-ver::before{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.12),transparent);transition:left .45s;}
  .btn-ver:hover::before{left:100%;}
  .btn-ft{display:inline-flex;align-items:center;justify-content:center;gap:.45rem;font-family:var(--fd);font-weight:600;font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;color:var(--as);background:none;border:1px solid var(--st);padding:.75rem 1rem;text-decoration:none;cursor:none;transition:color .2s,border-color .2s,background .2s;white-space:nowrap;}
  .btn-ft:hover{color:var(--wh);border-color:var(--as);background:rgba(255,255,255,.04);}
  .modal-bg{position:fixed;inset:0;z-index:2000;background:rgba(0,0,0,.85);backdrop-filter:blur(10px);display:flex;align-items:center;justify-content:center;opacity:0;pointer-events:none;transition:opacity .3s;}
  .modal-bg.open{opacity:1;pointer-events:all;}
  .modal{background:var(--dk);border:1px solid var(--st);width:100%;max-width:900px;position:relative;}
  .modal-close{position:absolute;top:1.5rem;right:1.5rem;z-index:10;background:none;border:none;color:var(--as);cursor:none;}
  .modal-close:hover{color:var(--wh);}
  .modal-grid{display:grid;grid-template-columns:1.2fr 1fr;}
  .modal-img{width:100%;height:100%;object-fit:contain;background:#000;padding:2rem;}
  .modal-body{padding:3rem;}
  .reveal{opacity:0;transform:translateY(20px);transition:all .7s var(--ex);}
  .reveal.in{opacity:1;transform:none;}
  body{cursor:none;}
`;

/* ──────────────────────────────────────
   SHARED JS LOGIC
────────────────────────────────────── */
const JS = `
const ALL_PRODUCTS = typeof productos !== 'undefined' ? productos : [];
let activeFilter = 'all';
let activeSort   = 'default';
let isListView   = false;

function matchProduct(p, seccion, categoria, subcategoria) {
  if (p.rutas && p.rutas.length > 0) {
    return p.rutas.some(function(r) {
      var s  = r['sección']     || r['seccion']     || '';
      var c  = r['categoría']   || r['categoria']   || '';
      var sc = r['subcategoría']|| r['subcategoria']|| '';
      if (s !== seccion) return false;
      if (categoria   && c  !== categoria)   return false;
      if (subcategoria && sc !== subcategoria) return false;
      return true;
    });
  }
  var inSec = Array.isArray(p.secciones) && p.secciones.indexOf(seccion) !== -1;
  if (!inSec) return false;
  if (categoria   && p.categoria   !== categoria)   return false;
  if (subcategoria && p.subcategoria !== subcategoria) return false;
  return true;
}

var arrowSVG = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 3l4 4-4 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>';
var downSVG  = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1v8M4 6l3 3 3-3M2 11h10" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>';

function renderCard(p, delay) {
  var imgSrc = p.imagen.startsWith('http') ? p.imagen : ROOT + p.imagen.replace(/^\\//, '');
  var badge  = p.badge ? '<div class="pcard-badge-new">' + p.badge + '</div>' : '';
  var feats  = (p.specs || []).slice(0,3).map(function(f) {
    return '<div class="pcard-feat"><div class="pcard-feat-ic">' + (f.icono||'◉') + '</div><div class="pcard-feat-tx"><span class="pcard-feat-label">' + f.clave + '</span><span class="pcard-feat-val">' + f.valor + '</span></div></div>';
  }).join('');
  return '<div class="pcard reveal d' + delay + '" data-id="' + p.id + '">' +
    '<div class="pcard-img-wrap">' +
      '<img class="pcard-img" src="' + imgSrc + '" alt="' + p.nombre + '" loading="lazy">' +
      '<div class="pcard-img-ov"></div>' +
      '<div class="pcard-badge">' + (p.cat_label||'Producto') + '</div>' + badge +
      '<div class="pcard-sku">' + p.sku + '</div>' +
    '</div>' +
    '<div class="pcard-body">' +
      '<div class="pcard-cat">' + (p.cat_label||'Categoría') + '</div>' +
      '<div class="pcard-name">' + p.nombre + '</div>' +
      '<div class="pcard-desc">' + p.descripcion + '</div>' +
      '<div class="pcard-features">' + feats + '</div>' +
      '<div class="pcard-actions">' +
        '<button class="btn-ver" onclick="openModal(\\'' + p.id + '\\')">Ver más ' + arrowSVG + '</button>' +
        '<a href="' + (p.pdfUrl||'#') + '" class="btn-ft" ' + (p.pdfUrl ? 'download' : 'style="opacity:0.3;pointer-events:none;"') + '>' + downSVG + ' Ficha técnica</a>' +
      '</div>' +
    '</div>' +
  '</div>';
}

function getFiltered() {
  var sub = PAGE_SUBCATEGORIA || ((activeFilter === 'all') ? null : activeFilter);
  return ALL_PRODUCTS.filter(function(p) {
    return matchProduct(p, PAGE_SECCION, PAGE_CATEGORIA, sub);
  }).sort(function(a, b) {
    if (activeSort === 'az') return a.nombre.localeCompare(b.nombre);
    if (activeSort === 'za') return b.nombre.localeCompare(a.nombre);
    return 0;
  });
}

function render() {
  var grid = document.getElementById('productGrid');
  var list = getFiltered();
  var delays = [1,2,3,1,2,3,1,2,3];
  document.getElementById('showing-count').textContent = list.length;
  document.getElementById('total-count').textContent   = list.length;
  grid.classList.toggle('list-view', isListView);
  if (!list.length) {
    grid.innerHTML = '<div class="empty-state"><h3>Sin resultados</h3><p>No hay productos en esta categoría.</p></div>';
    return;
  }
  grid.innerHTML = list.map(function(p, i) { return renderCard(p, delays[i % delays.length]); }).join('');
  requestAnimationFrame(function() {
    document.querySelectorAll('.reveal').forEach(function(el) { obsReveal.observe(el); });
  });
}

document.querySelectorAll('.pill').forEach(function(btn) {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.pill').forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    render();
  });
});
document.getElementById('sortSelect').addEventListener('change', function(e) { activeSort = e.target.value; render(); });
document.getElementById('btnGrid').addEventListener('click', function() { isListView = false; document.getElementById('btnGrid').classList.add('active'); document.getElementById('btnList').classList.remove('active'); render(); });
document.getElementById('btnList').addEventListener('click', function() { isListView = true; document.getElementById('btnList').classList.add('active'); document.getElementById('btnGrid').classList.remove('active'); render(); });

var modalBg = document.getElementById('modalBg');
function openModal(id) {
  var p = ALL_PRODUCTS.find(function(x) { return x.id === id; });
  if (!p) return;
  var imgSrc = p.imagen.startsWith('http') ? p.imagen : ROOT + p.imagen.replace(/^\\//, '');
  document.getElementById('modalImg').src              = imgSrc;
  document.getElementById('modalImg').alt              = p.nombre;
  document.getElementById('modalCat').textContent      = (p.cat_label||'Categoría') + ' · ' + p.sku;
  document.getElementById('modalName').textContent     = p.nombre;
  document.getElementById('modalDesc').textContent     = p.descripcion;
  document.getElementById('modalFicha').href           = p.pdfUrl || '#';
  document.getElementById('modalFicha').style.display  = p.pdfUrl ? 'inline-flex' : 'none';
  document.getElementById('modalFeats').innerHTML = (p.specs||[]).map(function(f) {
    return '<div class="modal-feat"><div class="modal-feat-ic">' + (f.icono||'◉') + '</div><div><span class="modal-feat-label">' + f.clave + '</span><span class="modal-feat-val">' + f.valor + '</span></div></div>';
  }).join('');
  modalBg.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() { modalBg.classList.remove('open'); document.body.style.overflow = ''; }
document.getElementById('modalClose').addEventListener('click', closeModal);
modalBg.addEventListener('click', function(e) { if (e.target === modalBg) closeModal(); });

var cur = document.getElementById('cur'), ring = document.getElementById('ring');
document.addEventListener('mousemove', function(e) { cur.style.left = e.clientX+'px'; cur.style.top = e.clientY+'px'; ring.style.left = e.clientX+'px'; ring.style.top = e.clientY+'px'; });
document.addEventListener('mousedown', function() { document.body.classList.add('cur-grow'); });
document.addEventListener('mouseup',   function() { document.body.classList.remove('cur-grow'); });

var obsReveal = new IntersectionObserver(function(entries) {
  entries.forEach(function(en) { if (en.isIntersecting) en.target.classList.add('in'); });
}, { threshold: 0.1 });

render();
`;

/* ──────────────────────────────────────
   MODAL HTML
────────────────────────────────────── */
const MODAL = `
<div class="modal-bg" id="modalBg">
  <div class="modal" id="modal">
    <button class="modal-close" id="modalClose">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 1l12 12M13 1L1 13" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>
    </button>
    <div class="modal-grid">
      <img id="modalImg" src="" alt="" class="modal-img">
      <div class="modal-body">
        <div class="modal-cat"  id="modalCat"></div>
        <div class="modal-name" id="modalName"></div>
        <div class="modal-desc" id="modalDesc"></div>
        <div class="modal-feats-title">Características técnicas</div>
        <div class="modal-feats" id="modalFeats"></div>
        <div class="modal-actions">
          <a href="#" class="btn-ver" style="flex:1;" id="modalConsultar">
            Consultar disponibilidad
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 3l4 4-4 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>
          </a>
          <a href="#" class="btn-ft" id="modalFicha" download>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1v8M4 6l3 3 3-3M2 11h10" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Ficha técnica
          </a>
        </div>
      </div>
    </div>
  </div>
</div>`;

/* ──────────────────────────────────────
   PAGE CONFIGURATIONS
────────────────────────────────────── */
const PAGES = [
  // ── CATEGORY LEVEL (../../) ─────────────────────────────────────────
  {
    file:      'construccion/productos-quimicos/index.html',
    root:      '../../', seccion: 'construccion', categoria: 'productos-quimicos', subcategoria: null,
    title:     'Productos Químicos — Construcción — NewConcret',
    metaDesc:  'Aglutinantes, curadores, puentes de adherencia y aditivos para llaneado formulados para obras de hormigón industrial.',
    hero:      '../../assets/img/hero/quimicos-construccion.jpg',
    eyebrow:   'Subcategoría de Construcción',
    breadcrumb: `<a href="../../">Inicio</a><span>›</span><a href="../../construccion/">Construcción</a><span>›</span><em>Productos químicos</em>`,
    h1: 'Productos<br>químicos',
    desc: 'Aglutinantes, curadores, puentes de adherencia y aditivos para llaneado. Formulados para obras de hormigón industrial.',
    pills: `<button class="pill active" data-filter="all">Todos</button><button class="pill" data-filter="aglutinantes">Aglutinantes</button><button class="pill" data-filter="curadores">Curadores</button><button class="pill" data-filter="puentes-de-adherencia">Puentes adherencia</button><button class="pill" data-filter="aditivo-llaneado">Aditivos llaneado</button>`
  },
  {
    file:      'construccion/equipos/index.html',
    root:      '../../', seccion: 'construccion', categoria: 'equipos', subcategoria: null,
    title:     'Equipos — Construcción — NewConcret',
    metaDesc:  'Allanadoras con motor Honda y accesorios para compactar y alisar pisos de hormigón industrial. NewConcret.',
    hero:      '../../assets/img/hero/equipos-construccion.jpg',
    eyebrow:   'Subcategoría de Construcción',
    breadcrumb: `<a href="../../">Inicio</a><span>›</span><a href="../../construccion/">Construcción</a><span>›</span><em>Equipos</em>`,
    h1: 'Equipos<br>de construcción',
    desc: 'Allanadoras con motor Honda y accesorios para compactar y alisar pisos de hormigón industrial.',
    pills: `<button class="pill active" data-filter="all">Todos</button><button class="pill" data-filter="allanadoras">Allanadoras</button>`
  },
  // ── MATERIALES SUBCATEGORIES (../../../) ────────────────────────────
  {
    file: 'construccion/materiales/endurecedor-superficial/index.html',
    root: '../../../', seccion: 'construccion', categoria: 'materiales', subcategoria: 'endurecedor-superficial',
    title: 'Endurecedor Superficial — Materiales — NewConcret',
    metaDesc: 'Endurecedor superficial no metálico para hormigón fresco. Alta resistencia al desgaste para pisos industriales.',
    hero: '../../../assets/img/hero/endurecedor.jpg',
    eyebrow: 'Materiales · Construcción',
    breadcrumb: `<a href="../../../">Inicio</a><span>›</span><a href="../../../construccion/">Construcción</a><span>›</span><a href="../../../construccion/materiales/">Materiales</a><span>›</span><em>Endurecedor superficial</em>`,
    h1: 'Endurecedor<br>superficial',
    desc: 'Endurecedor superficial no metálico para hormigón fresco. Alta resistencia al desgaste para pisos industriales.',
    pills: `<button class="pill active" data-filter="all">Endurecedor superficial</button>`
  },
  {
    file: 'construccion/materiales/grouting/index.html',
    root: '../../../', seccion: 'construccion', categoria: 'materiales', subcategoria: 'grouting',
    title: 'Grouting — Materiales — NewConcret',
    metaDesc: 'Grouting cementicio de reparación estructural y relleno de vacíos en obras de hormigón.',
    hero: '../../../assets/img/hero/grouting.jpg',
    eyebrow: 'Materiales · Construcción',
    breadcrumb: `<a href="../../../">Inicio</a><span>›</span><a href="../../../construccion/">Construcción</a><span>›</span><a href="../../../construccion/materiales/">Materiales</a><span>›</span><em>Grouting</em>`,
    h1: 'Grouting<br>cementicio',
    desc: 'Grouting cementicio de reparación estructural y relleno de vacíos para obras de hormigón.',
    pills: `<button class="pill active" data-filter="all">Grouting</button>`
  },
  {
    file: 'construccion/materiales/macrofibra/index.html',
    root: '../../../', seccion: 'construccion', categoria: 'materiales', subcategoria: 'macrofibra',
    title: 'Macrofibra — Materiales — NewConcret',
    metaDesc: 'Macrofibra de polipropileno para refuerzo estructural de hormigón industrial.',
    hero: '../../../assets/img/hero/macro.jpg',
    eyebrow: 'Materiales · Construcción',
    breadcrumb: `<a href="../../../">Inicio</a><span>›</span><a href="../../../construccion/">Construcción</a><span>›</span><a href="../../../construccion/materiales/">Materiales</a><span>›</span><em>Macrofibra</em>`,
    h1: 'Macrofibra<br>estructural',
    desc: 'Macrofibra de polipropileno para el refuerzo estructural de hormigón industrial.',
    pills: `<button class="pill active" data-filter="all">Macrofibra</button>`
  },
  {
    file: 'construccion/materiales/microfibra/index.html',
    root: '../../../', seccion: 'construccion', categoria: 'materiales', subcategoria: 'microfibra',
    title: 'Microfibra — Materiales — NewConcret',
    metaDesc: 'Microfibra monofilamento de polipropileno para control de fisuración en hormigón.',
    hero: '../../../assets/img/hero/microfibra.jpg',
    eyebrow: 'Materiales · Construcción',
    breadcrumb: `<a href="../../../">Inicio</a><span>›</span><a href="../../../construccion/">Construcción</a><span>›</span><a href="../../../construccion/materiales/">Materiales</a><span>›</span><em>Microfibra</em>`,
    h1: 'Microfibra<br>monofilamento',
    desc: 'Microfibra monofilamento de polipropileno virgen para control de fisuración en hormigón.',
    pills: `<button class="pill active" data-filter="all">Microfibra</button>`
  },
  {
    file: 'construccion/materiales/mortero-cementicio/index.html',
    root: '../../../', seccion: 'construccion', categoria: 'materiales', subcategoria: 'mortero-cementicio',
    title: 'Mortero Cementicio — Materiales — NewConcret',
    metaDesc: 'Mortero cementicio para reparación, nivelación y terminación de superficies de hormigón.',
    hero: '../../../assets/img/hero/mortero-cementicio.jpg',
    eyebrow: 'Materiales · Construcción',
    breadcrumb: `<a href="../../../">Inicio</a><span>›</span><a href="../../../construccion/">Construcción</a><span>›</span><a href="../../../construccion/materiales/">Materiales</a><span>›</span><em>Mortero cementicio</em>`,
    h1: 'Mortero<br>cementicio',
    desc: 'Mortero cementicio para reparación, nivelación y terminación de superficies de hormigón.',
    pills: `<button class="pill active" data-filter="all">Mortero cementicio</button>`
  },
  {
    file: 'construccion/materiales/nylon/index.html',
    root: '../../../', seccion: 'construccion', categoria: 'materiales', subcategoria: 'nylon',
    title: 'Nylon — Materiales — NewConcret',
    metaDesc: 'Nylon negro de 200 micrones para barrera hidrófuga en construcción de pisos de hormigón.',
    hero: '../../../assets/img/hero/nylon.jpg',
    eyebrow: 'Materiales · Construcción',
    breadcrumb: `<a href="../../../">Inicio</a><span>›</span><a href="../../../construccion/">Construcción</a><span>›</span><a href="../../../construccion/materiales/">Materiales</a><span>›</span><em>Nylon</em>`,
    h1: 'Nylon<br>barrera hidrófuga',
    desc: 'Nylon negro de 200 micrones. Barrera hidrófuga para humedad ascendente en pisos de hormigón.',
    pills: `<button class="pill active" data-filter="all">Nylon</button>`
  },
  // ── PRODUCTOS-QUIMICOS SUBCATEGORIES (../../../) ─────────────────────
  {
    file: 'construccion/productos-quimicos/aditivo-llaneado/index.html',
    root: '../../../', seccion: 'construccion', categoria: 'productos-quimicos', subcategoria: 'aditivo-llaneado',
    title: 'Aditivos para Llaneado — Químicos — NewConcret',
    metaDesc: 'Aditivos facilitadores de llaneado de sílice coloidal para mejorar el acabado superficial del hormigón.',
    hero: '../../../assets/img/hero/aditivos-llaneado.jpg',
    eyebrow: 'Productos Químicos · Construcción',
    breadcrumb: `<a href="../../../">Inicio</a><span>›</span><a href="../../../construccion/">Construcción</a><span>›</span><a href="../../../construccion/productos-quimicos/">Químicos</a><span>›</span><em>Aditivos para llaneado</em>`,
    h1: 'Aditivos<br>para llaneado',
    desc: 'Aditivos de sílice coloidal para regular el fraguado y facilitar el llaneado del hormigón.',
    pills: `<button class="pill active" data-filter="all">Aditivos para llaneado</button>`
  },
  {
    file: 'construccion/productos-quimicos/aglutinantes/index.html',
    root: '../../../', seccion: 'construccion', categoria: 'productos-quimicos', subcategoria: 'aglutinantes',
    title: 'Aglutinantes — Químicos — NewConcret',
    metaDesc: 'Aglutinantes líquidos para sistemas de pulido y densificación de hormigón. NewConcret.',
    hero: '../../../assets/img/hero/aglutinantes.jpg',
    eyebrow: 'Productos Químicos · Construcción',
    breadcrumb: `<a href="../../../">Inicio</a><span>›</span><a href="../../../construccion/">Construcción</a><span>›</span><a href="../../../construccion/productos-quimicos/">Químicos</a><span>›</span><em>Aglutinantes</em>`,
    h1: 'Aglutinantes<br>para hormigón',
    desc: 'Aglutinantes líquidos para relleno de micro poros y sistemas de pulido en pisos de hormigón.',
    pills: `<button class="pill active" data-filter="all">Aglutinantes</button>`
  },
  {
    file: 'construccion/productos-quimicos/curadores/index.html',
    root: '../../../', seccion: 'construccion', categoria: 'productos-quimicos', subcategoria: 'curadores',
    title: 'Curadores — Químicos — NewConcret',
    metaDesc: 'Curadores de membrana acrílica para control de evaporación en hormigón fresco. NewConcret.',
    hero: '../../../assets/img/hero/curadores.png',
    eyebrow: 'Productos Químicos · Construcción',
    breadcrumb: `<a href="../../../">Inicio</a><span>›</span><a href="../../../construccion/">Construcción</a><span>›</span><a href="../../../construccion/productos-quimicos/">Químicos</a><span>›</span><em>Curadores</em>`,
    h1: 'Curadores<br>de membrana',
    desc: 'Curadores acrílicos líquidos para el control de evaporación en hormigón fresco.',
    pills: `<button class="pill active" data-filter="all">Curadores</button>`
  },
  {
    file: 'construccion/productos-quimicos/puentes-de-adherencia/index.html',
    root: '../../../', seccion: 'construccion', categoria: 'productos-quimicos', subcategoria: 'puentes-de-adherencia',
    title: 'Puentes de Adherencia — Químicos — NewConcret',
    metaDesc: 'Puentes de adherencia para garantizar la unión entre capas de hormigón nuevo y existente.',
    hero: '../../../assets/img/hero/quimicos-construccion.jpg',
    eyebrow: 'Productos Químicos · Construcción',
    breadcrumb: `<a href="../../../">Inicio</a><span>›</span><a href="../../../construccion/">Construcción</a><span>›</span><a href="../../../construccion/productos-quimicos/">Químicos</a><span>›</span><em>Puentes de adherencia</em>`,
    h1: 'Puentes de<br>adherencia',
    desc: 'Promotores de adherencia para garantizar la unión entre capas de hormigón.',
    pills: `<button class="pill active" data-filter="all">Puentes de adherencia</button>`
  },
  // ── EQUIPOS SUBCATEGORIES (../../../) ───────────────────────────────
  {
    file: 'construccion/equipos/allanadoras/index.html',
    root: '../../../', seccion: 'construccion', categoria: 'equipos', subcategoria: 'allanadoras',
    title: 'Allanadoras — Equipos — NewConcret',
    metaDesc: 'Allanadoras de hormigón con motor Honda para compactar y alisar superficies industriales.',
    hero: '../../../assets/img/hero/equipos-construccion.jpg',
    eyebrow: 'Equipos · Construcción',
    breadcrumb: `<a href="../../../">Inicio</a><span>›</span><a href="../../../construccion/">Construcción</a><span>›</span><a href="../../../construccion/equipos/">Equipos</a><span>›</span><em>Allanadoras</em>`,
    h1: 'Allanadoras<br>de hormigón',
    desc: 'Allanadoras con motor Honda para compactar y alisar superficies de hormigón industrial.',
    pills: `<button class="pill active" data-filter="all">Allanadoras</button>`
  },

  // ══════════════════════════════════════════════════════════════════
  //  REPARACIÓN — CATEGORY LEVEL (../../)
  // ══════════════════════════════════════════════════════════════════
  {
    file: 'reparacion/materiales/index.html',
    root: '../../', seccion: 'reparacion', categoria: 'materiales', subcategoria: null,
    title: 'Materiales — Reparación — NewConcret',
    metaDesc: 'Morteros cementicios, grouting, endurecedores y fibras para la reparación de pisos de hormigón industrial.',
    hero: '../../assets/img/hero/reparacion-materiales.jpg',
    eyebrow: 'Subcategoría de Reparación',
    breadcrumb: `<a href="../../">Inicio</a><span>›</span><a href="../../reparacion/">Reparación</a><span>›</span><em>Materiales</em>`,
    h1: 'Materiales<br>de reparación',
    desc: 'Morteros cementicios, grouting, endurecedores y fibras para la reparación de pisos de hormigón industrial.',
    pills: `<button class="pill active" data-filter="all">Todos</button><button class="pill" data-filter="grouting">Grouting</button><button class="pill" data-filter="mortero-cementicio">Mortero cementicio</button><button class="pill" data-filter="endurecedor-superficial">Endurecedor</button><button class="pill" data-filter="nylon">Nylon</button>`
  },
  {
    file: 'reparacion/productos-quimicos/index.html',
    root: '../../', seccion: 'reparacion', categoria: 'productos-quimicos', subcategoria: null,
    title: 'Productos Químicos — Reparación — NewConcret',
    metaDesc: 'Aglutinantes y puentes de adherencia para la reparación de pisos de hormigón. NewConcret.',
    hero: '../../assets/img/hero/reparacion-quimicos.jpg',
    eyebrow: 'Subcategoría de Reparación',
    breadcrumb: `<a href="../../">Inicio</a><span>›</span><a href="../../reparacion/">Reparación</a><span>›</span><em>Productos químicos</em>`,
    h1: 'Productos<br>químicos',
    desc: 'Aglutinantes y puentes de adherencia formulados para la reparación de superficies de hormigón.',
    pills: `<button class="pill active" data-filter="all">Todos</button><button class="pill" data-filter="aglutinantes">Aglutinantes</button><button class="pill" data-filter="puentes-de-adherencia">Puentes adherencia</button>`
  },
  {
    file: 'reparacion/equipos/index.html',
    root: '../../', seccion: 'reparacion', categoria: 'equipos', subcategoria: null,
    title: 'Equipos — Reparación — NewConcret',
    metaDesc: 'Escarificadoras Jackson para preparación y reparación de superficies de hormigón industrial.',
    hero: '../../assets/img/hero/reparacion-equipos.jpg',
    eyebrow: 'Subcategoría de Reparación',
    breadcrumb: `<a href="../../">Inicio</a><span>›</span><a href="../../reparacion/">Reparación</a><span>›</span><em>Equipos</em>`,
    h1: 'Equipos<br>de reparación',
    desc: 'Escarificadoras industriales para preparación y reparación agresiva de superficies de hormigón.',
    pills: `<button class="pill active" data-filter="all">Todos</button><button class="pill" data-filter="escarificadoras">Escarificadoras</button>`
  },
  {
    file: 'reparacion/insumos/index.html',
    root: '../../', seccion: 'reparacion', categoria: 'insumos', subcategoria: null,
    title: 'Insumos — Reparación — NewConcret',
    metaDesc: 'Accesorios diamantados, ruedas de bujardado y puntas para martillo para reparación de hormigón.',
    hero: '../../assets/img/hero/reparacion-insumos.jpg',
    eyebrow: 'Subcategoría de Reparación',
    breadcrumb: `<a href="../../">Inicio</a><span>›</span><a href="../../reparacion/">Reparación</a><span>›</span><em>Insumos</em>`,
    h1: 'Insumos<br>diamantados',
    desc: 'Accesorios para amoladora, ruedas de bujardado y puntas para martillo en trabajos de reparación.',
    pills: `<button class="pill active" data-filter="all">Todos</button><button class="pill" data-filter="accesorios-amoladora">Accesorios amoladora</button><button class="pill" data-filter="bujardado">Bujardado</button><button class="pill" data-filter="puntas-martillo">Puntas martillo</button>`
  },

  // ══════════════════════════════════════════════════════════════════
  //  REPARACIÓN — SUBCATEGORY LEVEL (../../../)
  // ══════════════════════════════════════════════════════════════════
  {
    file: 'reparacion/materiales/grouting/index.html',
    root: '../../../', seccion: 'reparacion', categoria: 'materiales', subcategoria: 'grouting',
    title: 'Grouting — Materiales Reparación — NewConcret',
    metaDesc: 'Grouting cementicio de fraguado rápido para reparación estructural de pisos de hormigón.',
    hero: '../../../assets/img/hero/grouting.jpg',
    eyebrow: 'Materiales · Reparación',
    breadcrumb: `<a href="../../../">Inicio</a><span>›</span><a href="../../../reparacion/">Reparación</a><span>›</span><a href="../../../reparacion/materiales/">Materiales</a><span>›</span><em>Grouting</em>`,
    h1: 'Grouting<br>cementicio',
    desc: 'Grouting de fraguado rápido para reparación estructural y relleno de vacíos en hormigón.',
    pills: `<button class="pill active" data-filter="all">Grouting</button>`
  },
  {
    file: 'reparacion/materiales/mortero-cementicio/index.html',
    root: '../../../', seccion: 'reparacion', categoria: 'materiales', subcategoria: 'mortero-cementicio',
    title: 'Mortero Cementicio — Materiales Reparación — NewConcret',
    metaDesc: 'Mortero cementicio fino y grueso para reparación, nivelación y terminación de superficies de hormigón.',
    hero: '../../../assets/img/hero/mortero-cementicio.jpg',
    eyebrow: 'Materiales · Reparación',
    breadcrumb: `<a href="../../../">Inicio</a><span>›</span><a href="../../../reparacion/">Reparación</a><span>›</span><a href="../../../reparacion/materiales/">Materiales</a><span>›</span><em>Mortero cementicio</em>`,
    h1: 'Mortero<br>cementicio',
    desc: 'Mortero cementicio fino y grueso para reparación, nivelación y terminación de superficies de hormigón.',
    pills: `<button class="pill active" data-filter="all">Mortero cementicio</button>`
  },
  {
    file: 'reparacion/materiales/endurecedor-superficial/index.html',
    root: '../../../', seccion: 'reparacion', categoria: 'materiales', subcategoria: 'endurecedor-superficial',
    title: 'Endurecedor Superficial — Materiales Reparación — NewConcret',
    metaDesc: 'Endurecedor superficial no metálico para refuerzo de pisos de hormigón en reparación.',
    hero: '../../../assets/img/hero/endurecedor.jpg',
    eyebrow: 'Materiales · Reparación',
    breadcrumb: `<a href="../../../">Inicio</a><span>›</span><a href="../../../reparacion/">Reparación</a><span>›</span><a href="../../../reparacion/materiales/">Materiales</a><span>›</span><em>Endurecedor superficial</em>`,
    h1: 'Endurecedor<br>superficial',
    desc: 'Endurecedor superficial no metálico para refuerzo de resistencia al desgaste en reparación.',
    pills: `<button class="pill active" data-filter="all">Endurecedor superficial</button>`
  },
  {
    file: 'reparacion/materiales/nylon/index.html',
    root: '../../../', seccion: 'reparacion', categoria: 'materiales', subcategoria: 'nylon',
    title: 'Nylon — Materiales Reparación — NewConcret',
    metaDesc: 'Nylon negro de 200 micrones para barrera hidrófuga en reparación de pisos de hormigón.',
    hero: '../../../assets/img/hero/nylon.jpg',
    eyebrow: 'Materiales · Reparación',
    breadcrumb: `<a href="../../../">Inicio</a><span>›</span><a href="../../../reparacion/">Reparación</a><span>›</span><a href="../../../reparacion/materiales/">Materiales</a><span>›</span><em>Nylon</em>`,
    h1: 'Nylon<br>barrera hidrófuga',
    desc: 'Nylon negro de 200 micrones para barrera hidrófuga en trabajos de reparación de pisos.',
    pills: `<button class="pill active" data-filter="all">Nylon</button>`
  },
  {
    file: 'reparacion/productos-quimicos/aglutinantes/index.html',
    root: '../../../', seccion: 'reparacion', categoria: 'productos-quimicos', subcategoria: 'aglutinantes',
    title: 'Aglutinantes — Químicos Reparación — NewConcret',
    metaDesc: 'Aglutinantes líquidos para densificación y preparación de superficies en reparación de hormigón.',
    hero: '../../../assets/img/hero/aglutinantes.jpg',
    eyebrow: 'Productos Químicos · Reparación',
    breadcrumb: `<a href="../../../">Inicio</a><span>›</span><a href="../../../reparacion/">Reparación</a><span>›</span><a href="../../../reparacion/productos-quimicos/">Químicos</a><span>›</span><em>Aglutinantes</em>`,
    h1: 'Aglutinantes<br>para reparación',
    desc: 'Aglutinantes líquidos para densificación y relleno de microporos en superficies de hormigón.',
    pills: `<button class="pill active" data-filter="all">Aglutinantes</button>`
  },
  {
    file: 'reparacion/productos-quimicos/puentes-de-adherencia/index.html',
    root: '../../../', seccion: 'reparacion', categoria: 'productos-quimicos', subcategoria: 'puentes-de-adherencia',
    title: 'Puentes de Adherencia — Químicos Reparación — NewConcret',
    metaDesc: 'Puentes de adherencia y promotores de unión para reparación de capas de hormigón.',
    hero: '../../../assets/img/hero/reparacion-quimicos.jpg',
    eyebrow: 'Productos Químicos · Reparación',
    breadcrumb: `<a href="../../../">Inicio</a><span>›</span><a href="../../../reparacion/">Reparación</a><span>›</span><a href="../../../reparacion/productos-quimicos/">Químicos</a><span>›</span><em>Puentes de adherencia</em>`,
    h1: 'Puentes de<br>adherencia',
    desc: 'Promotores de adherencia para garantizar la unión entre capas de hormigón nuevo y existente.',
    pills: `<button class="pill active" data-filter="all">Puentes de adherencia</button>`
  },
  {
    file: 'reparacion/equipos/escarificadoras/index.html',
    root: '../../../', seccion: 'reparacion', categoria: 'equipos', subcategoria: 'escarificadoras',
    title: 'Escarificadoras — Equipos Reparación — NewConcret',
    metaDesc: 'Escarificadoras Jackson 10 y 15 HP para preparación agresiva de superficies de hormigón.',
    hero: '../../../assets/img/hero/escarificadora.jpg',
    eyebrow: 'Equipos · Reparación',
    breadcrumb: `<a href="../../../">Inicio</a><span>›</span><a href="../../../reparacion/">Reparación</a><span>›</span><a href="../../../reparacion/equipos/">Equipos</a><span>›</span><em>Escarificadoras</em>`,
    h1: 'Escarificadoras<br>industriales',
    desc: 'Escarificadoras Jackson de 10 y 15 HP para preparación agresiva y remoción de capas de hormigón.',
    pills: `<button class="pill active" data-filter="all">Escarificadoras</button>`
  },
  {
    file: 'reparacion/insumos/accesorios-amoladora/index.html',
    root: '../../../', seccion: 'reparacion', categoria: 'insumos', subcategoria: 'accesorios-amoladora',
    title: 'Accesorios Amoladora — Insumos Reparación — NewConcret',
    metaDesc: 'Discos diamantados, discos epoxi, mechas copa y carcasas para amoladora en trabajos de reparación.',
    hero: '../../../assets/img/hero/reparacion-accesorios-amoladora.jpg',
    eyebrow: 'Insumos · Reparación',
    breadcrumb: `<a href="../../../">Inicio</a><span>›</span><a href="../../../reparacion/">Reparación</a><span>›</span><a href="../../../reparacion/insumos/">Insumos</a><span>›</span><em>Accesorios amoladora</em>`,
    h1: 'Accesorios<br>para amoladora',
    desc: 'Discos diamantados, mechas copa y carcasas para trabajos de desbaste y reparación con amoladora.',
    pills: `<button class="pill active" data-filter="all">Accesorios amoladora</button>`
  },
  {
    file: 'reparacion/insumos/bujardado/index.html',
    root: '../../../', seccion: 'reparacion', categoria: 'insumos', subcategoria: 'bujardado',
    title: 'Bujardado — Insumos Reparación — NewConcret',
    metaDesc: 'Ruedas de bujardado y platos porta-ruedas para texturizado y preparación de hormigón.',
    hero: '../../../assets/img/hero/bujardado.jpg',
    eyebrow: 'Insumos · Reparación',
    breadcrumb: `<a href="../../../">Inicio</a><span>›</span><a href="../../../reparacion/">Reparación</a><span>›</span><a href="../../../reparacion/insumos/">Insumos</a><span>›</span><em>Bujardado</em>`,
    h1: 'Ruedas de<br>bujardado',
    desc: 'Ruedas de bujardado y platos porta-ruedas para texturizado y preparación de superficies de hormigón.',
    pills: `<button class="pill active" data-filter="all">Bujardado</button>`
  },
  {
    file: 'reparacion/insumos/puntas-martillo/index.html',
    root: '../../../', seccion: 'reparacion', categoria: 'insumos', subcategoria: 'puntas-martillo',
    title: 'Puntas Martillo — Insumos Reparación — NewConcret',
    metaDesc: 'Puntas SDS Plus y palas para martillo demoledor en trabajos de reparación de hormigón.',
    hero: '../../../assets/img/hero/reparacion-puntas-martillo.jpg',
    eyebrow: 'Insumos · Reparación',
    breadcrumb: `<a href="../../../">Inicio</a><span>›</span><a href="../../../reparacion/">Reparación</a><span>›</span><a href="../../../reparacion/insumos/">Insumos</a><span>›</span><em>Puntas martillo</em>`,
    h1: 'Puntas<br>para martillo',
    desc: 'Puntas cónicas SDS Plus y palas angosta y ancha para demolición y apertura en reparación de hormigón.',
    pills: `<button class="pill active" data-filter="all">Puntas martillo</button>`
  },

  // ══════════════════════════════════════════════════════════════════
  //  PULIDO — CATEGORY LEVEL (../../)
  // ══════════════════════════════════════════════════════════════════
  {
    file: 'pulido/materiales/index.html',
    root: '../../', seccion: 'pulido', categoria: 'materiales', subcategoria: null,
    title: 'Materiales — Pulido — NewConcret',
    metaDesc: 'Morteros y grouting para la reparación y preparación previa al pulido de pisos de hormigón.',
    hero: '../../assets/img/hero/pulido.jpg',
    eyebrow: 'Subcategoría de Pulido',
    breadcrumb: `<a href="../../">Inicio</a><span>›</span><a href="../../pulido/">Pulido</a><span>›</span><em>Materiales</em>`,
    h1: 'Materiales<br>para pulido',
    desc: 'Morteros cementicios y grouting para la reparación y nivelación previa al pulido.',
    pills: `<button class="pill active" data-filter="all">Todos</button><button class="pill" data-filter="grouting">Grouting</button><button class="pill" data-filter="mortero-cementicio">Mortero cementicio</button>`
  },
  {
    file: 'pulido/productos-quimicos/index.html',
    root: '../../', seccion: 'pulido', categoria: 'productos-quimicos', subcategoria: null,
    title: 'Productos Químicos — Pulido — NewConcret',
    metaDesc: 'Densificadores, selladores, aglutinantes y detergentes para el sistema de pulido de hormigón.',
    hero: '../../assets/img/hero/aglutinantes.jpg',
    eyebrow: 'Subcategoría de Pulido',
    breadcrumb: `<a href="../../">Inicio</a><span>›</span><a href="../../pulido/">Pulido</a><span>›</span><em>Productos químicos</em>`,
    h1: 'Productos<br>químicos',
    desc: 'Tratamientos químicos para endurecer, proteger y mantener pisos de hormigón pulido.',
    pills: `<button class="pill active" data-filter="all">Todos</button><button class="pill" data-filter="aglutinantes">Aglutinantes</button><button class="pill" data-filter="puentes-de-adherencia">Puentes adherencia</button><button class="pill" data-filter="densificadores">Densificadores</button><button class="pill" data-filter="impermeabilizantes">Impermeabilizantes</button><button class="pill" data-filter="selladores">Selladores</button><button class="pill" data-filter="detergentes">Detergentes</button>`
  },
  {
    file: 'pulido/equipos/index.html',
    root: '../../', seccion: 'pulido', categoria: 'equipos', subcategoria: null,
    title: 'Equipos — Pulido — NewConcret',
    metaDesc: 'Pulidoras planetarias, aspiradoras industriales y lustradoras de alta velocidad para hormigón.',
    hero: '../../assets/img/hero/pulido.jpg',
    eyebrow: 'Subcategoría de Pulido',
    breadcrumb: `<a href="../../">Inicio</a><span>›</span><a href="../../pulido/">Pulido</a><span>›</span><em>Equipos</em>`,
    h1: 'Equipos<br>de pulido',
    desc: 'Maquinaria profesional de alto rendimiento para el pulido y desbaste de pisos industriales.',
    pills: `<button class="pill active" data-filter="all">Todos</button><button class="pill" data-filter="pulidoras">Pulidoras</button><button class="pill" data-filter="aspiradoras">Aspiradoras</button><button class="pill" data-filter="lustradoras">Lustradoras</button>`
  },
  {
    file: 'pulido/insumos/index.html',
    root: '../../', seccion: 'pulido', categoria: 'insumos', subcategoria: null,
    title: 'Insumos — Pulido — NewConcret',
    metaDesc: 'Herramientas diamantadas, metales, discos resinoides y paños para pulido de hormigón.',
    hero: '../../assets/img/hero/pulido.jpg',
    eyebrow: 'Subcategoría de Pulido',
    breadcrumb: `<a href="../../">Inicio</a><span>›</span><a href="../../pulido/">Pulido</a><span>›</span><em>Insumos</em>`,
    h1: 'Insumos<br>diamantados',
    desc: 'Consumibles diamantados de alta precisión para cada etapa del sistema de pulido.',
    pills: `<button class="pill active" data-filter="all">Todos</button><button class="pill" data-filter="metales-desbaste">Metales desbaste</button><button class="pill" data-filter="discos-resinoides">Discos resinoides</button><button class="pill" data-filter="panos-diamantados">Paños diamantados</button>`
  },

  // ══════════════════════════════════════════════════════════════════
  //  PULIDO — SUBCATEGORY LEVEL (../../../)
  // ══════════════════════════════════════════════════════════════════
  {
    file: 'pulido/materiales/grouting/index.html',
    root: '../../../', seccion: 'pulido', categoria: 'materiales', subcategoria: 'grouting',
    title: 'Grouting — Materiales Pulido — NewConcret',
    metaDesc: 'Grouting cementicio para nivelación y relleno previo al pulido de pisos.',
    hero: '../../../assets/img/hero/grouting.jpg',
    eyebrow: 'Materiales · Pulido',
    breadcrumb: `<a href="../../../">Inicio</a><span>›</span><a href="../../../pulido/">Pulido</a><span>›</span><a href="../../../pulido/materiales/">Materiales</a><span>›</span><em>Grouting</em>`,
    h1: 'Grouting<br>cementicio',
    desc: 'Grouting de alta resistencia para anclajes y relleno de oquedades previo al sistema de pulido.',
    pills: `<button class="pill active" data-filter="all">Grouting</button>`
  },
  {
    file: 'pulido/materiales/mortero-cementicio/index.html',
    root: '../../../', seccion: 'pulido', categoria: 'materiales', subcategoria: 'mortero-cementicio',
    title: 'Mortero Cementicio — Materiales Pulido — NewConcret',
    metaDesc: 'Mortero cementicio para reparación y bacheo en pisos de hormigón antes de pulir.',
    hero: '../../../assets/img/hero/mortero-cementicio.jpg',
    eyebrow: 'Materiales · Pulido',
    breadcrumb: `<a href="../../../">Inicio</a><span>›</span><a href="../../../pulido/">Pulido</a><span>›</span><a href="../../../pulido/materiales/">Materiales</a><span>›</span><em>Mortero cementicio</em>`,
    h1: 'Mortero<br>cementicio',
    desc: 'Mortero cementicio para la reparación superficial y bacheo en pisos antes del proceso de pulido.',
    pills: `<button class="pill active" data-filter="all">Mortero cementicio</button>`
  },

  {
    file: 'pulido/productos-quimicos/aglutinantes/index.html',
    root: '../../../', seccion: 'pulido', categoria: 'productos-quimicos', subcategoria: 'aglutinantes',
    title: 'Aglutinantes — Químicos Pulido — NewConcret',
    metaDesc: 'Aglutinantes para relleno de microporos durante el pulido de pisos de hormigón.',
    hero: '../../../assets/img/hero/aglutinantes.jpg',
    eyebrow: 'Productos Químicos · Pulido',
    breadcrumb: `<a href="../../../">Inicio</a><span>›</span><a href="../../../pulido/">Pulido</a><span>›</span><a href="../../../pulido/productos-quimicos/">Químicos</a><span>›</span><em>Aglutinantes</em>`,
    h1: 'Aglutinantes<br>para pulido',
    desc: 'Aglutinantes líquidos para el relleno eficiente de microporos, generando una superficie lisa y densa.',
    pills: `<button class="pill active" data-filter="all">Aglutinantes</button>`
  },
  {
    file: 'pulido/productos-quimicos/puentes-de-adherencia/index.html',
    root: '../../../', seccion: 'pulido', categoria: 'productos-quimicos', subcategoria: 'puentes-de-adherencia',
    title: 'Puentes de Adherencia — Químicos Pulido — NewConcret',
    metaDesc: 'Puentes de adherencia para asegurar la unión de morteros en reparaciones previas al pulido.',
    hero: '../../../assets/img/hero/reparacion-quimicos.jpg',
    eyebrow: 'Productos Químicos · Pulido',
    breadcrumb: `<a href="../../../">Inicio</a><span>›</span><a href="../../../pulido/">Pulido</a><span>›</span><a href="../../../pulido/productos-quimicos/">Químicos</a><span>›</span><em>Puentes de adherencia</em>`,
    h1: 'Puentes de<br>adherencia',
    desc: 'Promotores de adherencia para garantizar la correcta unión de morteros de reparación.',
    pills: `<button class="pill active" data-filter="all">Puentes de adherencia</button>`
  },
  {
    file: 'pulido/productos-quimicos/densificadores/index.html',
    root: '../../../', seccion: 'pulido', categoria: 'productos-quimicos', subcategoria: 'densificadores',
    title: 'Densificadores — Químicos Pulido — NewConcret',
    metaDesc: 'Densificadores de litio y sodio para endurecer pisos de hormigón pulido.',
    hero: '../../../assets/img/hero/aglutinantes.jpg',
    eyebrow: 'Productos Químicos · Pulido',
    breadcrumb: `<a href="../../../">Inicio</a><span>›</span><a href="../../../pulido/">Pulido</a><span>›</span><a href="../../../pulido/productos-quimicos/">Químicos</a><span>›</span><em>Densificadores</em>`,
    h1: 'Densificadores<br>de hormigón',
    desc: 'Densificadores a base de silicatos que penetran y endurecen la matriz del hormigón, aumentando la resistencia a la abrasión.',
    pills: `<button class="pill active" data-filter="all">Densificadores</button>`
  },
  {
    file: 'pulido/productos-quimicos/impermeabilizantes/index.html',
    root: '../../../', seccion: 'pulido', categoria: 'productos-quimicos', subcategoria: 'impermeabilizantes',
    title: 'Impermeabilizantes — Químicos Pulido — NewConcret',
    metaDesc: 'Impermeabilizantes protectores para repeler líquidos y manchas en pisos pulidos.',
    hero: '../../../assets/img/hero/curadores.png',
    eyebrow: 'Productos Químicos · Pulido',
    breadcrumb: `<a href="../../../">Inicio</a><span>›</span><a href="../../../pulido/">Pulido</a><span>›</span><a href="../../../pulido/productos-quimicos/">Químicos</a><span>›</span><em>Impermeabilizantes</em>`,
    h1: 'Impermeabilizantes<br>protectores',
    desc: 'Tratamientos protectores para sellar la superficie y repeler agua, aceites y manchas en el hormigón pulido.',
    pills: `<button class="pill active" data-filter="all">Impermeabilizantes</button>`
  },
  {
    file: 'pulido/productos-quimicos/selladores/index.html',
    root: '../../../', seccion: 'pulido', categoria: 'productos-quimicos', subcategoria: 'selladores',
    title: 'Selladores — Químicos Pulido — NewConcret',
    metaDesc: 'Selladores protectores para brindar brillo y protección extra a los pisos de hormigón pulido.',
    hero: '../../../assets/img/hero/aglutinantes.jpg',
    eyebrow: 'Productos Químicos · Pulido',
    breadcrumb: `<a href="../../../">Inicio</a><span>›</span><a href="../../../pulido/">Pulido</a><span>›</span><a href="../../../pulido/productos-quimicos/">Químicos</a><span>›</span><em>Selladores</em>`,
    h1: 'Selladores<br>de protección',
    desc: 'Selladores diseñados para otorgar la máxima protección y resaltar el brillo final de los pisos pulidos.',
    pills: `<button class="pill active" data-filter="all">Selladores</button>`
  },
  {
    file: 'pulido/productos-quimicos/detergentes/index.html',
    root: '../../../', seccion: 'pulido', categoria: 'productos-quimicos', subcategoria: 'detergentes',
    title: 'Detergentes — Químicos Pulido — NewConcret',
    metaDesc: 'Detergentes de mantenimiento para la limpieza diaria de pisos de hormigón pulido.',
    hero: '../../../assets/img/hero/aglutinantes.jpg',
    eyebrow: 'Productos Químicos · Pulido',
    breadcrumb: `<a href="../../../">Inicio</a><span>›</span><a href="../../../pulido/">Pulido</a><span>›</span><a href="../../../pulido/productos-quimicos/">Químicos</a><span>›</span><em>Detergentes</em>`,
    h1: 'Detergentes<br>de mantenimiento',
    desc: 'Detergentes especializados para la limpieza y mantenimiento sin dañar el brillo del hormigón pulido.',
    pills: `<button class="pill active" data-filter="all">Detergentes</button>`
  },

  {
    file: 'pulido/equipos/pulidoras/index.html',
    root: '../../../', seccion: 'pulido', categoria: 'equipos', subcategoria: 'pulidoras',
    title: 'Pulidoras Planetarias — Equipos Pulido — NewConcret',
    metaDesc: 'Pulidoras planetarias profesionales Frida y Chavela para desbaste y pulido de hormigón.',
    hero: '../../../assets/img/hero/pulido.jpg',
    eyebrow: 'Equipos · Pulido',
    breadcrumb: `<a href="../../../">Inicio</a><span>›</span><a href="../../../pulido/">Pulido</a><span>›</span><a href="../../../pulido/equipos/">Equipos</a><span>›</span><em>Pulidoras</em>`,
    h1: 'Pulidoras<br>planetarias',
    desc: 'Equipos planetarios profesionales de alto rendimiento para el desbaste, pulido y preparación de superficies.',
    pills: `<button class="pill active" data-filter="all">Pulidoras</button>`
  },
  {
    file: 'pulido/equipos/aspiradoras/index.html',
    root: '../../../', seccion: 'pulido', categoria: 'equipos', subcategoria: 'aspiradoras',
    title: 'Aspiradoras Industriales — Equipos Pulido — NewConcret',
    metaDesc: 'Aspiradoras industriales de alto vacío para la extracción de polvo durante el pulido.',
    hero: '../../../assets/img/hero/reparacion-equipos.jpg',
    eyebrow: 'Equipos · Pulido',
    breadcrumb: `<a href="../../../">Inicio</a><span>›</span><a href="../../../pulido/">Pulido</a><span>›</span><a href="../../../pulido/equipos/">Equipos</a><span>›</span><em>Aspiradoras</em>`,
    h1: 'Aspiradoras<br>industriales',
    desc: 'Aspiradoras industriales HEPA diseñadas específicamente para el control y extracción eficiente del polvo en obra.',
    pills: `<button class="pill active" data-filter="all">Aspiradoras</button>`
  },
  {
    file: 'pulido/equipos/lustradoras/index.html',
    root: '../../../', seccion: 'pulido', categoria: 'equipos', subcategoria: 'lustradoras',
    title: 'Lustradoras — Equipos Pulido — NewConcret',
    metaDesc: 'Lustradoras de alta velocidad Tarsila para abrillantar y sellar pisos de hormigón pulido.',
    hero: '../../../assets/img/hero/pulido.jpg',
    eyebrow: 'Equipos · Pulido',
    breadcrumb: `<a href="../../../">Inicio</a><span>›</span><a href="../../../pulido/">Pulido</a><span>›</span><a href="../../../pulido/equipos/">Equipos</a><span>›</span><em>Lustradoras</em>`,
    h1: 'Lustradoras<br>high-speed',
    desc: 'Lustradoras de alta velocidad para quemar selladores, realzar el brillo y dar terminación final a los pisos pulidos.',
    pills: `<button class="pill active" data-filter="all">Lustradoras</button>`
  },

  {
    file: 'pulido/insumos/metales-desbaste/index.html',
    root: '../../../', seccion: 'pulido', categoria: 'insumos', subcategoria: 'metales-desbaste',
    title: 'Metales para Desbaste — Insumos Pulido — NewConcret',
    metaDesc: 'Herramientas metálicas diamantadas para el desbaste inicial de pisos de hormigón.',
    hero: '../../../assets/img/hero/pulido.jpg',
    eyebrow: 'Insumos · Pulido',
    breadcrumb: `<a href="../../../">Inicio</a><span>›</span><a href="../../../pulido/">Pulido</a><span>›</span><a href="../../../pulido/insumos/">Insumos</a><span>›</span><em>Metales para desbaste</em>`,
    h1: 'Metales<br>para desbaste',
    desc: 'Zapatas y herramientas metálicas diamantadas para la apertura del poro y desbaste agresivo del hormigón.',
    pills: `<button class="pill active" data-filter="all">Metales desbaste</button>`
  },
  {
    file: 'pulido/insumos/discos-resinoides/index.html',
    root: '../../../', seccion: 'pulido', categoria: 'insumos', subcategoria: 'discos-resinoides',
    title: 'Discos Resinoides — Insumos Pulido — NewConcret',
    metaDesc: 'Discos diamantados con liga resinoide para el pulido fino de superficies de hormigón.',
    hero: '../../../assets/img/hero/pulido.jpg',
    eyebrow: 'Insumos · Pulido',
    breadcrumb: `<a href="../../../">Inicio</a><span>›</span><a href="../../../pulido/">Pulido</a><span>›</span><a href="../../../pulido/insumos/">Insumos</a><span>›</span><em>Discos resinoides</em>`,
    h1: 'Discos<br>resinoides',
    desc: 'Discos diamantados con matriz resinoide diseñados para borrar rayas y pulir progresivamente el piso.',
    pills: `<button class="pill active" data-filter="all">Discos resinoides</button>`
  },
  {
    file: 'pulido/insumos/panos-diamantados/index.html',
    root: '../../../', seccion: 'pulido', categoria: 'insumos', subcategoria: 'panos-diamantados',
    title: 'Paños Diamantados — Insumos Pulido — NewConcret',
    metaDesc: 'Paños diamantados (Pads) para el abrillantado y mantenimiento de pisos de hormigón pulido.',
    hero: '../../../assets/img/hero/pulido.jpg',
    eyebrow: 'Insumos · Pulido',
    breadcrumb: `<a href="../../../">Inicio</a><span>›</span><a href="../../../pulido/">Pulido</a><span>›</span><a href="../../../pulido/insumos/">Insumos</a><span>›</span><em>Paños diamantados</em>`,
    h1: 'Paños<br>diamantados',
    desc: 'Pads diamantados de abrillantado, ideales para lustrar y mantener el máximo nivel de brillo del hormigón.',
    pills: `<button class="pill active" data-filter="all">Paños diamantados</button>`
  },

  // ══════════════════════════════════════════════════════════════════
  //  MANTENIMIENTO — CATEGORY LEVEL (../../)
  // ══════════════════════════════════════════════════════════════════
  {
    file: 'mantenimiento/equipos/index.html',
    root: '../../', seccion: 'mantenimiento', categoria: 'equipos', subcategoria: null,
    title: 'Equipos — Mantenimiento — NewConcret',
    metaDesc: 'Aspiradoras, lustradoras y lavasecapisos para el mantenimiento de pisos de hormigón.',
    hero: '../../assets/img/hero/mantenimiento.png',
    eyebrow: 'Subcategoría de Mantenimiento',
    breadcrumb: `<a href="../../">Inicio</a><span>›</span><a href="../../mantenimiento/">Mantenimiento</a><span>›</span><em>Equipos</em>`,
    h1: 'Equipos de<br>mantenimiento',
    desc: 'Maquinaria diseñada para el lavado, aspirado y lustrado de pisos industriales.',
    pills: `<button class="pill active" data-filter="all">Todos</button><button class="pill" data-filter="aspiradoras">Aspiradoras</button><button class="pill" data-filter="lustradoras">Lustradoras</button><button class="pill" data-filter="lavasecapisos">Lavasecapisos</button>`
  },
  {
    file: 'mantenimiento/productos-quimicos/index.html',
    root: '../../', seccion: 'mantenimiento', categoria: 'productos-quimicos', subcategoria: null,
    title: 'Productos Químicos — Mantenimiento — NewConcret',
    metaDesc: 'Selladores y desengrasantes para proteger y mantener pisos de hormigón.',
    hero: '../../assets/img/hero/mantenimiento.png',
    eyebrow: 'Subcategoría de Mantenimiento',
    breadcrumb: `<a href="../../">Inicio</a><span>›</span><a href="../../mantenimiento/">Mantenimiento</a><span>›</span><em>Productos químicos</em>`,
    h1: 'Productos<br>químicos',
    desc: 'Selladores anti-manchas y desengrasantes para la protección continua de tus pisos.',
    pills: `<button class="pill active" data-filter="all">Todos</button><button class="pill" data-filter="selladores">Selladores</button><button class="pill" data-filter="desengrasantes">Desengrasantes</button>`
  },
  {
    file: 'mantenimiento/accesorios/index.html',
    root: '../../', seccion: 'mantenimiento', categoria: 'accesorios', subcategoria: null,
    title: 'Accesorios — Mantenimiento — NewConcret',
    metaDesc: 'Mopas, pulverizadores y paños de lustre para el cuidado diario de pisos.',
    hero: '../../assets/img/hero/mantenimiento.png',
    eyebrow: 'Subcategoría de Mantenimiento',
    breadcrumb: `<a href="../../">Inicio</a><span>›</span><a href="../../mantenimiento/">Mantenimiento</a><span>›</span><em>Accesorios</em>`,
    h1: 'Accesorios de<br>limpieza',
    desc: 'Implementos para la limpieza diaria y aplicación de químicos de mantenimiento.',
    pills: `<button class="pill active" data-filter="all">Todos</button><button class="pill" data-filter="mopas">Mopas y pulverizadores</button><button class="pill" data-filter="panos">Paños de lustre</button>`
  },

  // ══════════════════════════════════════════════════════════════════
  //  MANTENIMIENTO — SUBCATEGORY LEVEL (../../../)
  // ══════════════════════════════════════════════════════════════════
  {
    file: 'mantenimiento/equipos/aspiradoras/index.html',
    root: '../../../', seccion: 'mantenimiento', categoria: 'equipos', subcategoria: 'aspiradoras',
    title: 'Aspiradoras — Equipos Mantenimiento — NewConcret',
    metaDesc: 'Aspiradoras industriales polvo/líquido para el mantenimiento de pisos.',
    hero: '../../../assets/img/hero/mantenimiento.png',
    eyebrow: 'Equipos · Mantenimiento',
    breadcrumb: `<a href="../../../">Inicio</a><span>›</span><a href="../../../mantenimiento/">Mantenimiento</a><span>›</span><a href="../../../mantenimiento/equipos/">Equipos</a><span>›</span><em>Aspiradoras</em>`,
    h1: 'Aspiradoras<br>industriales',
    desc: 'Aspiradoras de alto rendimiento para recolección de polvo fino y líquidos.',
    pills: `<button class="pill active" data-filter="all">Aspiradoras</button>`
  },
  {
    file: 'mantenimiento/equipos/lustradoras/index.html',
    root: '../../../', seccion: 'mantenimiento', categoria: 'equipos', subcategoria: 'lustradoras',
    title: 'Lustradoras — Equipos Mantenimiento — NewConcret',
    metaDesc: 'Lustradoras de alta velocidad para reactivación de brillo en pisos pulidos.',
    hero: '../../../assets/img/hero/mantenimiento.png',
    eyebrow: 'Equipos · Mantenimiento',
    breadcrumb: `<a href="../../../">Inicio</a><span>›</span><a href="../../../mantenimiento/">Mantenimiento</a><span>›</span><a href="../../../mantenimiento/equipos/">Equipos</a><span>›</span><em>Lustradoras</em>`,
    h1: 'Lustradoras<br>High-Speed',
    desc: 'Equipos de alta revolución para reactivación térmica de selladores y abrillantado.',
    pills: `<button class="pill active" data-filter="all">Lustradoras</button>`
  },
  {
    file: 'mantenimiento/equipos/lavasecapisos/index.html',
    root: '../../../', seccion: 'mantenimiento', categoria: 'equipos', subcategoria: 'lavasecapisos',
    title: 'Lavasecapisos — Equipos Mantenimiento — NewConcret',
    metaDesc: 'Máquinas lavasecapisos para el mantenimiento diario de grandes superficies.',
    hero: '../../../assets/img/hero/mantenimiento.png',
    eyebrow: 'Equipos · Mantenimiento',
    breadcrumb: `<a href="../../../">Inicio</a><span>›</span><a href="../../../mantenimiento/">Mantenimiento</a><span>›</span><a href="../../../mantenimiento/equipos/">Equipos</a><span>›</span><em>Lavasecapisos</em>`,
    h1: 'Máquinas<br>lavasecapisos',
    desc: 'Soluciones eficientes para el lavado y secado simultáneo en grandes extensiones.',
    pills: `<button class="pill active" data-filter="all">Lavasecapisos</button>`
  },
  {
    file: 'mantenimiento/productos-quimicos/selladores/index.html',
    root: '../../../', seccion: 'mantenimiento', categoria: 'productos-quimicos', subcategoria: 'selladores',
    title: 'Selladores — Químicos Mantenimiento — NewConcret',
    metaDesc: 'Selladores anti-manchas y protectores para pisos de hormigón.',
    hero: '../../../assets/img/hero/mantenimiento.png',
    eyebrow: 'Productos Químicos · Mantenimiento',
    breadcrumb: `<a href="../../../">Inicio</a><span>›</span><a href="../../../mantenimiento/">Mantenimiento</a><span>›</span><a href="../../../mantenimiento/productos-quimicos/">Químicos</a><span>›</span><em>Selladores</em>`,
    h1: 'Selladores<br>protectores',
    desc: 'Tratamientos anti-manchas y protectores para prolongar la vida útil del hormigón.',
    pills: `<button class="pill active" data-filter="all">Selladores</button>`
  },
  {
    file: 'mantenimiento/productos-quimicos/desengrasantes/index.html',
    root: '../../../', seccion: 'mantenimiento', categoria: 'productos-quimicos', subcategoria: 'desengrasantes',
    title: 'Desengrasantes — Químicos Mantenimiento — NewConcret',
    metaDesc: 'Detergentes y desengrasantes industriales para limpieza profunda.',
    hero: '../../../assets/img/hero/mantenimiento.png',
    eyebrow: 'Productos Químicos · Mantenimiento',
    breadcrumb: `<a href="../../../">Inicio</a><span>›</span><a href="../../../mantenimiento/">Mantenimiento</a><span>›</span><a href="../../../mantenimiento/productos-quimicos/">Químicos</a><span>›</span><em>Desengrasantes</em>`,
    h1: 'Detergentes y<br>desengrasantes',
    desc: 'Químicos de limpieza profunda formulados para no atacar el sellador base.',
    pills: `<button class="pill active" data-filter="all">Desengrasantes</button>`
  },
  {
    file: 'mantenimiento/accesorios/mopas/index.html',
    root: '../../../', seccion: 'mantenimiento', categoria: 'accesorios', subcategoria: 'mopas',
    title: 'Mopas y Pulverizadores — Accesorios Mantenimiento — NewConcret',
    metaDesc: 'Mopas de microfibra y pulverizadores para aplicación de productos.',
    hero: '../../../assets/img/hero/mantenimiento.png',
    eyebrow: 'Accesorios · Mantenimiento',
    breadcrumb: `<a href="../../../">Inicio</a><span>›</span><a href="../../../mantenimiento/">Mantenimiento</a><span>›</span><a href="../../../mantenimiento/accesorios/">Accesorios</a><span>›</span><em>Mopas y pulverizadores</em>`,
    h1: 'Mopas y<br>pulverizadores',
    desc: 'Herramientas ergonómicas para la correcta aplicación de selladores y limpiadores.',
    pills: `<button class="pill active" data-filter="all">Mopas y pulverizadores</button>`
  },
  {
    file: 'mantenimiento/accesorios/panos/index.html',
    root: '../../../', seccion: 'mantenimiento', categoria: 'accesorios', subcategoria: 'panos',
    title: 'Paños de Lustre — Accesorios Mantenimiento — NewConcret',
    metaDesc: 'Paños para lustradoras de alta velocidad. NewConcret.',
    hero: '../../../assets/img/hero/mantenimiento.png',
    eyebrow: 'Accesorios · Mantenimiento',
    breadcrumb: `<a href="../../../">Inicio</a><span>›</span><a href="../../../mantenimiento/">Mantenimiento</a><span>›</span><a href="../../../mantenimiento/accesorios/">Accesorios</a><span>›</span><em>Paños de lustre</em>`,
    h1: 'Paños de<br>lustre',
    desc: 'Pads termofijados para uso con lustradoras High-Speed en mantenimiento de brillo.',
    pills: `<button class="pill active" data-filter="all">Paños de lustre</button>`
  },
  {
    file: 'reparacion/insumos/mechas-copa/index.html',
    root: '../../../', seccion: 'reparacion', categoria: 'insumos', subcategoria: 'mechas-copa',
    title: 'Mechas Copa — Insumos Reparación — NewConcret',
    metaDesc: 'Mechas copa diamantadas para escarificado y reparación de pisos de hormigón.',
    hero: '../../../assets/img/hero/reparacion.jpg',
    eyebrow: 'Insumos · Reparación',
    breadcrumb: `<a href="../../../">Inicio</a><span>›</span><a href="../../../reparacion/">Reparación</a><span>›</span><a href="../../../reparacion/insumos/">Insumos</a><span>›</span><em>Mechas copa</em>`,
    h1: 'Mechas<br>copa',
    desc: 'Herramientas de corte tipo copa para el escarificado y preparación de superficies de hormigón.',
    pills: `<button class="pill active" data-filter="all">Mechas copa</button>`
  }
];

/* ──────────────────────────────────────
   BUILD FUNCTION
────────────────────────────────────── */
function buildPage(p) {
  const FONT_URL = 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;600;700;900&family=Barlow:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap';
  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="${p.metaDesc}">
<title>${p.title}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="${FONT_URL}" rel="stylesheet">
<link rel="icon" type="image/x-icon" href="${p.root}logos/Favicon.ico">
<link rel="stylesheet" href="${p.root}assets/css/estilo.css?v=40">
<link rel="stylesheet" href="${p.root}assets/css/nav.css?v=1.3">
<style>
${CSS}
.page-header{margin-top:68px!important;background-image:linear-gradient(rgba(10,10,10,0.7),rgba(10,10,10,0.7)),url('${p.hero}');background-size:cover;background-position:center;}
</style>
</head>
<body>
<div id="cur"></div>
<div id="ring"></div>
<div id="nav-placeholder"></div>

<!-- PAGE HEADER -->
<div class="page-header">
  <div class="ph-inner">
    <div>
      <div class="ph-breadcrumb">${p.breadcrumb}</div>
      <div class="ph-eyebrow"><span class="ph-eyebrow-line"></span><span class="ph-eyebrow-tx">${p.eyebrow}</span></div>
      <h1 class="ph-title">${p.h1}</h1>
      <p class="ph-desc">${p.desc}</p>
    </div>
    <div class="ph-count"><b id="total-count">0</b> productos disponibles</div>
  </div>
</div>

<!-- FILTER BAR -->
<div class="filter-bar">
  <span class="filter-label">Filtrar:</span>
  <div class="filter-pills">${p.pills}</div>
  <div class="filter-right">
    <select class="sort-select" id="sortSelect">
      <option value="default">Ordenar: Destacados</option>
      <option value="az">Nombre A–Z</option>
      <option value="za">Nombre Z–A</option>
    </select>
    <div class="view-toggle">
      <button class="view-btn active" id="btnGrid" title="Vista grilla">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="1" width="5" height="5" stroke="currentColor" stroke-width="1.2"/><rect x="8" y="1" width="5" height="5" stroke="currentColor" stroke-width="1.2"/><rect x="1" y="8" width="5" height="5" stroke="currentColor" stroke-width="1.2"/><rect x="8" y="8" width="5" height="5" stroke="currentColor" stroke-width="1.2"/></svg>
      </button>
      <button class="view-btn" id="btnList" title="Vista lista">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 3h12M1 7h12M1 11h12" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>
      </button>
    </div>
  </div>
</div>

<!-- PRODUCTS -->
<section class="products-section">
  <div class="prod-count-bar"><span class="prod-count-tx">Mostrando <b id="showing-count">0</b> productos</span></div>
  <div class="grid-wrap" id="productGrid"></div>
</section>

${MODAL}

<div id="footer-placeholder"></div>
<script src="${p.root}assets/js/layout.js?v=3.0"><\/script>
<script src="${p.root}assets/data/productos.js?v=3.0"><\/script>
<script>
const PAGE_SECCION      = '${p.seccion}';
const PAGE_CATEGORIA    = '${p.categoria}';
const PAGE_SUBCATEGORIA = ${p.subcategoria ? "'" + p.subcategoria + "'" : 'null'};
const ROOT              = '${p.root}';
${JS}
<\/script>
</body>
</html>`;
}

/* ──────────────────────────────────────
   GENERATE ALL PAGES
────────────────────────────────────── */
PAGES.forEach(p => {
  const fullPath = path.join('c:/newconcret-2.0', p.file);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, buildPage(p), 'utf8');
  console.log('✓ Generated:', p.file, '(' + fs.statSync(fullPath).size + ' bytes)');
});
console.log('\nDone! ' + PAGES.length + ' pages generated.');
