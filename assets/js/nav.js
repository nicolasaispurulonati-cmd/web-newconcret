/* ═══════════════════════════════════════════════
   NEWCONCRET — nav.js
   Lógica centralizada para la navegación
   ═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ── 1. Nav Scroll Backdrop ──
  const nav = document.getElementById('nav');
  const mobNav = document.getElementById('mob-nav');
  
  if (nav || mobNav) {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const isLanding = !!document.querySelector('.hero');
      const isHovering = nav?.matches(':hover');
      
      const opacity = (isLanding && !isHovering) ? Math.min(scroll / 300, 0.94) : 0.94;
      const blur = (isLanding && !isHovering) ? Math.min(scroll / 10, 20) : 20;
      
      if (nav) {
        nav.style.setProperty('--nav-bg-opacity', opacity);
        nav.style.setProperty('--nav-blur', `${blur}px`);
        nav.classList.toggle('on', isLanding ? (scroll > 2 || isHovering) : true);
      }
      
      if (mobNav) {
        // En mobile el fondo siempre es visible para evitar saltos visuales
        const mobOpacity = 0.94;
        const mobBlur    = 20;
        
        mobNav.style.background = `rgba(10, 10, 10, ${mobOpacity})`;
        mobNav.style.backdropFilter = `blur(${mobBlur}px)`;
        mobNav.style.webkitBackdropFilter = `blur(${mobBlur}px)`;
        mobNav.style.borderBottomColor = `rgba(255, 255, 255, 0.1)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    if (nav) {
        nav.addEventListener('mouseenter', handleScroll);
        nav.addEventListener('mouseleave', handleScroll);
    }
    handleScroll();
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
  const initMobInteractivity = () => {
    const ham = document.getElementById('ham');
    const drawer = document.getElementById('mobDrawer');
    const mobBackdrop = document.getElementById('mobBd');
    const closeBtn = document.getElementById('mobClose');
    
    if (!ham || !drawer) return;

    const toggleDrawer = (e) => {
      if (e) e.preventDefault();
      const isOpen = drawer.classList.toggle('open');
      if (mobBackdrop) mobBackdrop.classList.toggle('show');
      ham.classList.toggle('active');
      ham.setAttribute('aria-expanded', isOpen);
      
      if (isOpen) {
        document.body.classList.add('no-scroll');
        document.documentElement.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
        document.documentElement.classList.remove('no-scroll');
      }
    };

    // Use onclick to ensure we overwrite any previous single listeners
    ham.onclick = toggleDrawer;
    if (mobBackdrop) mobBackdrop.onclick = toggleDrawer;
    if (closeBtn) closeBtn.onclick = toggleDrawer;

    // Close drawer when a link is clicked (useful for anchors)
    drawer.querySelectorAll('a').forEach(link => {
      link.onclick = () => {
        if (drawer.classList.contains('open')) toggleDrawer();
      };
    });

    // ── 4. Mobile Category Accordions ──
    const accBtns = document.querySelectorAll('.mob-cat-btn');
    accBtns.forEach(btn => {
      btn.onclick = () => {
        const subId = btn.getAttribute('data-sub');
        const sub = document.getElementById(subId);
        if (!sub) return;
        
        const wasOpen = sub.classList.contains('open');
        
        // Close other open accordions
        document.querySelectorAll('.mob-sub.open').forEach(s => {
          if (s.id !== subId) s.classList.remove('open');
        });
        document.querySelectorAll('.mob-cat-btn.open').forEach(b => {
          if (b !== btn) b.classList.remove('open');
        });

        sub.classList.toggle('open', !wasOpen);
        btn.classList.toggle('open', !wasOpen);
        btn.setAttribute('aria-expanded', !wasOpen);
      };
    });
  };

  // Run with a small delay to ensure layout.js has injected the HTML
  setTimeout(initMobInteractivity, 50);

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
