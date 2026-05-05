/* =====================================================
   SMILE VAN VIP PHUKET — PRELOADER  
   ===================================================== */
'use strict';

(function () {

  const preloader = document.getElementById('preloader');
  const bar       = document.getElementById('preloader-bar');
  const pct       = document.getElementById('preloader-pct');

  if (!preloader) return;

  let progress  = 0;
  let rafId     = null;
  let done      = false;
  let pageReady = false;

  function tick() {
    if (done) return;

    const target   = pageReady ? 100 : 88;          
    const speed    = pageReady
      ? 2.8                                           
      : progress < 40 ? 1.6 : progress < 75 ? 0.9 : 0.35; 

    progress = Math.min(progress + speed, target);

    const rounded = Math.round(progress);
    if (bar)  bar.style.width   = rounded + '%';
    if (pct)  pct.textContent   = rounded + '%';

    if (progress < 100) {
      rafId = requestAnimationFrame(tick);
    } else {
      hidePreloader();
    }
  }

  function hidePreloader() {
    if (done) return;
    done = true;
    cancelAnimationFrame(rafId);

    setTimeout(function () {
      preloader.classList.add('fade-out');
      document.body.classList.remove('is-loading');

      preloader.addEventListener('transitionend', function handler() {
        preloader.removeEventListener('transitionend', handler);
        preloader.remove();
      });
    }, 600);
  }

  requestAnimationFrame(tick);

  window.addEventListener('load', function () {
    pageReady = true;
  });

  setTimeout(function () {
    pageReady = true;
    progress  = 95;
  }, 5000);


  /* ══════════════════════════════════════════════
     LANGUAGE-SWITCH PRELOADER
  ══════════════════════════════════════════════ */
  const langOverlay = document.getElementById('lang-preloader');
  const langFlag    = document.getElementById('lang-flag-img');
  const langLabel   = document.getElementById('lang-label-text');
  if (!langOverlay) return;

  const FLAG_SRC = {
    th: 'assets/th.png',
    en: 'assets/en_us.png',
  };
  const LANG_LABEL = {
    th: 'กำลังเปลี่ยนภาษา',
    en: 'Switching Language',
  };

  window.SmilePreloader = {

    showLang: function (targetLang, callback) {
      if (langFlag)  langFlag.src         = FLAG_SRC[targetLang]  || FLAG_SRC.th;
      if (langLabel) langLabel.textContent = LANG_LABEL[targetLang] || LANG_LABEL.th;

      langOverlay.classList.add('show');

      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          if (typeof callback === 'function') callback();

          /* hide after a polished delay */
          setTimeout(function () {
            langOverlay.classList.remove('show');
          }, 520);
        });
      });
    }
  };

})();
