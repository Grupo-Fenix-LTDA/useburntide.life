/* ====== Menu Mobile ====== */
(function () {
  var btn = document.querySelector('.menu-btn');
  var menu = document.querySelector('.mobile-menu');
  if (btn && menu) {
    btn.addEventListener('click', function () { menu.classList.toggle('open'); });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { menu.classList.remove('open'); });
    });
  }
})();
/* ====== Fim Menu Mobile ====== */

/* ====== Sombra do Header ====== */
(function () {
  var header = document.querySelector('.site-header');
  if (!header) return;
  window.addEventListener('scroll', function () {
    header.classList.toggle('scrolled', window.scrollY > 10);
  });
})();
/* ====== Fim Sombra do Header ====== */

/* ====== Contador Animado ====== */
(function () {
  var el = document.querySelector('[data-target]');
  if (!el) return;
  var target = parseInt(el.getAttribute('data-target'), 10);
  var started = false;
  function run() {
    if (started) return;
    started = true;
    var current = 0;
    var step = Math.ceil(target / 60);
    var timer = setInterval(function () {
      current += step;
      if (current >= target) { current = target; clearInterval(timer); }
      el.textContent = current.toLocaleString('en-US');
    }, 25);
  }
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) run(); });
  });
  obs.observe(el);
})();
/* ====== Fim Contador Animado ====== */

/* ====== Cronometro da Oferta ====== */
(function () {
  var total = 15 * 60;
  var heroTimer = document.getElementById('hero-timer');
  var minEls = document.querySelectorAll('[data-cd-min]');
  var secEls = document.querySelectorAll('[data-cd-sec]');
  function pad(n) { return n < 10 ? '0' + n : '' + n; }
  function tick() {
    var m = Math.floor(total / 60);
    var s = total % 60;
    if (heroTimer) heroTimer.textContent = pad(m) + ':' + pad(s);
    minEls.forEach(function (el) { el.textContent = pad(m); });
    secEls.forEach(function (el) { el.textContent = pad(s); });
    total = total > 0 ? total - 1 : 15 * 60;
  }
  tick();
  setInterval(tick, 1000);
})();
/* ====== Fim Cronometro da Oferta ====== */
