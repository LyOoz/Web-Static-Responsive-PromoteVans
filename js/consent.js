/* =====================================================
   SMILE VAN VIP — Cookie Consent + Google Consent Mode v2
   Google Ads Policy Compliant
   PDPA Compliant (Thailand)
   ===================================================== */

'use strict';

(function () {

  /* ── Constants ── */
  var STORAGE_KEY      = 'smile_consent';
  var STORAGE_DATE_KEY = 'smile_consent_date';
  var EXPIRY_DAYS      = 180; // 6 months
  var AW_ID            = '';

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }

  gtag('consent', 'default', {
    'ad_storage':             'denied',
    'ad_user_data':           'denied',
    'ad_personalization':     'denied',
    'analytics_storage':      'denied',
    'functionality_storage':  'granted',   
    'security_storage':       'granted',  
    'wait_for_update':        2000,         
  });

  function getStored() {
    try {
      var raw  = localStorage.getItem(STORAGE_KEY);
      var date = localStorage.getItem(STORAGE_DATE_KEY);
      if (!raw || !date) return null;
      // check expiry
      var saved = new Date(date);
      var now   = new Date();
      var diff  = (now - saved) / (1000 * 60 * 60 * 24);
      if (diff > EXPIRY_DAYS) {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(STORAGE_DATE_KEY);
        return null;
      }
      return JSON.parse(raw);
    } catch (e) { return null; }
  }

  function saveConsent(obj) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
      localStorage.setItem(STORAGE_DATE_KEY, new Date().toISOString());
    } catch (e) {}
  }

  function applyConsent(prefs) {
    gtag('consent', 'update', {
      'ad_storage':         prefs.ads     ? 'granted' : 'denied',
      'ad_user_data':       prefs.ads     ? 'granted' : 'denied',
      'ad_personalization': prefs.ads     ? 'granted' : 'denied',
      'analytics_storage':  prefs.analytics ? 'granted' : 'denied',
    });
  }

  function show(el) { el && el.classList.add('show'); }
  function hide(el) { el && el.classList.remove('show'); }

  function initBanner() {
    var banner   = document.getElementById('consent-banner');
    var reopen   = document.getElementById('consent-reopen');
    var prefs    = document.getElementById('consent-prefs');

    if (!banner) return;

    var chkAnalytics = document.getElementById('consent-chk-analytics');
    var chkAds       = document.getElementById('consent-chk-ads');
    var btnAccept    = document.getElementById('consent-accept');
    var btnCustom    = document.getElementById('consent-custom');
    var btnSave      = document.getElementById('consent-save');
    var btnReject    = document.getElementById('consent-reject');
    var btnClose     = document.getElementById('consent-close');

    var stored = getStored();
    if (stored) {
      applyConsent(stored);
      return;
    }

    setTimeout(function () {
      show(banner);
    }, 1200);

    function closeBanner(showReopen) {
      hide(banner);
      if (showReopen) {
        setTimeout(function () { show(reopen); }, 400);
      }
    }

    btnAccept && btnAccept.addEventListener('click', function () {
      var decision = { analytics: true, ads: true };
      saveConsent(decision);
      applyConsent(decision);
      closeBanner(false); 
    });

    btnReject && btnReject.addEventListener('click', function () {
      var decision = { analytics: false, ads: false };
      saveConsent(decision);
      applyConsent(decision);
      closeBanner(false); 
    });

    btnCustom && btnCustom.addEventListener('click', function () {
      if (prefs) {
        var isOpen = prefs.classList.contains('open');
        prefs.classList.toggle('open', !isOpen);
        btnCustom.textContent = isOpen
          ? (btnCustom.dataset.labelClosed || 'ปรับแต่ง')
          : (btnCustom.dataset.labelOpen   || 'ซ่อน');
      }
    });

    btnSave && btnSave.addEventListener('click', function () {
      var decision = {
        analytics: chkAnalytics ? chkAnalytics.checked : false,
        ads:       chkAds       ? chkAds.checked       : false,
      };
      saveConsent(decision);
      applyConsent(decision);
      closeBanner(false); 
    });

    reopen && reopen.addEventListener('click', function () {
      hide(reopen);
      var s = getStored() || { analytics: false, ads: false };
      if (chkAnalytics) chkAnalytics.checked = s.analytics;
      if (chkAds)       chkAds.checked       = s.ads;
      show(banner);
      if (prefs) prefs.classList.add('open');
      if (btnCustom) btnCustom.textContent = btnCustom.dataset.labelOpen || 'ซ่อน';
    });

    btnClose && btnClose.addEventListener('click', function () {
      hide(banner);
      setTimeout(function () { show(reopen); }, 400);
    });
  }

  window.SmileConsent = {
    status: function () {
      var s = getStored();
      if (!s) { console.log('[SmileConsent] ยังไม่ได้ตัดสินใจ'); return null; }
      console.log('[SmileConsent]', JSON.stringify(s));
      console.log('  analytics:', s.analytics ? '✅ granted' : '❌ denied');
      console.log('  ads:      ', s.ads       ? '✅ granted' : '❌ denied');
      console.log('  date:     ', localStorage.getItem(STORAGE_DATE_KEY));
      return s;
    },
    reset: function () {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(STORAGE_DATE_KEY);
      console.log('[SmileConsent] reset — รีเฟรชหน้าเพื่อดู banner ใหม่');
    },
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBanner);
  } else {
    initBanner();
  }

})();
