/**
 * NEWCONCRET — layout.js
 * Centralized Navigation and Footer System
 */

(function() {
    'use strict';

    // 1. Detect Root Path
    function getRootPath() {
        const script = document.querySelector('script[src*="layout.js"]');
        if (script) {
            const src = script.getAttribute('src');
            // If src is "assets/js/layout.js", we are at root.
            // If src is "../assets/js/layout.js", we are 1 level deep.
            const levels = (src.match(/\.\.\//g) || []).length;
            return '../'.repeat(levels);
        }
        return './';
    }

    const root = getRootPath();

    // 2. Templates
    const navHtml = `
<div class="mega-backdrop hide-mobile" id="backdrop"></div>

<nav class="nav ${root === './' || root === '' ? 'nav-home' : 'on'} hide-mobile" id="nav">
  <a href="${root}" class="nav-logo logo">
    <img src="${root}logos/logonewconcret-blanco.png" alt="NewConcret" class="logo-img">
  </a>
  <div class="nav-main">
    <button class="nav-cat" data-mega="construccion">
      Construcción
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path></svg>
    </button>
    <button class="nav-cat" data-mega="reparacion">
      Reparación
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path></svg>
    </button>
    <button class="nav-cat" data-mega="pulido">
      Pulido
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path></svg>
    </button>
    <button class="nav-cat" data-mega="mantenimiento">
      Mantenimiento
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path></svg>
    </button>
    <a href="${root}capacitacion/" class="nav-simple">Capacitaciones</a>
    <a href="${root}sistema-newconcret/" class="nav-simple">Sistema NC</a>
    <a href="${root}nosotros/" class="nav-simple">Nosotros</a>
  </div>
  <div class="nav-right">
    <button class="nav-search" aria-label="Buscar">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="7.5" cy="7.5" r="5" stroke="currentColor" stroke-width="1.4"></circle><path d="M11.5 11.5l4 4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"></path></svg>
    </button>
    <a href="${root}contacto/" class="nav-cta">
      Consultar
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"></path></svg>
    </a>
  </div>

  <!-- Inline search bar (visible in search-mode) -->
  <div class="nav-search-bar" id="navSearchBar" aria-hidden="true">
    <svg class="nav-sb-icon" width="17" height="17" viewBox="0 0 18 18" fill="none"><circle cx="7.5" cy="7.5" r="5" stroke="currentColor" stroke-width="1.4"/><path d="M11.5 11.5l4 4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>
    <input class="nav-sb-inp" id="ncSearchInput" type="text" placeholder="Buscar productos, categorías, páginas..." autocomplete="off" spellcheck="false">
    <kbd class="nav-sb-kbd">ESC</kbd>
    <button class="nav-sb-x" id="ncSearchX" aria-label="Cerrar búsqueda" tabindex="-1">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    </button>
  </div>
</nav>

<!-- Search results panel (drops below nav) -->
<div class="nc-search-drop hide-mobile" id="ncSearchDrop">
  <div class="nc-search-drop-inner">
    <div id="ncSearchResults"></div>
  </div>
</div>

<nav class="mob-nav-bar hide-desktop" id="mob-nav" style="position:fixed; top:0; left:0; right:0; z-index:1500; height:66px; display:flex; align-items:center; justify-content:space-between; padding:0 0.5rem; background:rgba(10,10,10,0.94); backdrop-filter:blur(20px); -webkit-backdrop-filter:blur(20px); border-bottom:1px solid rgba(255,255,255,0.1); transition: background .3s, border-color .3s;">
  <a href="${root}" class="logo">
    <img src="${root}logos/logonewconcret-blanco.png" alt="NewConcret" style="height:24px; width:auto; display:block;">
  </a>
  <div style="display:flex; align-items:center; gap:.5rem;">
    <a href="https://wa.link/ayeajp" class="nav-wa-mini hide-desktop" style="display:flex; align-items:center; justify-content:center; width:38px; height:38px; background:var(--nc-red); color:#fff; text-decoration:none; clip-path:polygon(0 0,100% 0,100% 70%,85% 100%,0 100%);">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 1.5C4.86 1.5 1.5 4.86 1.5 9c0 1.32.36 2.56.98 3.63L1.5 16.5l3.97-.97A7.47 7.47 0 009 16.5c4.14 0 7.5-3.36 7.5-7.5S13.14 1.5 9 1.5zm0 13.5c-1.13 0-2.2-.3-3.12-.82l-.22-.13-2.36.58.6-2.3-.14-.23A6 6 0 019 3a6 6 0 010 12z" fill="currentColor"></path></svg>
    </a>
    <button class="hamburger hide-desktop" id="ham" aria-label="Menú" aria-expanded="false" aria-controls="mobDrawer" style="display:flex; flex-direction:column; align-items:center; justify-content:center; gap:5px; width:44px; height:44px; background:none; border:none; cursor:pointer; padding:0; z-index:1010; position:relative;">
      <span style="display:block; width:22px; height:1.5px; background:var(--nc-white); transition:all .4s var(--expo);"></span>
      <span style="display:block; width:22px; height:1.5px; background:var(--nc-white); transition:all .4s var(--expo);"></span>
      <span style="display:block; width:22px; height:1.5px; background:var(--nc-white); transition:all .4s var(--expo);"></span>
    </button>
  </div>
</nav>

<div class="mob-progress hide-desktop" id="mobProgress">
  <div class="mob-progress-bar" id="mobProgressBar"></div>
</div>

<div class="mob-bd hide-desktop" id="mobBd"></div>
<div class="mob-drawer hide-desktop" id="mobDrawer" role="navigation" aria-label="Menú principal">
  <div class="mob-header">
    <div class="mob-header-logo">
      <img src="${root}logos/logonewconcret-blanco.png" alt="NewConcret" style="height:20px; width:auto; display:block;">
    </div>
    <button class="mob-close" id="mobClose" style="background:none; border:none; color:var(--nc-mid); padding:.5rem;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
  </div>

  <div class="mob-body">
    <button class="mob-search-row" id="mobSearchBtn" aria-label="Buscar productos y páginas">
      <svg width="15" height="15" viewBox="0 0 18 18" fill="none"><circle cx="7.5" cy="7.5" r="5" stroke="currentColor" stroke-width="1.4"></circle><path d="M11.5 11.5l4 4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"></path></svg>
      <span class="mob-search-row-txt">Buscar productos y páginas...</span>
      <svg class="mob-search-row-arr" width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2.5 6.5h8M7 3l3.5 3.5L7 10" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"></path></svg>
    </button>
    <div class="mob-sec-label">Productos por categoría</div>

    <!-- Construcción -->
    <div class="mob-cat">
      <button class="mob-cat-btn" data-sub="sub-construccion" aria-expanded="false">
        <div class="mob-cat-left"><span class="mob-cat-n">01</span><span class="mob-cat-name">Construcción</span></div>
        <div class="mob-arrow"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
      </button>
      <div class="mob-sub" id="sub-construccion">
        <div class="mob-sub-inner">
          <div>
            <a href="${root}construccion/materiales/" class="mob-grp-title">Materiales</a>
            <ul class="mob-links">
              <li><a href="${root}construccion/materiales/nylon/">Nylon</a></li>
              <li><a href="${root}construccion/materiales/microfibra/">Microfibra</a></li>
              <li><a href="${root}construccion/materiales/macrofibra/">Macrofibra</a></li>
              <li><a href="${root}construccion/materiales/endurecedor-superficial/">Endurecedor superficial</a></li>
              <li><a href="${root}construccion/materiales/grouting/">Grouting</a></li>
              <li><a href="${root}construccion/materiales/mortero-cementicio/">Mortero cementicio</a></li>
            </ul>
          </div>
          <div>
            <a href="${root}construccion/productos-quimicos/" class="mob-grp-title">Productos químicos</a>
            <ul class="mob-links">
              <li><a href="${root}construccion/productos-quimicos/aglutinantes/">Aglutinantes</a></li><li><a href="${root}construccion/productos-quimicos/puentes-de-adherencia/">Puentes de adherencia</a></li>
              <li><a href="${root}construccion/productos-quimicos/curadores/">Curadores</a></li>
              <li><a href="${root}construccion/productos-quimicos/aditivo-llaneado/">Aditivo para llaneado</a></li>
            </ul>
          </div>
          <div>
            <a href="${root}construccion/equipos/" class="mob-grp-title">Equipos</a>
            <ul class="mob-links">
              <li><a href="${root}construccion/equipos/allanadoras/">Allanadoras <span class="mob-tag">Destacado</span></a></li>
            </ul>
          </div>
          <a href="${root}construccion/" class="mob-sub-cta">Ver construcción completo <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2.5 6.5h8M7 3l3.5 3.5L7 10" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"></path></svg></a>
        </div>
      </div>
    </div>

    <!-- Reparación -->
    <div class="mob-cat">
      <button class="mob-cat-btn" data-sub="sub-reparacion" aria-expanded="false">
        <div class="mob-cat-left"><span class="mob-cat-n">02</span><span class="mob-cat-name">Reparación</span></div>
        <div class="mob-arrow"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
      </button>
      <div class="mob-sub" id="sub-reparacion">
        <div class="mob-sub-inner">
          <div><a href="${root}reparacion/materiales/" class="mob-grp-title">Materiales <span class="mob-tag">Destacado</span></a><ul class="mob-links"><li><a href="${root}reparacion/materiales/grouting/">Grouting</a></li><li><a href="${root}reparacion/materiales/mortero-cementicio/">Mortero cementicio</a></li><li><a href="${root}reparacion/materiales/endurecedor-superficial/">Endurecedor superficial</a></li></ul></div>
          <div><a href="${root}reparacion/productos-quimicos/" class="mob-grp-title">Productos químicos</a><ul class="mob-links"><li><a href="${root}reparacion/productos-quimicos/aglutinantes/">Aglutinantes</a></li><li><a href="${root}reparacion/productos-quimicos/puentes-de-adherencia/">Puentes de adherencia</a></li></ul></div>
          <div><a href="${root}reparacion/equipos/" class="mob-grp-title">Equipos</a><ul class="mob-links"><li><a href="${root}reparacion/equipos/escarificadoras/">Escarificadoras</a></li></ul></div>
          <div><a href="${root}reparacion/insumos/" class="mob-grp-title">Insumos</a><ul class="mob-links"><li><a href="${root}reparacion/insumos/accesorios-amoladora/">Accesorios amoladora</a></li><li><a href="${root}reparacion/insumos/bujardado/">Ruedas de bujardado</a></li><li><a href="${root}reparacion/insumos/puntas-martillo/">Puntas martillo</a></li><li><a href="${root}reparacion/insumos/mechas-copa/">Mechas copa</a></li></ul></div>
          <a href="${root}reparacion/" class="mob-sub-cta">Ver reparación completo <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2.5 6.5h8M7 3l3.5 3.5L7 10" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"></path></svg></a>
        </div>
      </div>
    </div>

    <!-- Pulido -->
    <div class="mob-cat">
      <button class="mob-cat-btn" data-sub="sub-pulido" aria-expanded="false">
        <div class="mob-cat-left"><span class="mob-cat-n">03</span><span class="mob-cat-name">Pulido</span></div>
        <div class="mob-arrow"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
      </button>
      <div class="mob-sub" id="sub-pulido">
        <div class="mob-sub-inner">
          <div><a href="${root}pulido/materiales/" class="mob-grp-title">Materiales</a><ul class="mob-links"><li><a href="${root}pulido/materiales/grouting/">Grouting</a></li><li><a href="${root}pulido/materiales/mortero-cementicio/">Mortero cementicio</a></li></ul></div>
          <div><a href="${root}pulido/productos-quimicos/" class="mob-grp-title">Productos químicos <span class="mob-tag">Destacado</span></a><ul class="mob-links"><li><a href="${root}pulido/productos-quimicos/aglutinantes/">Aglutinantes</a></li><li><a href="${root}pulido/productos-quimicos/puentes-de-adherencia/">Puentes de adherencia</a></li><li><a href="${root}pulido/productos-quimicos/densificadores/">Densificadores</a></li><li><a href="${root}pulido/productos-quimicos/impermeabilizantes/">Impermeabilizantes</a></li><li><a href="${root}pulido/productos-quimicos/selladores/">Selladores</a></li><li><a href="${root}pulido/productos-quimicos/detergentes/">Detergentes</a></li></ul></div>
          <div><a href="${root}pulido/equipos/" class="mob-grp-title">Equipos</a><ul class="mob-links"><li><a href="${root}pulido/equipos/pulidoras/">Pulidoras <span class="mob-tag">Destacado</span></a></li><li><a href="${root}pulido/equipos/accesorios-pulidoras/">Accesorios pulidoras</a></li><li><a href="${root}pulido/equipos/aspiradoras/">Aspiradoras</a></li><li><a href="${root}pulido/equipos/accesorios-aspiradoras/">Accesorios aspiradoras</a></li><li><a href="${root}pulido/equipos/lustradoras/">Lustradoras</a></li><li><a href="${root}pulido/equipos/lavasecapisos/">Lavasecapisos</a></li></ul></div>
          <div><a href="${root}pulido/insumos/" class="mob-grp-title">Insumos</a><ul class="mob-links"><li><a href="${root}pulido/insumos/metales-desbaste/">Metales para desbaste</a></li><li><a href="${root}pulido/insumos/discos-resinoides/">Discos resinoides</a></li><li><a href="${root}pulido/insumos/panos-diamantados/">Paños diamantados</a></li></ul></div>
          <a href="${root}pulido/" class="mob-sub-cta">Ver pulido completo <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2.5 6.5h8M7 3l3.5 3.5L7 10" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"></path></svg></a>
        </div>
      </div>
    </div>

    <!-- Mantenimiento -->
    <div class="mob-cat">
      <button class="mob-cat-btn" data-sub="sub-mantenimiento" aria-expanded="false">
        <div class="mob-cat-left"><span class="mob-cat-n">04</span><span class="mob-cat-name">Mantenimiento</span></div>
        <div class="mob-arrow"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
      </button>
      <div class="mob-sub" id="sub-mantenimiento">
        <div class="mob-sub-inner">
          <div><a href="${root}mantenimiento/equipos/" class="mob-grp-title">Equipos</a><ul class="mob-links"><li><a href="${root}mantenimiento/equipos/aspiradoras/">Aspiradoras</a></li><li><a href="${root}mantenimiento/equipos/lustradoras/">Lustradoras <span class="mob-tag">Destacado</span></a></li><li><a href="${root}mantenimiento/equipos/lavasecapisos/">Lavasecapisos</a></li></ul></div>
          <div><a href="${root}mantenimiento/productos-quimicos/" class="mob-grp-title">Productos químicos</a><ul class="mob-links"><li><a href="${root}mantenimiento/productos-quimicos/selladores/">Selladores</a></li><li><a href="${root}mantenimiento/productos-quimicos/desengrasantes/">Desengrasantes</a></li></ul></div>
          <div><a href="${root}mantenimiento/accesorios/" class="mob-grp-title">Accesorios</a><ul class="mob-links"><li><a href="${root}mantenimiento/accesorios/mopas/">Mopas y pulverizadores</a></li><li><a href="${root}mantenimiento/accesorios/panos/">Paños de lustre</a></li></ul></div>
          <a href="${root}mantenimiento/" class="mob-sub-cta">Ver mantenimiento completo <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2.5 6.5h8M7 3l3.5 3.5L7 10" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"></path></svg></a>
        </div>
      </div>
    </div>

    <div class="mob-sec-label" style="margin-top:.5rem;">Empresa</div>
    <div class="mob-simple"><a href="${root}capacitacion/">Capacitaciones</a></div>
    <div class="mob-simple"><a href="${root}sistema-newconcret/">Sistema NC</a></div>
    <div class="mob-simple"><a href="${root}nosotros/">Nosotros</a></div>
    <div class="mob-simple"><a href="${root}contacto/">Contacto</a></div>
  </div>

  <div class="mob-footer">
    <a href="${root}contacto/" class="mob-cta-red">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
      Contacto directo
    </a>
    <div class="mob-footer-info" style="display:flex; justify-content:space-between; margin-top:.5rem;">
      <span class="mob-footer-copy" style="font-family:var(--font-m); font-size:.55rem; color:var(--nc-steel); text-transform:uppercase; letter-spacing:.1em;">© 2025 NewConcret</span>
      <span class="mob-footer-copy" style="font-family:var(--font-m); font-size:.55rem; color:var(--nc-steel); text-transform:uppercase; letter-spacing:.1em;">Bragado, Bs. As.</span>
    </div>
  </div>
</div>

<div class="mega" id="mega-construccion">
  <div class="mega-inner">
    <div class="mega-category-ident">
      <div>
        <div class="mega-cat-label">Categoría 01</div>
        <div class="mega-cat-title">Cons&shy;truc&shy;ción</div>
        <div class="mega-cat-desc">Materiales, químicos y equipos para la construcción de nuevos pisos de hormigón.</div>
      </div>
      <img src="${root}assets/img/hero/construccion.jpg" alt="" class="mega-cat-img">
    </div>
    <div class="mega-cols">
      <div class="mega-col">
        <a href="${root}construccion/materiales/" class="mega-col-title" style="text-decoration:none;"><span class="mega-col-title-dot"></span>Materiales</a>
        <ul class="mega-links">
          <li><a href="${root}construccion/materiales/nylon/">Nylon</a></li>
          <li><a href="${root}construccion/materiales/microfibra/">Microfibra</a></li>
          <li><a href="${root}construccion/materiales/macrofibra/">Macrofibra</a></li>
          <li><a href="${root}construccion/materiales/endurecedor-superficial/">Endurecedor superficial</a></li>
          <li><a href="${root}construccion/materiales/grouting/">Grouting</a></li>
          <li><a href="${root}construccion/materiales/mortero-cementicio/">Mortero cementicio</a></li>
        </ul>
      </div>
      <div class="mega-col">
        <a href="${root}construccion/productos-quimicos/" class="mega-col-title" style="text-decoration:none;"><span class="mega-col-title-dot"></span>Productos químicos</a>
        <ul class="mega-links">
          <li><a href="${root}construccion/productos-quimicos/aglutinantes/">Aglutinantes</a></li><li><a href="${root}construccion/productos-quimicos/puentes-de-adherencia/">Puentes de adherencia</a></li>
          <li><a href="${root}construccion/productos-quimicos/curadores/">Curadores</a></li>
          <li><a href="${root}construccion/productos-quimicos/aditivo-llaneado/">Aditivos para llaneado</a></li>
        </ul>
      </div>
      <div class="mega-col">
        <a href="${root}construccion/equipos/" class="mega-col-title" style="text-decoration:none;"><span class="mega-col-title-dot"></span>Equipos</a>
        <ul class="mega-links">
          <li><a href="${root}construccion/equipos/allanadoras/">Allanadoras <span class="tag-new">Destacado</span></a></li>
        </ul>
      </div>
      <div class="mega-col">
        <a href="${root}construccion/" class="mega-ver-todos" style="margin-top: 0;">
          Ver todos los productos
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"></path></svg>
        </a>
      </div>
    </div>
  </div>
</div>

<div class="mega" id="mega-reparacion">
  <div class="mega-inner">
    <div class="mega-category-ident">
      <div>
        <div class="mega-cat-label">Categoría 02</div>
        <div class="mega-cat-title">Reparación</div>
        <div class="mega-cat-desc">Productos y equipos para recuperar pisos de hormigón con daños estructurales o superficiales.</div>
      </div>
      <img src="${root}assets/img/hero/reparacion.jpg" alt="" class="mega-cat-img">
    </div>
    <div class="mega-cols">
      <div class="mega-col">
        <a href="${root}reparacion/materiales/" class="mega-col-title" style="text-decoration:none;"><span class="mega-col-title-dot"></span>Materiales <span class="tag-new">Destacado</span></a>
        <ul class="mega-links">
          <li><a href="${root}reparacion/materiales/grouting/">Grouting</a></li>
          <li><a href="${root}reparacion/materiales/mortero-cementicio/">Mortero cementicio</a></li>
          <li><a href="${root}reparacion/materiales/endurecedor-superficial/">Endurecedor superficial</a></li>
        </ul>
      </div>
      <div class="mega-col">
        <a href="${root}reparacion/productos-quimicos/" class="mega-col-title" style="text-decoration:none;"><span class="mega-col-title-dot"></span>Productos químicos</a>
        <ul class="mega-links">
          <li><a href="${root}reparacion/productos-quimicos/aglutinantes/">Aglutinantes</a></li>
          <li><a href="${root}reparacion/productos-quimicos/puentes-de-adherencia/">Puentes de adherencia</a></li>
        </ul>
      </div>
      <div class="mega-col">
        <a href="${root}reparacion/equipos/" class="mega-col-title" style="text-decoration:none;"><span class="mega-col-title-dot"></span>Equipos</a>
        <ul class="mega-links">
          <li><a href="${root}reparacion/equipos/escarificadoras/">Escarificadoras</a></li>
        </ul>
      </div>
      <div class="mega-col">
        <a href="${root}reparacion/insumos/" class="mega-col-title" style="text-decoration:none;"><span class="mega-col-title-dot"></span>Insumos</a>
        <ul class="mega-links">
          <li><a href="${root}reparacion/insumos/accesorios-amoladora/">Accesorios amoladora</a></li>
          <li><a href="${root}reparacion/insumos/bujardado/">Ruedas de bujardado</a></li>
          <li><a href="${root}reparacion/insumos/puntas-martillo/">Puntas martillo</a></li>
          <li><a href="${root}reparacion/insumos/mechas-copa/">Mechas copa</a></li>
        </ul>
        <a href="${root}reparacion/" class="mega-ver-todos">Ver reparación completo <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"></path></svg></a>
      </div>
    </div>
  </div>
</div>

<div class="mega" id="mega-pulido">
  <div class="mega-inner">
    <div class="mega-category-ident">
      <div>
        <div class="mega-cat-label">Categoría 03</div>
        <div class="mega-cat-title">Pulido</div>
        <div class="mega-cat-desc">Discos, abrasivos, densificadores y máquinas pulidoras para acabados industriales y decorativos.</div>
      </div>
      <img src="${root}assets/img/hero/pulido.jpg" alt="" class="mega-cat-img">
    </div>
    <div class="mega-cols">
      <div class="mega-col">
        <a href="${root}pulido/materiales/" class="mega-col-title" style="text-decoration:none;"><span class="mega-col-title-dot"></span>Materiales</a>
        <ul class="mega-links">
          <li><a href="${root}pulido/materiales/grouting/">Grouting</a></li>
          <li><a href="${root}pulido/materiales/mortero-cementicio/">Mortero cementicio</a></li>
        </ul>
      </div>
      <div class="mega-col">
        <a href="${root}pulido/productos-quimicos/" class="mega-col-title" style="text-decoration:none;"><span class="mega-col-title-dot"></span>Productos químicos <span class="tag-new">Destacado</span></a>
        <ul class="mega-links">
          <li><a href="${root}pulido/productos-quimicos/aglutinantes/">Aglutinantes</a></li>
          <li><a href="${root}pulido/productos-quimicos/puentes-de-adherencia/">Puentes de adherencia</a></li>
          <li><a href="${root}pulido/productos-quimicos/densificadores/">Densificadores</a></li>
          <li><a href="${root}pulido/productos-quimicos/impermeabilizantes/">Impermeabilizantes</a></li>
          <li><a href="${root}pulido/productos-quimicos/selladores/">Selladores</a></li>
          <li><a href="${root}pulido/productos-quimicos/detergentes/">Detergentes</a></li>
        </ul>
      </div>
      <div class="mega-col">
        <a href="${root}pulido/equipos/" class="mega-col-title" style="text-decoration:none;"><span class="mega-col-title-dot"></span>Equipos</a>
        <ul class="mega-links">
          <li><a href="${root}pulido/equipos/pulidoras/">Pulidoras <span class="tag-new">Destacado</span></a></li>
          <li><a href="${root}pulido/equipos/accesorios-pulidoras/">Accesorios Pulidoras</a></li>
          <li><a href="${root}pulido/equipos/aspiradoras/">Aspiradoras</a></li>
          <li><a href="${root}pulido/equipos/accesorios-aspiradoras/">Accesorios Aspiradoras</a></li>
          <li><a href="${root}pulido/equipos/lustradoras/">Lustradoras</a></li>
          <li><a href="${root}pulido/equipos/lavasecapisos/">Lavasecapisos</a></li>
        </ul>
      </div>
      <div class="mega-col">
        <a href="${root}pulido/insumos/" class="mega-col-title" style="text-decoration:none;"><span class="mega-col-title-dot"></span>Insumos</a>
        <ul class="mega-links">
          <li><a href="${root}pulido/insumos/metales-desbaste/">Metales para desbaste</a></li>
          <li><a href="${root}pulido/insumos/discos-resinoides/">Discos resinoides</a></li>
          <li><a href="${root}pulido/insumos/panos-diamantados/">Paños diamantados</a></li>
        </ul>
        <a href="${root}pulido/" class="mega-ver-todos">
          Ver pulido completo
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"></path></svg>
        </a>
      </div>
    </div>
  </div>
</div>

<div class="mega" id="mega-mantenimiento">
  <div class="mega-inner">
    <div class="mega-category-ident">
      <div>
        <div class="mega-cat-label">Categoría 04</div>
        <div class="mega-cat-title">Mante&shy;ni&shy;mien&shy;to</div>
        <div class="mega-cat-desc">Equipos, químicos y accesorios para mantener pisos pulidos en óptimas condiciones.</div>
      </div>
      <img src="${root}assets/img/hero/mantenimiento.png" alt="" class="mega-cat-img">
    </div>
    <div class="mega-cols">
      <div class="mega-col">
        <a href="${root}mantenimiento/equipos/" class="mega-col-title" style="text-decoration:none;"><span class="mega-col-title-dot"></span>Equipos</a>
        <ul class="mega-links">
          <li><a href="${root}mantenimiento/equipos/aspiradoras/">Aspiradoras</a></li>
          <li><a href="${root}mantenimiento/equipos/lustradoras/">Lustradoras <span class="tag-new">Destacado</span></a></li>
          <li><a href="${root}mantenimiento/equipos/lavasecapisos/">Lavasecapisos</a></li>
        </ul>
      </div>
      <div class="mega-col">
        <a href="${root}mantenimiento/productos-quimicos/" class="mega-col-title" style="text-decoration:none;"><span class="mega-col-title-dot"></span>Productos químicos</a>
        <ul class="mega-links">
          <li><a href="${root}mantenimiento/productos-quimicos/selladores/">Selladores</a></li>
          <li><a href="${root}mantenimiento/productos-quimicos/desengrasantes/">Desengrasantes</a></li>
        </ul>
      </div>
      <div class="mega-col">
        <a href="${root}mantenimiento/accesorios/" class="mega-col-title" style="text-decoration:none;"><span class="mega-col-title-dot"></span>Accesorios</a>
        <ul class="mega-links">
          <li><a href="${root}mantenimiento/accesorios/mopas/">Mopas y pulverizadores</a></li>
          <li><a href="${root}mantenimiento/accesorios/panos/">Paños de lustre</a></li>
        </ul>
      </div>
      <div class="mega-col">
        <a href="${root}mantenimiento/" class="mega-ver-todos">
          Ver mantenimiento completo
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"></path></svg>
        </a>
      </div>
    </div>
  </div>
</div>

`;

    const footerHtml = `
<footer class="footer">
  <div class="footer-grid">
    <div class="footer-brand">
      <img src="${root}logos/logonewconcret-blanco.png" alt="NewConcret" class="logo-img">
      <p>Soluciones, máquinas e insumos para pulido de hormigón. Bragado, Buenos Aires, Argentina.</p>
      <div class="f-socials">
        <a href="https://www.instagram.com/newconcret/" class="f-social-btn" aria-label="Instagram" target="_blank" rel="noopener">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        </a>
        <a href="https://www.youtube.com/@newconcretArgentina" class="f-social-btn" aria-label="YouTube" target="_blank" rel="noopener">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2C5.12 19.5 12 19.5 12 19.5s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 2.78 2.78 0 0 0-0.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
        </a>
        <a href="https://api.whatsapp.com/send?phone=5492342464082" class="f-social-btn" aria-label="WhatsApp" target="_blank" rel="noopener">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3z"></path></svg>
        </a>
      </div>
    </div>

    <div class="footer-col">
      <div class="f-col-title">Productos</div>
      <ul class="f-links">
        <li><a href="${root}construccion/" class="f-link">Construcción</a></li>
        <li><a href="${root}reparacion/" class="f-link">Reparación</a></li>
        <li><a href="${root}pulido/" class="f-link">Pulido</a></li>
        <li><a href="${root}mantenimiento/" class="f-link">Mantenimiento</a></li>
        <li><a href="https://tiendalonati.com.ar" class="f-link" target="_blank" rel="noopener">Tienda Lonati</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <div class="f-col-title">Empresa</div>
      <ul class="f-links">
        <li><a href="${root}" class="f-link">Inicio</a></li>
        <li><a href="${root}sistema-newconcret/" class="f-link">Sistema NC</a></li>
        <li><a href="${root}capacitacion/" class="f-link">Capacitaciones</a></li>
        <li><a href="${root}nosotros/" class="f-link">Nosotros</a></li>
        <li><a href="${root}contacto/" class="f-link">Contacto</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <div class="f-col-title">Contacto</div>
      <div class="f-contact">
        <div class="f-contact-row">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          <span>Las Cigüeñas 217, Bragado,<br>Buenos Aires, Argentina</span>
        </div>
        <a href="https://wa.link/ayeajp" class="f-contact-row">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          <span>+54 9 2342 46-4082</span>
        </a>
        <a href="mailto:info@newconcret.com" class="f-contact-row">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          <span>info@newconcret.com</span>
        </a>
      </div>
    </div>
  </div>

  <div class="footer-bot">
    <span>© <span id="ncYear">2026</span> NewConcret. Todos los derechos reservados.</span>
    <span>Premium Industrial Solutions (V5.2)</span>
  </div>
</footer>
`;

    // 3. Injection Logic
    function injectLayout() {
        const navTarget = document.getElementById('nav-placeholder') || document.body;
        const footerTarget = document.getElementById('footer-placeholder') || document.body;

        if (navTarget === document.body) {
            // If no placeholder, insert at the top of body
            const wrapper = document.createElement('div');
            wrapper.id = 'nav-placeholder';
            wrapper.innerHTML = navHtml;
            document.body.prepend(wrapper);
        } else {
            navTarget.innerHTML = navHtml;
        }

        if (footerTarget === document.body) {
            // If no placeholder, append to end of body
            const wrapper = document.createElement('div');
            wrapper.id = 'footer-placeholder';
            wrapper.innerHTML = footerHtml;
            document.body.appendChild(wrapper);
        } else {
            footerTarget.innerHTML = footerHtml;
        }

        // Interactivity Logic is now handled by nav.js to avoid conflicts
        // This includes: ham toggle, mobDrawer, mobBd, and mob-cat-btn accordions

        // Mega menu logic (Desktop)
        const cats = document.querySelectorAll('.nav-cat');
        const megas = document.querySelectorAll('.mega');
        const backdrop = document.getElementById('backdrop');
        const nav = document.getElementById('nav');
        let megaTimer = null;

        function closeAllMegas() {
            megas.forEach(m => m.classList.remove('open'));
            if (backdrop) backdrop.classList.remove('open');
            if (nav) nav.classList.remove('mega-open');
            cats.forEach(c => c.classList.remove('open'));
        }

        function startCloseTimer() {
            if (megaTimer) clearTimeout(megaTimer);
            megaTimer = setTimeout(closeAllMegas, 150);
        }

        function stopCloseTimer() {
            if (megaTimer) clearTimeout(megaTimer);
        }

        // Nav Links
        cats.forEach(c => {
            c.addEventListener('mouseenter', () => {
                stopCloseTimer();
                const targetId = 'mega-' + c.dataset.mega;
                const target = document.getElementById(targetId);
                
                // Close others
                megas.forEach(m => {
                    if (m.id !== targetId) m.classList.remove('open');
                });
                cats.forEach(cat => {
                    if (cat !== c) cat.classList.remove('open');
                });

                if (target) {
                    target.classList.add('open');
                    if (backdrop) backdrop.classList.add('open');
                    if (nav) {
                        nav.classList.add('mega-open');
                        c.classList.add('open');
                    }
                }
            });
        });

        // Keep open when over nav
        if (nav) {
            nav.addEventListener('mouseenter', stopCloseTimer);
            nav.addEventListener('mouseleave', startCloseTimer);
        }

        // Keep open when over mega menu
        megas.forEach(m => {
            m.addEventListener('mouseenter', stopCloseTimer);
            m.addEventListener('mouseleave', startCloseTimer);
        });

        // Backdrop click to close
        if (backdrop) {
            backdrop.addEventListener('click', closeAllMegas);
        }

        // Mobile accordion logic moved to nav.js

        // Update year
        const yearSpan = document.getElementById('ncYear');
        if (yearSpan) yearSpan.textContent = new Date().getFullYear();

        // ── SEARCH ──────────────────────────────────────────────────────────
        const SEARCH_DATA = [
            // CONSTRUCCIÓN
            { name: 'Construcción', crumb: 'Categoría 01', tags: ['construccion','hormigon','piso','nuevo'], href: root + 'construccion/', group: 'Construcción' },
            { name: 'Materiales para construcción', crumb: 'Construcción › Materiales', tags: ['materiales','construccion'], href: root + 'construccion/materiales/', group: 'Construcción' },
            { name: 'Nylon', crumb: 'Construcción › Materiales', tags: ['nylon','fibra','construccion','materiales'], href: root + 'construccion/materiales/nylon/', group: 'Construcción' },
            { name: 'Microfibra', crumb: 'Construcción › Materiales', tags: ['microfibra','fibra','construccion','materiales'], href: root + 'construccion/materiales/microfibra/', group: 'Construcción' },
            { name: 'Macrofibra', crumb: 'Construcción › Materiales', tags: ['macrofibra','fibra','construccion','materiales'], href: root + 'construccion/materiales/macrofibra/', group: 'Construcción' },
            { name: 'Endurecedor superficial', crumb: 'Construcción › Materiales', tags: ['endurecedor','superficial','construccion','materiales'], href: root + 'construccion/materiales/endurecedor-superficial/', group: 'Construcción' },
            { name: 'Grouting (construcción)', crumb: 'Construcción › Materiales', tags: ['grouting','relleno','nivelacion','construccion','materiales'], href: root + 'construccion/materiales/grouting/', group: 'Construcción' },
            { name: 'Mortero cementicio (construcción)', crumb: 'Construcción › Materiales', tags: ['mortero','cementicio','cemento','construccion','materiales'], href: root + 'construccion/materiales/mortero-cementicio/', group: 'Construcción' },
            { name: 'Productos químicos para construcción', crumb: 'Construcción › Productos químicos', tags: ['quimicos','quimico','construccion'], href: root + 'construccion/productos-quimicos/', group: 'Construcción' },
            { name: 'Aglutinantes (construcción)', crumb: 'Construcción › Productos químicos', tags: ['aglutinante','aglutinantes','quimico','construccion'], href: root + 'construccion/productos-quimicos/aglutinantes/', group: 'Construcción' },
            { name: 'Puentes de adherencia (construcción)', crumb: 'Construcción › Productos químicos', tags: ['puente','adherencia','adhesion','quimico','construccion'], href: root + 'construccion/productos-quimicos/puentes-de-adherencia/', group: 'Construcción' },
            { name: 'Curadores', crumb: 'Construcción › Productos químicos', tags: ['curador','curadores','curado','quimico','construccion'], href: root + 'construccion/productos-quimicos/curadores/', group: 'Construcción' },
            { name: 'Aditivo para llaneado', crumb: 'Construcción › Productos químicos', tags: ['aditivo','llaneado','llana','quimico','construccion'], href: root + 'construccion/productos-quimicos/aditivo-llaneado/', group: 'Construcción' },
            { name: 'Equipos para construcción', crumb: 'Construcción › Equipos', tags: ['equipos','maquinas','construccion'], href: root + 'construccion/equipos/', group: 'Construcción' },
            { name: 'Allanadoras', crumb: 'Construcción › Equipos', tags: ['allanadora','allanadoras','helicoptero','helicoptero','maquina','construccion','equipos'], href: root + 'construccion/equipos/allanadoras/', group: 'Construcción' },
            // REPARACIÓN
            { name: 'Reparación', crumb: 'Categoría 02', tags: ['reparacion','reparar','dano','fisura','crack'], href: root + 'reparacion/', group: 'Reparación' },
            { name: 'Materiales para reparación', crumb: 'Reparación › Materiales', tags: ['materiales','reparacion'], href: root + 'reparacion/materiales/', group: 'Reparación' },
            { name: 'Grouting (reparación)', crumb: 'Reparación › Materiales', tags: ['grouting','relleno','reparacion','materiales'], href: root + 'reparacion/materiales/grouting/', group: 'Reparación' },
            { name: 'Mortero cementicio (reparación)', crumb: 'Reparación › Materiales', tags: ['mortero','cementicio','cemento','reparacion','materiales'], href: root + 'reparacion/materiales/mortero-cementicio/', group: 'Reparación' },
            { name: 'Endurecedor superficial (reparación)', crumb: 'Reparación › Materiales', tags: ['endurecedor','superficial','reparacion','materiales'], href: root + 'reparacion/materiales/endurecedor-superficial/', group: 'Reparación' },
            { name: 'Productos químicos para reparación', crumb: 'Reparación › Productos químicos', tags: ['quimicos','quimico','reparacion'], href: root + 'reparacion/productos-quimicos/', group: 'Reparación' },
            { name: 'Aglutinantes (reparación)', crumb: 'Reparación › Productos químicos', tags: ['aglutinante','aglutinantes','quimico','reparacion'], href: root + 'reparacion/productos-quimicos/aglutinantes/', group: 'Reparación' },
            { name: 'Puentes de adherencia (reparación)', crumb: 'Reparación › Productos químicos', tags: ['puente','adherencia','adhesion','quimico','reparacion'], href: root + 'reparacion/productos-quimicos/puentes-de-adherencia/', group: 'Reparación' },
            { name: 'Equipos para reparación', crumb: 'Reparación › Equipos', tags: ['equipos','maquinas','reparacion'], href: root + 'reparacion/equipos/', group: 'Reparación' },
            { name: 'Escarificadoras', crumb: 'Reparación › Equipos', tags: ['escarificadora','escarificadoras','escarificar','reparacion','equipos'], href: root + 'reparacion/equipos/escarificadoras/', group: 'Reparación' },
            { name: 'Insumos para reparación', crumb: 'Reparación › Insumos', tags: ['insumos','accesorios','reparacion'], href: root + 'reparacion/insumos/', group: 'Reparación' },
            { name: 'Accesorios amoladora', crumb: 'Reparación › Insumos', tags: ['accesorios','amoladora','disco','reparacion','insumos'], href: root + 'reparacion/insumos/accesorios-amoladora/', group: 'Reparación' },
            { name: 'Ruedas de bujardado', crumb: 'Reparación › Insumos', tags: ['bujardado','rueda','bujarda','reparacion','insumos'], href: root + 'reparacion/insumos/bujardado/', group: 'Reparación' },
            { name: 'Puntas martillo', crumb: 'Reparación › Insumos', tags: ['punta','martillo','cincel','reparacion','insumos'], href: root + 'reparacion/insumos/puntas-martillo/', group: 'Reparación' },
            { name: 'Mechas copa', crumb: 'Reparación › Insumos', tags: ['mecha','copa','perforacion','reparacion','insumos'], href: root + 'reparacion/insumos/mechas-copa/', group: 'Reparación' },
            // PULIDO
            { name: 'Pulido', crumb: 'Categoría 03', tags: ['pulido','pulir','brillo','diamantado'], href: root + 'pulido/', group: 'Pulido' },
            { name: 'Materiales para pulido', crumb: 'Pulido › Materiales', tags: ['materiales','pulido'], href: root + 'pulido/materiales/', group: 'Pulido' },
            { name: 'Grouting (pulido)', crumb: 'Pulido › Materiales', tags: ['grouting','relleno','pulido','materiales'], href: root + 'pulido/materiales/grouting/', group: 'Pulido' },
            { name: 'Mortero cementicio (pulido)', crumb: 'Pulido › Materiales', tags: ['mortero','cementicio','cemento','pulido','materiales'], href: root + 'pulido/materiales/mortero-cementicio/', group: 'Pulido' },
            { name: 'Productos químicos para pulido', crumb: 'Pulido › Productos químicos', tags: ['quimicos','quimico','pulido'], href: root + 'pulido/productos-quimicos/', group: 'Pulido' },
            { name: 'Aglutinantes (pulido)', crumb: 'Pulido › Productos químicos', tags: ['aglutinante','aglutinantes','quimico','pulido'], href: root + 'pulido/productos-quimicos/aglutinantes/', group: 'Pulido' },
            { name: 'Puentes de adherencia (pulido)', crumb: 'Pulido › Productos químicos', tags: ['puente','adherencia','adhesion','quimico','pulido'], href: root + 'pulido/productos-quimicos/puentes-de-adherencia/', group: 'Pulido' },
            { name: 'Densificadores', crumb: 'Pulido › Productos químicos', tags: ['densificador','densificadores','densificar','quimico','pulido'], href: root + 'pulido/productos-quimicos/densificadores/', group: 'Pulido' },
            { name: 'Impermeabilizantes', crumb: 'Pulido › Productos químicos', tags: ['impermeabilizante','impermeabilizantes','impermeabilizar','quimico','pulido'], href: root + 'pulido/productos-quimicos/impermeabilizantes/', group: 'Pulido' },
            { name: 'Selladores (pulido)', crumb: 'Pulido › Productos químicos', tags: ['sellador','selladores','sellar','quimico','pulido'], href: root + 'pulido/productos-quimicos/selladores/', group: 'Pulido' },
            { name: 'Detergentes', crumb: 'Pulido › Productos químicos', tags: ['detergente','detergentes','limpieza','quimico','pulido'], href: root + 'pulido/productos-quimicos/detergentes/', group: 'Pulido' },
            { name: 'Equipos para pulido', crumb: 'Pulido › Equipos', tags: ['equipos','maquinas','pulido'], href: root + 'pulido/equipos/', group: 'Pulido' },
            { name: 'Pulidoras', crumb: 'Pulido › Equipos', tags: ['pulidora','pulidoras','maquina','pulido','equipos'], href: root + 'pulido/equipos/pulidoras/', group: 'Pulido' },
            { name: 'Accesorios pulidoras', crumb: 'Pulido › Equipos', tags: ['accesorios','pulidoras','pulido','equipos'], href: root + 'pulido/equipos/accesorios-pulidoras/', group: 'Pulido' },
            { name: 'Aspiradoras (pulido)', crumb: 'Pulido › Equipos', tags: ['aspiradora','aspiradoras','pulido','equipos'], href: root + 'pulido/equipos/aspiradoras/', group: 'Pulido' },
            { name: 'Accesorios aspiradoras (pulido)', crumb: 'Pulido › Equipos', tags: ['accesorios','aspiradoras','pulido','equipos'], href: root + 'pulido/equipos/accesorios-aspiradoras/', group: 'Pulido' },
            { name: 'Lustradoras (pulido)', crumb: 'Pulido › Equipos', tags: ['lustradora','lustradoras','lustrar','brillo','pulido','equipos'], href: root + 'pulido/equipos/lustradoras/', group: 'Pulido' },
            { name: 'Lavasecapisos (pulido)', crumb: 'Pulido › Equipos', tags: ['lavasecapiso','lavasecapisos','lavar','secar','pulido','equipos'], href: root + 'pulido/equipos/lavasecapisos/', group: 'Pulido' },
            { name: 'Insumos para pulido', crumb: 'Pulido › Insumos', tags: ['insumos','discos','abrasivos','pulido'], href: root + 'pulido/insumos/', group: 'Pulido' },
            { name: 'Metales para desbaste', crumb: 'Pulido › Insumos', tags: ['metal','metales','desbaste','desbastar','pulido','insumos'], href: root + 'pulido/insumos/metales-desbaste/', group: 'Pulido' },
            { name: 'Discos resinoides', crumb: 'Pulido › Insumos', tags: ['disco','resinoides','resina','pulido','insumos'], href: root + 'pulido/insumos/discos-resinoides/', group: 'Pulido' },
            { name: 'Paños diamantados', crumb: 'Pulido › Insumos', tags: ['pano','panos','diamantado','diamantados','pulido','insumos'], href: root + 'pulido/insumos/panos-diamantados/', group: 'Pulido' },
            // MANTENIMIENTO
            { name: 'Mantenimiento', crumb: 'Categoría 04', tags: ['mantenimiento','mantener','conservar'], href: root + 'mantenimiento/', group: 'Mantenimiento' },
            { name: 'Equipos para mantenimiento', crumb: 'Mantenimiento › Equipos', tags: ['equipos','maquinas','mantenimiento'], href: root + 'mantenimiento/equipos/', group: 'Mantenimiento' },
            { name: 'Aspiradoras (mantenimiento)', crumb: 'Mantenimiento › Equipos', tags: ['aspiradora','aspiradoras','mantenimiento','equipos'], href: root + 'mantenimiento/equipos/aspiradoras/', group: 'Mantenimiento' },
            { name: 'Lustradoras (mantenimiento)', crumb: 'Mantenimiento › Equipos', tags: ['lustradora','lustradoras','lustrar','brillo','mantenimiento','equipos'], href: root + 'mantenimiento/equipos/lustradoras/', group: 'Mantenimiento' },
            { name: 'Lavasecapisos (mantenimiento)', crumb: 'Mantenimiento › Equipos', tags: ['lavasecapiso','lavasecapisos','lavar','secar','mantenimiento','equipos'], href: root + 'mantenimiento/equipos/lavasecapisos/', group: 'Mantenimiento' },
            { name: 'Productos químicos para mantenimiento', crumb: 'Mantenimiento › Productos químicos', tags: ['quimicos','quimico','mantenimiento'], href: root + 'mantenimiento/productos-quimicos/', group: 'Mantenimiento' },
            { name: 'Selladores (mantenimiento)', crumb: 'Mantenimiento › Productos químicos', tags: ['sellador','selladores','sellar','quimico','mantenimiento'], href: root + 'mantenimiento/productos-quimicos/selladores/', group: 'Mantenimiento' },
            { name: 'Desengrasantes', crumb: 'Mantenimiento › Productos químicos', tags: ['desengrasante','desengrasantes','desengrasar','quimico','mantenimiento'], href: root + 'mantenimiento/productos-quimicos/desengrasantes/', group: 'Mantenimiento' },
            { name: 'Accesorios de mantenimiento', crumb: 'Mantenimiento › Accesorios', tags: ['accesorios','mantenimiento'], href: root + 'mantenimiento/accesorios/', group: 'Mantenimiento' },
            { name: 'Mopas y pulverizadores', crumb: 'Mantenimiento › Accesorios', tags: ['mopa','mopas','pulverizador','pulverizadores','mantenimiento','accesorios'], href: root + 'mantenimiento/accesorios/mopas/', group: 'Mantenimiento' },
            { name: 'Paños de lustre', crumb: 'Mantenimiento › Accesorios', tags: ['pano','panos','lustre','lustrar','mantenimiento','accesorios'], href: root + 'mantenimiento/accesorios/panos/', group: 'Mantenimiento' },
            // EMPRESA
            { name: 'Capacitaciones', crumb: 'Empresa', tags: ['capacitacion','capacitaciones','curso','cursos','formacion','aprender','training'], href: root + 'capacitacion/', group: 'Empresa' },
            { name: 'Sistema NewConcret', crumb: 'Empresa › Sistema NC', tags: ['sistema','nc','newconcret','metodo','proceso'], href: root + 'sistema-newconcret/', group: 'Empresa' },
            { name: 'Nosotros', crumb: 'Empresa', tags: ['nosotros','empresa','quienes','historia','equipo'], href: root + 'nosotros/', group: 'Empresa' },
            { name: 'Contacto', crumb: 'Empresa', tags: ['contacto','contactar','consulta','consultar','whatsapp','telefono'], href: root + 'contacto/', group: 'Empresa' },
        ];

        function normStr(s) {
            return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
        }

        function runSearch(query) {
            var q = normStr(query.trim());
            if (!q) return null;
            return SEARCH_DATA.filter(function(item) {
                return normStr(item.name).includes(q) ||
                    normStr(item.crumb).includes(q) ||
                    item.tags.some(function(t) { return normStr(t).includes(q); });
            });
        }

        var ARROW_SVG = '<svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2.5 6.5h8M7 3l3.5 3.5L7 10" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"></path></svg>';

        function renderDefaultSearch() {
            var container = document.getElementById('ncSearchResults');
            if (!container) return;
            var quickLinks = [
                { name: 'Capacitaciones', href: root + 'capacitacion/', crumb: 'Empresa' },
                { name: 'Pulidoras', href: root + 'pulido/equipos/pulidoras/', crumb: 'Pulido › Equipos' },
                { name: 'Allanadoras', href: root + 'construccion/equipos/allanadoras/', crumb: 'Construcción › Equipos' },
                { name: 'Densificadores', href: root + 'pulido/productos-quimicos/densificadores/', crumb: 'Pulido › Químicos' },
                { name: 'Escarificadoras', href: root + 'reparacion/equipos/escarificadoras/', crumb: 'Reparación › Equipos' },
                { name: 'Sistema NC', href: root + 'sistema-newconcret/', crumb: 'Empresa' },
            ];
            container.innerHTML = '<div class="nc-srch-hint-lbl">Accesos rápidos</div><div class="nc-srch-items">' +
                quickLinks.map(function(l) {
                    return '<a href="' + l.href + '" class="nc-srch-item"><div class="nc-srch-meta"><span class="nc-srch-crumb">' + l.crumb + '</span><span class="nc-srch-name">' + l.name + '</span></div><span class="nc-srch-arrow">' + ARROW_SVG + '</span></a>';
                }).join('') + '</div>';
        }

        function renderSearchResults(results) {
            var container = document.getElementById('ncSearchResults');
            if (!container) return;
            if (!results || results.length === 0) {
                container.innerHTML = '<div class="nc-srch-empty">Sin resultados. Intentá con otro término.</div>';
                return;
            }
            var groups = {};
            results.forEach(function(r) {
                if (!groups[r.group]) groups[r.group] = [];
                groups[r.group].push(r);
            });
            var ORDER = ['Construcción','Reparación','Pulido','Mantenimiento','Empresa'];
            var html = '';
            ORDER.forEach(function(g) {
                if (!groups[g]) return;
                html += '<div class="nc-srch-group"><div class="nc-srch-group-lbl">' + g + '</div><div class="nc-srch-items">' +
                    groups[g].map(function(item) {
                        return '<a href="' + item.href + '" class="nc-srch-item"><div class="nc-srch-meta"><span class="nc-srch-crumb">' + item.crumb + '</span><span class="nc-srch-name">' + item.name + '</span></div><span class="nc-srch-arrow">' + ARROW_SVG + '</span></a>';
                    }).join('') + '</div></div>';
            });
            container.innerHTML = html;
        }

        function openSearch() {
            var navEl = document.getElementById('nav');
            var bar = document.getElementById('navSearchBar');
            var drop = document.getElementById('ncSearchDrop');
            var inp = document.getElementById('ncSearchInput');
            if (!navEl) return;
            closeAllMegas();
            navEl.classList.add('search-mode');
            if (bar) bar.setAttribute('aria-hidden', 'false');
            if (drop) drop.classList.add('open');
            renderDefaultSearch();
            setTimeout(function() { if (inp) inp.focus(); }, 80);
        }

        function closeSearch() {
            var navEl = document.getElementById('nav');
            var bar = document.getElementById('navSearchBar');
            var drop = document.getElementById('ncSearchDrop');
            var inp = document.getElementById('ncSearchInput');
            if (!navEl) return;
            navEl.classList.remove('search-mode');
            if (bar) bar.setAttribute('aria-hidden', 'true');
            if (drop) drop.classList.remove('open');
            if (inp) { inp.value = ''; inp.blur(); }
        }

        var searchBtn = document.querySelector('.nav-search');
        if (searchBtn) searchBtn.addEventListener('click', openSearch);

        var mobSearchBtn = document.getElementById('mobSearchBtn');
        if (mobSearchBtn) mobSearchBtn.addEventListener('click', openSearch);

        var searchX = document.getElementById('ncSearchX');
        if (searchX) searchX.addEventListener('click', closeSearch);

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') closeSearch();
        });

        var searchInput = document.getElementById('ncSearchInput');
        if (searchInput) {
            searchInput.addEventListener('input', function() {
                var val = this.value.trim();
                if (!val) { renderDefaultSearch(); } else { renderSearchResults(runSearch(val)); }
            });
            searchInput.addEventListener('keydown', function(e) {
                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    var items = document.querySelectorAll('#ncSearchDrop .nc-srch-item');
                    if (items.length) items[0].focus();
                }
            });
        }

        document.addEventListener('keydown', function(e) {
            var focused = document.activeElement;
            if (!focused || !focused.classList.contains('nc-srch-item')) return;
            var items = Array.from(document.querySelectorAll('#ncSearchDrop .nc-srch-item'));
            var idx = items.indexOf(focused);
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (idx < items.length - 1) items[idx + 1].focus();
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (idx > 0) { items[idx - 1].focus(); }
                else if (searchInput) searchInput.focus();
            }
        });

        // Click outside nav + dropdown closes search
        document.addEventListener('click', function(e) {
            var navEl = document.getElementById('nav');
            var drop = document.getElementById('ncSearchDrop');
            if (!navEl || !navEl.classList.contains('search-mode')) return;
            if (!navEl.contains(e.target) && (!drop || !drop.contains(e.target))) {
                closeSearch();
            }
        });
        // ── END SEARCH ──────────────────────────────────────────────────────
    }
    
    // 4. Global Toast System
    window.showNCToast = function(message) {
        let toast = document.getElementById('nc-global-toast');
        if (!toast) {
            const style = document.createElement('style');
            style.innerHTML = `
                #nc-global-toast { position: fixed; bottom: 2rem; right: 2rem; background: var(--nc-red, #C1121F); color: #fff; padding: 1.2rem 2rem; font-family: 'Barlow Condensed', sans-serif; font-weight: 600; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.1em; border-left: 4px solid #E5161E; box-shadow: 0 10px 30px rgba(0,0,0,0.8); transform: translateY(100px); opacity: 0; visibility: hidden; transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); z-index: 100000; pointer-events: none; }
                #nc-global-toast.show { transform: translateY(0); opacity: 1; visibility: visible; }
            `;
            document.head.appendChild(style);
            
            toast = document.createElement('div');
            toast.id = 'nc-global-toast';
            document.body.appendChild(toast);
        }
        
        toast.textContent = message;
        toast.classList.add('show');
        
        if (window.ncToastTimeout) clearTimeout(window.ncToastTimeout);
        window.ncToastTimeout = setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);
    };

    // Execute immediately or on DOM load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectLayout);
    } else {
        injectLayout();
    }

})();
