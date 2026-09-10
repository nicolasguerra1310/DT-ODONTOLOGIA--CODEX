/* =========================================================
   DT ODONTOLOGÍA — Dr. Duilio Torres
   Interacciones de la landing
   ========================================================= */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {

    /* ---------- 1. Sombra de la barra al hacer scroll ---------- */
    var nav = document.getElementById('nav');
    var alScrollear = function () {
      nav.classList.toggle('scrolled', window.scrollY > 8);
    };
    window.addEventListener('scroll', alScrollear, { passive: true });
    alScrollear();

    /* ---------- 2. Menú móvil ---------- */
    var burger = document.getElementById('burger');
    var links = document.getElementById('navLinks');

    var cerrarMenu = function () {
      burger.classList.remove('abierto');
      links.classList.remove('abierto');
      document.body.classList.remove('menu-abierto');
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Abrir menú');
    };

    burger.addEventListener('click', function () {
      var abierto = links.classList.toggle('abierto');
      burger.classList.toggle('abierto', abierto);
      document.body.classList.toggle('menu-abierto', abierto);
      burger.setAttribute('aria-expanded', String(abierto));
      burger.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
    });

    links.addEventListener('click', function (e) {
      if (e.target.closest('a')) cerrarMenu();
    });

    document.addEventListener('click', function (e) {
      if (!links.classList.contains('abierto')) return;
      if (e.target.closest('#navLinks') || e.target.closest('#burger')) return;
      cerrarMenu();
    });

    /* ---------- 3. Aparición progresiva de secciones ---------- */
    var aRevelar = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
      var observador = new IntersectionObserver(function (entradas) {
        entradas.forEach(function (entrada) {
          if (!entrada.isIntersecting) return;
          entrada.target.classList.add('visible');
          observador.unobserve(entrada.target);
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

      // Un pequeño escalonado dentro de cada grilla para que no entre todo de golpe
      var conRetraso = function (sel) {
        document.querySelectorAll(sel).forEach(function (contenedor) {
          contenedor.querySelectorAll('.reveal').forEach(function (el, i) {
            el.style.transitionDelay = Math.min(i * 90, 450) + 'ms';
          });
        });
      };
      conRetraso('.grid-4, .grid-3, .hero-copy');

      aRevelar.forEach(function (el) { observador.observe(el); });
    } else {
      aRevelar.forEach(function (el) { el.classList.add('visible'); });
    }

    /* ---------- 4. Enlace activo según la sección visible ---------- */
    var enlaces = Array.prototype.slice.call(links.querySelectorAll('a[href^="#"]'));
    var secciones = enlaces
      .map(function (a) { return document.querySelector(a.getAttribute('href')); })
      .filter(Boolean);

    if ('IntersectionObserver' in window && secciones.length) {
      var spy = new IntersectionObserver(function (entradas) {
        entradas.forEach(function (entrada) {
          if (!entrada.isIntersecting) return;
          enlaces.forEach(function (a) {
            a.classList.toggle('activo', a.getAttribute('href') === '#' + entrada.target.id);
          });
        });
      }, { rootMargin: '-45% 0px -50% 0px' });
      secciones.forEach(function (s) { spy.observe(s); });
    }

    /* ---------- 5. Acordeón: una respuesta abierta por vez ---------- */
    var preguntas = document.querySelectorAll('.qa');
    preguntas.forEach(function (qa) {
      qa.addEventListener('toggle', function () {
        if (!qa.open) return;
        preguntas.forEach(function (otra) { if (otra !== qa) otra.open = false; });
      });
    });

    /* ---------- 6. Visor de la galería ---------- */
    var visor = document.getElementById('lightbox');
    var visorImg = document.getElementById('lbImg');
    var visorCap = document.getElementById('lbCap');
    var visorClose = document.getElementById('lbClose');
    var ultimoFoco = null;

    var abrirVisor = function (src, texto, origen) {
      ultimoFoco = origen || null;
      visorImg.src = src;
      visorImg.alt = texto;
      visorCap.textContent = texto;
      visor.hidden = false;
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(function () { visor.classList.add('abierto'); });
      visorClose.focus();
    };

    var cerrarVisor = function () {
      visor.classList.remove('abierto');
      document.body.style.overflow = '';
      window.setTimeout(function () {
        visor.hidden = true;
        visorImg.src = '';
        if (ultimoFoco) ultimoFoco.focus();
      }, 300);
    };

    document.querySelectorAll('.shot').forEach(function (shot) {
      shot.addEventListener('click', function () {
        abrirVisor(shot.dataset.full, shot.dataset.caption || '', shot);
      });
    });

    visorClose.addEventListener('click', cerrarVisor);
    visor.addEventListener('click', function (e) {
      if (e.target === visor || e.target.closest('.lb-fig') === null) cerrarVisor();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      if (!visor.hidden) cerrarVisor();
      if (links.classList.contains('abierto')) cerrarMenu();
    });

    /* ---------- 7. Año del pie ---------- */
    var anio = document.getElementById('anio');
    if (anio) anio.textContent = new Date().getFullYear();
  });
})();
