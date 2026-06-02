/* Pedro Josino — micro-interações leves (sem dependências, ~3KB)
   Tudo respeita prefers-reduced-motion e é passivo/idle quando possível. */
(function () {
  'use strict';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;
  // Em mobile, desativa todos os efeitos pesados (parallax, tilt, magnetic, count-up)
  // pra evitar travamento. Mantém só reveal e progress bar leves.
  var isMobile = window.matchMedia('(max-width: 900px)').matches || ('ontouchstart' in window);

  var ready = function (fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  };

  ready(function () {
    /* ============ 1) Reveal on scroll (stagger por seção) ============ */
    try {
      var targets = document.querySelectorAll(
        'section > .container > *, .cards article, .steps li, .reviews article, .docs article, .faq details, .about-card, .hero-figure'
      );
      targets.forEach(function (el, i) {
        el.classList.add('fx-reveal');
        // pequeno stagger por ordem no DOM dentro do mesmo pai
      });
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add('fx-in');
            io.unobserve(e.target);
          }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
      targets.forEach(function (el) { io.observe(el); });
    } catch (e) {}

    /* ============ 2) Hero parallax leve (mouse + scroll) ============ */
    try {
      if (isMobile) throw new Error('skip-mobile');
      var hero = document.querySelector('.hero');
      var heroFig = document.querySelector('.hero-figure, .hero img, .hero picture');
      if (hero) {
        var rafId = 0, mx = 0, my = 0, sy = 0;
        var apply = function () {
          rafId = 0;
          hero.style.setProperty('--mx', mx.toFixed(3));
          hero.style.setProperty('--my', my.toFixed(3));
          hero.style.setProperty('--sy', sy.toFixed(1) + 'px');
        };
        var schedule = function () { if (!rafId) rafId = requestAnimationFrame(apply); };
        hero.addEventListener('mousemove', function (e) {
          var r = hero.getBoundingClientRect();
          mx = ((e.clientX - r.left) / r.width - 0.5) * 2;   // -1..1
          my = ((e.clientY - r.top) / r.height - 0.5) * 2;
          schedule();
        }, { passive: true });
        window.addEventListener('scroll', function () {
          var r = hero.getBoundingClientRect();
          if (r.bottom < 0 || r.top > window.innerHeight) return;
          sy = Math.max(-40, Math.min(40, -r.top * 0.06));
          schedule();
        }, { passive: true });
      }
    } catch (e) {}

    /* ============ 3) Botões magnéticos (sutil) ============ */
    try {
      if (isMobile) throw new Error('skip-mobile');
      var magnets = document.querySelectorAll('.btn, .btn-primary, .btn-wa, .btn-ghost');
      magnets.forEach(function (b) {
        var raf = 0, tx = 0, ty = 0;
        var move = function (e) {
          var r = b.getBoundingClientRect();
          var x = e.clientX - (r.left + r.width / 2);
          var y = e.clientY - (r.top + r.height / 2);
          tx = x * 0.12; ty = y * 0.18;
          if (!raf) raf = requestAnimationFrame(function () {
            raf = 0;
            b.style.transform = 'translate(' + tx.toFixed(2) + 'px,' + ty.toFixed(2) + 'px)';
          });
        };
        var reset = function () {
          if (raf) cancelAnimationFrame(raf), raf = 0;
          b.style.transform = '';
        };
        b.addEventListener('mousemove', move, { passive: true });
        b.addEventListener('mouseleave', reset, { passive: true });
      });
    } catch (e) {}

    /* ============ 4) Tilt 3D leve nos cards ============ */
    try {
      if (isMobile) throw new Error('skip-mobile');
      var cards = document.querySelectorAll('.cards article, .docs article, .about-card');
      cards.forEach(function (c) {
        var raf = 0, rx = 0, ry = 0;
        c.addEventListener('mousemove', function (e) {
          var r = c.getBoundingClientRect();
          var px = (e.clientX - r.left) / r.width - 0.5;
          var py = (e.clientY - r.top) / r.height - 0.5;
          ry = px * 5; rx = -py * 5;
          if (!raf) raf = requestAnimationFrame(function () {
            raf = 0;
            c.style.transform = 'perspective(900px) rotateX(' + rx.toFixed(2) + 'deg) rotateY(' + ry.toFixed(2) + 'deg) translateY(-2px)';
          });
        }, { passive: true });
        c.addEventListener('mouseleave', function () {
          if (raf) cancelAnimationFrame(raf), raf = 0;
          c.style.transform = '';
        }, { passive: true });
      });
    } catch (e) {}

    /* ============ 5) Count-up para números (KPIs) ============ */
    try {
      var nums = document.querySelectorAll('[data-count], .kpi-num, .hero-kpis strong');
      var ease = function (t) { return 1 - Math.pow(1 - t, 3); };
      var animate = function (el) {
        var raw = (el.getAttribute('data-count') || el.textContent || '').trim();
        var m = raw.match(/([\d.,]+)/);
        if (!m) return;
        var target = parseFloat(m[1].replace(/\./g, '').replace(',', '.'));
        if (isNaN(target)) return;
        var prefix = raw.slice(0, m.index);
        var suffix = raw.slice(m.index + m[1].length);
        var hasDecimal = /[,]\d/.test(m[1]);
        var dur = 1200, start = performance.now();
        var fmt = function (v) {
          if (hasDecimal) return v.toFixed(1).replace('.', ',');
          return Math.round(v).toLocaleString('pt-BR');
        };
        var tick = function (t) {
          var p = Math.min(1, (t - start) / dur);
          el.textContent = prefix + fmt(target * ease(p)) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      };
      var io2 = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { animate(e.target); io2.unobserve(e.target); }
        });
      }, { threshold: 0.4 });
      nums.forEach(function (el) { io2.observe(el); });
    } catch (e) {}

    /* ============ 6) Header com sombra ao rolar ============ */
    try {
      var header = document.querySelector('.header');
      if (header) {
        var onScroll = function () {
          header.classList.toggle('is-scrolled', window.scrollY > 8);
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
      }
    } catch (e) {}

    /* ============ 7) Progress bar de leitura no topo ============ */
    try {
      var bar = document.createElement('div');
      bar.className = 'fx-progress';
      document.body.appendChild(bar);
      var prog = function () {
        var h = document.documentElement;
        var max = h.scrollHeight - h.clientHeight;
        var p = max > 0 ? (h.scrollTop / max) : 0;
        bar.style.transform = 'scaleX(' + p.toFixed(4) + ')';
      };
      prog();
      window.addEventListener('scroll', prog, { passive: true });
      window.addEventListener('resize', prog, { passive: true });
    } catch (e) {}
  });
})();
