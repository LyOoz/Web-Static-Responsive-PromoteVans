/* =====================================================
   SMILE VAN VIP PHUKET — Conversion Tracking
   Google Ads · gtag.js
   ===================================================== */
(function () {
  'use strict';

  var CONVERSIONS = {
    line:     '',
    whatsapp: '',
    facebook: '',
    tel:      '',
  };

  function fireConversion(label, destUrl, openBlank) {
    var fired = false;

    function navigate() {
      if (fired) return;
      fired = true;
      if (!destUrl) return;
      if (openBlank) {
        window.open(destUrl, '_blank', 'noopener');
      } else {
        window.location.href = destUrl;
      }
    }

    if (typeof gtag === 'function') {
      gtag('event', 'conversion', {
        send_to: label,
        event_callback: navigate,
      });
      setTimeout(navigate, 800);
    } else {
      navigate();
    }
  }

  function attach(selector, conversionKey, options) {
    var label     = CONVERSIONS[conversionKey];
    var noRedirect = options && options.noRedirect;

    document.querySelectorAll(selector).forEach(function (el) {
      el.addEventListener('click', function (e) {
        var url       = el.getAttribute('href');
        var isBlank   = el.getAttribute('target') === '_blank';

        if (!noRedirect && url) {
          e.preventDefault();
          fireConversion(label, url, isBlank);
        } else {
          fireConversion(label, null, false);
        }
      });
    });
  }

  attach('.track-line',     'line');
  attach('.track-wa',       'whatsapp');
  attach('.track-fb',       'facebook');
  attach('.track-tel',      'tel',      { noRedirect: true });

})();
