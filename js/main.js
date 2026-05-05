/* ===================================================
   SMILE VAN VIP PHUKET — main.js BY WATCHARAPOL (LyOoz)
   =================================================== */

'use strict';

/* ===================================================
   NAVBAR — scroll effect
   =================================================== */
(function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', function () {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });
})();

const links = document.querySelectorAll('.nav-links a');
const underline = document.querySelector('.nav-underline');

if (underline) {
  links.forEach(link => {
    link.addEventListener('mouseenter', (e) => {
      const rect = e.target.getBoundingClientRect();
      const parentRect = e.target.closest('.nav-links').getBoundingClientRect();
      underline.style.width = rect.width + 'px';
      underline.style.left = (rect.left - parentRect.left) + 'px';
    });
  });
}

/* ===================================================
   HAMBURGER MENU — mobile drawer
   =================================================== */
(function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.getElementById('nav-menu');
  const overlay   = document.getElementById('nav-overlay');
  if (!hamburger || !navMenu || !overlay) return;

  function openMenu() {
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    navMenu.classList.add('open');
    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    navMenu.classList.remove('open');
    overlay.classList.remove('show');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', function () {
    if (navMenu.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close on overlay click
  overlay.addEventListener('click', closeMenu);

  // Close when a nav link is clicked
  navMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      closeMenu();
    }
  });

  // Close if resized to desktop
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768 && navMenu.classList.contains('open')) {
      closeMenu();
    }
  });
})();


/* ===================================================
   GALLERY LIGHTBOX
   =================================================== */
(function initLightbox() {
  const lightbox  = document.getElementById('lightbox');
  const lbImg     = document.getElementById('lightbox-img');
  const lbClose   = document.getElementById('lightbox-close');
  const lbPrev    = document.getElementById('lightbox-prev');
  const lbNext    = document.getElementById('lightbox-next');
  const lbCounter = document.getElementById('lightbox-counter');

  if (!lightbox) return;

  const items = Array.from(document.querySelectorAll('.gallery-item img'));
  let currentIndex = 0;

  function showImage(index) {
    currentIndex = (index + items.length) % items.length;
    const img = items[currentIndex];
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    if (lbCounter) {
      lbCounter.textContent = (currentIndex + 1) + ' / ' + items.length;
    }
  }

  function openLightbox(index) {
    showImage(index);
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    lbImg.src = '';
  }

  // Click on gallery items
  document.querySelectorAll('.gallery-item').forEach(function (item, index) {
    item.addEventListener('click', function () {
      openLightbox(index);
    });
  });

  // Close button
  if (lbClose) lbClose.addEventListener('click', closeLightbox);

  // Prev / Next
  if (lbPrev) lbPrev.addEventListener('click', function () { showImage(currentIndex - 1); });
  if (lbNext) lbNext.addEventListener('click', function () { showImage(currentIndex + 1); });

  // Click outside image to close
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  // Keyboard navigation
  document.addEventListener('keydown', function (e) {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape')      closeLightbox();
    if (e.key === 'ArrowLeft')   showImage(currentIndex - 1);
    if (e.key === 'ArrowRight')  showImage(currentIndex + 1);
  });

  // Touch / swipe support
  var touchStartX = 0;
  var touchStartY = 0;

  lightbox.addEventListener('touchstart', function (e) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  lightbox.addEventListener('touchend', function (e) {
    var dx = e.changedTouches[0].clientX - touchStartX;
    var dy = e.changedTouches[0].clientY - touchStartY;

    // Only swipe if horizontal movement dominates
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
      if (dx < 0) {
        showImage(currentIndex + 1); // swipe left = next
      } else {
        showImage(currentIndex - 1); // swipe right = prev
      }
    }
  }, { passive: true });
})();


/* ===================================================
   SMOOTH SCROLL for anchor links
   =================================================== */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        var navH = document.querySelector('.navbar')
          ? document.querySelector('.navbar').offsetHeight
          : 0;
        var top = target.getBoundingClientRect().top + window.scrollY - navH - 8;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });
})();


/* ===================================================
   SCROLL-TO-TOP BUTTON
   =================================================== */
(function initScrollTop() {
  var btn = document.createElement('button');
  btn.className = 'scroll-top';
  btn.innerHTML = '&#8593;';
  btn.setAttribute('aria-label', 'กลับขึ้นด้านบน');
  document.body.appendChild(btn);

  window.addEventListener('scroll', function () {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();



/* ===================================================
   INTERSECTION OBSERVER — fade-in on scroll
   =================================================== */
(function initFadeIn() {
  if (!('IntersectionObserver' in window)) return;

  var style = document.createElement('style');
  style.textContent = [
    '.fade-in { opacity: 0; transform: translateY(24px); transition: opacity 0.55s ease, transform 0.55s ease; }',
    '.fade-in.visible { opacity: 1; transform: none; }'
  ].join('');
  document.head.appendChild(style);

  var targets = document.querySelectorAll('.feat-card, .gallery-item, .section-header, .feat-about, .review-card , .contact-info');
  targets.forEach(function (el, i) {
    el.classList.add('fade-in');
    el.style.transitionDelay = (i % 4) * 0.08 + 's';
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(function (el) { observer.observe(el); });
})();

const slides = document.querySelectorAll('.slide');
let i = 0;

/* ===================================================
   slider - hero
   =================================================== */

setInterval(() => {
  slides[i].classList.remove('active');
  i = (i + 1) % slides.length;
  slides[i].classList.add('active');
}, 4000);

/* ===================================================
   revivewsslider
   =================================================== */

const track = document.querySelector('.review-track');
const cards = document.querySelectorAll('.review-card');

cards.forEach(card => {
  track.appendChild(card.cloneNode(true));
});

const totalWidth = track.scrollWidth / 2;

track.style.setProperty('--scroll-width', `-${totalWidth}px`);

/* ===================================================
   fab
   =================================================== */



const fab = document.querySelector('.fab');
const toggle = document.getElementById('fab-toggle');

toggle.addEventListener('click', () => {
  fab.classList.toggle('open');

  if (fab.classList.contains('open')) {
    toggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  } else {
    toggle.innerHTML = '<i class="fa-solid fa-comment-dots open-icon"></i>';
  }
});