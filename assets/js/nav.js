/* ═══════════════════════════════════════════════
   NEWCONCRET — nav.js
   Lógica centralizada para la navegación
   ═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ── 1. Nav Scroll Backdrop ──
  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('on', window.scrollY > 60);
    });
  }

  // ── 2. Desktop Mega Menu ──
  const backdrop = document.getElementById('backdrop');
  if (backdrop) {
    let current = null;
    let closeTimer = null;

    function openMega(id) {
      if (closeTimer) { clearTimeout(closeTimer); closeTimer = null; }
      if (current === id) return;
      if (current) {
        const prev = document.getElementById('mega-' + current);
        if (prev) { prev.classList.remove('open', 'animating'); }
        document.querySelector(`[data-mega="${current}"]`)?.classList.remove('open');
      }
      current = id;
      const mega = document.getElementById('mega-' + id);
      if (!mega) return;
      document.querySelector(`[data-mega="${id}"]`)?.classList.add('open');
      backdrop.classList.add('show');
      mega.classList.add('animating');
      requestAnimationFrame(() => {
        requestAnimationFrame(() => { mega.classList.add('open'); });
      });
    }

    function closeMega(immediate) {
      if (!current) return;
      const id = current;
      const mega = document.getElementById('mega-' + id);
      const btn  = document.querySelector(`[data-mega="${id}"]`);
      const doClose = () => {
        btn?.classList.remove('open');
        backdrop.classList.remove('show');
        if (mega) { mega.classList.remove('open'); setTimeout(() => mega.classList.remove('animating'), 350); }
        current = null;
      };
      if (immediate) { doClose(); }
      else { closeTimer = setTimeout(doClose, 120); }
    }

    document.querySelectorAll('.nav-cat').forEach(btn => {
      btn.addEventListener('mouseenter', () => openMega(btn.dataset.mega));
      btn.addEventListener('mouseleave', () => {
        closeTimer = setTimeout(() => { if (current === btn.dataset.mega) closeMega(true); }, 80);
      });
    });

    document.querySelectorAll('.mega').forEach(panel => {
      panel.addEventListener('mouseenter', () => { if (closeTimer) { clearTimeout(closeTimer); closeTimer = null; } });
      panel.addEventListener('mouseleave', () => closeMega(false));
    });

    backdrop.addEventListener('click', () => closeMega(true));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMega(true); });
  }

  // ── 3. Mobile Drawer Toggle ──
  const ham = document.getElementById('ham');
  const drawer = document.getElementById('mobDrawer');
  if (ham && drawer) {
    const mobBackdrop = document.getElementById('mobBd');
    const closeBtn = document.getElementById('mobClose');
    
    const toggleDrawer = () => {
      const isOpen = drawer.classList.toggle('open');
      if (mobBackdrop) mobBackdrop.classList.toggle('show');
      ham.classList.toggle('active');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    ham.addEventListener('click', toggleDrawer);
    if (mobBackdrop) mobBackdrop.addEventListener('click', toggleDrawer);
    if (closeBtn) closeBtn.addEventListener('click', toggleDrawer);
  }

  // ── 4. Mobile Category Accordions ──
  const accBtns = document.querySelectorAll('.mob-cat-btn');
  accBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const subId = btn.getAttribute('data-sub');
      const sub = document.getElementById(subId);
      if (!sub) return;
      const isOpen = sub.classList.toggle('open');
      btn.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen);
    });
  });

  // ── 5. Active Link Highlighting ──
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-simple, .nav-cat, .mob-simple a').forEach(a => {
    let href = a.getAttribute('href');
    if (!href) return;
    const parts = href.split('/');
    const lastPart = parts[parts.length - 1] || parts[parts.length - 2];
    if (lastPart && lastPart !== 'index.html' && lastPart !== '..' && lastPart !== '.') {
      if (currentPath.includes(lastPart)) {
        a.classList.add('active');
      }
    }
  });

});
