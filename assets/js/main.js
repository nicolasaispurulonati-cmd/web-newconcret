/* ═══════════════════════════════════════════════
   NEWCONCRET — main.js
   JS global compartido por todas las páginas
   ═══════════════════════════════════════════════ */

(function() {
  'use strict';

  // ── Cursor personalizado ──
  const cur = document.getElementById('cur');
  const ring = document.getElementById('ring');
  if (cur && ring) {
    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
    (function loop() {
      cur.style.left = mx + 'px'; cur.style.top = my + 'px';
      rx += (mx - rx) * .12; ry += (my - ry) * .12;
      ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
      requestAnimationFrame(loop);
    })();
  }

  // ── NAVIGATION LOGIC MOVED TO nav.js ──


  // ── Reveal on scroll ──
  const obs = new IntersectionObserver(
    es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); }),
    { threshold: .1 }
  );
  window.obs = obs;
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

  // ── Count-up animation ──
  function countUp(el, target, duration = 2000) {
    const start = performance.now();
    (function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      const v = Math.round((1 - Math.pow(1 - p, 4)) * target);
      el.textContent = target >= 100 ? v.toLocaleString('es-AR') : v;
      if (p < 1) requestAnimationFrame(tick);
    })(start);
  }
  const countObs = new IntersectionObserver(
    es => es.forEach(e => {
      if (e.isIntersecting) {
        countUp(e.target, +e.target.dataset.t);
        countObs.unobserve(e.target);
      }
    }),
    { threshold: .5 }
  );
  document.querySelectorAll('.cu').forEach(el => countObs.observe(el));

  // ── Parallax hero image ──
  const heroImg = document.querySelector('.hero-bg img');
  if (heroImg) {
    window.addEventListener('scroll', () => {
      if (scrollY < window.innerHeight) heroImg.style.transform = `translateY(${scrollY * .22}px)`;
    }, { passive: true });
  }

  // ── Actualizar año del footer ──
  const yearEl = document.getElementById('ncYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ── Catalog tabs ──
  document.querySelectorAll('.cat-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const group = tab.closest('.cat-tabs');
      group.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Filter behavior: data-filter attribute on tab matches data-cat on cards
      const filter = tab.dataset.filter;
      if (filter) {
        const grid = group.nextElementSibling;
        if (grid && grid.classList.contains('prod-grid')) {
          grid.querySelectorAll('.prod-card').forEach(card => {
            if (filter === 'all' || card.dataset.cat === filter) {
              card.style.display = '';
            } else {
              card.style.display = 'none';
            }
          });
        }
      }
    });
  });

  // ── Card tilt hover (stats) ──
  document.querySelectorAll('.s-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5;
      const y = (e.clientY - r.top) / r.height - .5;
      card.style.transform = `perspective(600px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });

  // ── URL Parameter Filter ──
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get('cat');
  if (catParam) {
    const tabToClick = document.querySelector(`.cat-tab[data-filter="${catParam}"]`);
    if (tabToClick) {
      setTimeout(() => {
        tabToClick.click();
        const grid = document.querySelector('.prod-grid');
        if (grid) grid.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 500);
    }
  }

})();

/* ──────────────────────────────────────
   9. GLOBAL PRODUCT FILTER ENGINE
────────────────────────────────────── */
function getProductos(seccion = null, categoria = null, subcategoria = null) {
    if (typeof productos === 'undefined') return [];

    return productos.filter(p => {
        if (p.visible === false) return false;
        if (!p.rutas || !Array.isArray(p.rutas)) return false;

        return p.rutas.some(r => {
            const s = r['sección'] || r['seccion'] || '';
            const c = r['categoría'] || r['categoria'] || '';
            const sc = r['subcategoría'] || r['subcategoria'] || '';

            if (s !== seccion) return false;

            // Root Section View
            if (categoria === 'all' || !categoria) {
                return c === '';
            }

            // Category View
            if (!subcategoria) {
                return c === categoria;
            }

            // Subcategory View
            return (c === categoria && sc === subcategoria);
        });
    });
}
