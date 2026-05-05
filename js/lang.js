/* ===================================================
   SMILE VAN VIP PHUKET - LANGUAGE SWITCH 
   =================================================== */
(function () {

  const buttons = document.querySelectorAll('.lang-btn');
  if (!buttons.length) return;

  let currentLang = localStorage.getItem('lang') || 'th';

  const translations = {

    th: {
      html_lang: 'th',
      page_title: 'บริการให้เช่ารถตู้ภูเก็ต พร้อมคนขับ',
      meta_desc: 'บริการเช่ารถตู้ภูเก็ต VIP พร้อมคนขับมืออาชีพ รับ-ส่งสนามบิน ทัวร์ท่องเที่ยว ราคาดี บริการ 24 ชั่วโมง',

      /* TOP BAR */
      topbar_left: 'SMILE VAN VIP PHUKET.COM – บริการเช่าเหมา รับส่ง สนามบิน ด้วยรถตู้ วีไอพี',

      /* NAVBAR */
      nav_services: 'บริการ',
      nav_gallery: 'ลูกค้าของเรา',
      nav_reviews: 'รีวิวลูกค้า',
      nav_contact: 'ติดต่อ',
      hamburger_label: 'เปิดเมนู',

      /* HERO */
      hero_h1: 'บริการเช่ารถตู้ VIP <span class="accent">ภูเก็ต</span><br>พร้อมคนขับมืออาชีพ',
      hero_desc: 'รับ-ส่ง สนามบิน · ทัวร์ · ท่องเที่ยว · งานกิจกรรม<br>รถ VIP สะอาด สะดวก ปลอดภัย ราคาดี',
      btn_line: 'ติดต่อผ่าน LINE',
      btn_call: '094-580-0128',
      btn_whatsapp: 'WhatsApp',
      stat1_label: 'ลูกค้าพึงพอใจ',
      stat2_label: 'พร้อมให้บริการ',
      stat3_label: 'ปลอดภัย',

      /* FEATURES */
      feat_section_tag: 'SMILEVANVIPPHUKET',
      feat_section_h2: 'บริการของเรา',
      feat_about_h3: 'เราคือผู้ให้บริการรถตู้ VIP',
      feat_about_p: 'สวัสดีครับ เรายินดีให้บริการเพราะเราคือผู้นำบริการให้ <br><strong>เช่ารถตู้ VIP 8-12 ที่นั่ง</strong> รถตู้รุ่นใหม่ นั่งสบาย พร้อมคนขับ สุภาพ เราบริการทั่วประเทศ รถใหม่ สะอาด ปลอดภัย สิ่งอำนวยความสะดวกครบครัน จดทะเบียนถูกต้องตามกฏหมาย บริการนำเที่ยวตามสถานที่สำคัญต่างๆ เช่น ป่าตอง หาดไม้ขาว ชมเครื่องบิน แหลมพรหมเทพ แหลมกระทิง วัดฉลอง ชมวิวหาด ท่องเที่ยวในเมือง ดูสถาปัตยกรรมชิโนโปรตุกีส เป็นต้น',
      feat_img_alt: 'รถตู้ VIP ภูเก็ต',
      card1_h3: 'รถ VIP พรีเมี่ยม',
      card1_p: 'รถตู้ VIP ทันสมัย สะอาด นั่งสบาย ระบบแอร์เย็นฉ่ำ รองรับทุกกลุ่ม',
      card2_h3: 'คนขับมืออาชีพ',
      card2_p: 'คนขับประสบการณ์สูง ใจดี รู้เส้นทางภูเก็ตเป็นอย่างดี มีใบขับขี่ถูกต้อง',
      card3_h3: 'ตรงเวลาทุกครั้ง',
      card3_p: 'ให้บริการตรงเวลา ติดตามเที่ยวบิน ไม่ทิ้งลูกค้า รับประกันความพึงพอใจ',
      card4_h3: 'ราคาคุ้มค่า',
      card4_p: 'ราคาโปร่งใส ไม่มีค่าใช้จ่ายแอบแฝง คุ้มค่าที่สุดในภูเก็ต',

      /* GALLERY */
      gallery_h2: 'รูปภาพลูกค้าของเรา',
      lightbox_label: 'ดูรูปขนาดใหญ่',
      lightbox_close_label: 'ปิด',
      lightbox_prev_label: 'ก่อนหน้า',
      lightbox_next_label: 'ถัดไป',

      /* REVIEWS */
      reviews_h2: 'รีวิวจากลูกค้าของเรา',

      /* CONTACT */
      contact_section_tag: 'SMILEVANVIPPHUKET',
      contact_h2: 'ติดต่อเรา',
      contact_h3: 'พร้อมให้บริการ 24 ชั่วโมง',
      contact_p: 'ติดต่อจองรถตู้ VIP ภูเก็ตได้ตลอดเวลา<br>เราพร้อมดูแลคุณทุกการเดินทาง',
      contact_address: '94/19 ม.1 ต.สาคู อ.ถลาง จ.ภูเก็ต',

      /* PRIVACY POLICY */
      
      /* FOOTER */
      footer_brand_p: 'บริการให้เช่ารถตู้ VIP 8-12 ที่นั่งพร้อมคนขับมืออาชีพที่มากประสบการณ์ ในจังหวัดภูเก็ตและต่างจังหวัด รถสะอาด ใหม่เอี่ยม ความปลอดภัยสูง พร้อมสิ่งอำนวยความสะดวกครบครัน ในราคาเป็นกันเอง',
      footer_contact_h4: 'ติดต่อเรา',
      footer_services_h4: 'บริการของเรา',
      footer_address: '94/19 ม.1 ต.สาคู อ.ถลาง จ.ภูเก็ต',
      footer_link1: 'รับ-ส่งสนามบินภูเก็ต',
      footer_link2: 'ทัวร์รถตู้ภูเก็ต',
      footer_link3: 'เช่ารถตู้รายวัน',
      footer_link4: 'รับจ้างเหมารถ',
      footer_link5: 'รับส่งโรงแรม',

      /* PRIVACY PAGE */
      privacy_section_tag: 'SMILEVANVIPPHUKET',
      privacy_h2: 'นโยบายความเป็นส่วนตัว (Privacy Policy)',
      privacy_date: '<strong>อัปเดตล่าสุด:</strong> 5 พฤษภาคม 2026',
      privacy_h3_1: '1. ข้อมูลที่เราเก็บรวบรวม',
      privacy_p1: 'เราอาจเก็บข้อมูล เช่น ชื่อ เบอร์โทรศัพท์ อีเมล หรือข้อมูลการติดต่ออื่น ๆ เพื่อใช้ในการให้บริการ และติดต่อกลับลูกค้า',
      privacy_h3_2: '2. การใช้ข้อมูล',
      privacy_p2: 'ข้อมูลของคุณจะถูกนำไปใช้เพื่อการจองรถตู้ การให้บริการ และการปรับปรุงคุณภาพเว็บไซต์ เพื่อให้คุณได้รับประสบการณ์ที่ดีที่สุด',
      privacy_h3_3: '3. การเปิดเผยข้อมูล',
      privacy_p3: 'เราจะไม่เปิดเผยข้อมูลของคุณให้บุคคลภายนอก ยกเว้นในกรณีที่จำเป็นตามกฎหมาย หรือเพื่อให้บริการตามคำขอของคุณ',
      privacy_h3_4: '4. การใช้คุกกี้ (Cookies)',
      privacy_p4: 'เว็บไซต์นี้อาจใช้คุกกี้เพื่อวิเคราะห์พฤติกรรมผู้ใช้งาน และปรับปรุงประสบการณ์การใช้งานให้ดียิ่งขึ้น',
      privacy_h3_5: '5. การติดต่อ',
      privacy_p5: 'หากมีคำถามเกี่ยวกับนโยบายความเป็นส่วนตัว สามารถติดต่อเราได้ผ่านช่องทางที่ระบุในเว็บไซต์',

      /* COOKIE CONSENT BANNER */
      consent_banner_aria:     'ตั้งค่าคุกกี้',
      consent_title:           'เว็บไซต์นี้ใช้คุกกี้',
      consent_subtitle:        'โปรดเลือกการตั้งค่าที่คุณต้องการ',
      consent_desc:            'เราใช้คุกกี้เพื่อวิเคราะห์การใช้งานเว็บไซต์และแสดงโฆษณาที่เกี่ยวข้องกับคุณ คุณสามารถเลือกยอมรับหรือปฏิเสธได้ อ่านเพิ่มเติมใน',
      consent_privacy_link:    'นโยบายความเป็นส่วนตัว',
      consent_necessary_label: 'คุกกี้ที่จำเป็น',
      consent_necessary_desc:  'ภาษา, session — เว็บไซต์ทำงานไม่ได้หากปิด',
      consent_required_pill:   'จำเป็น',
      consent_analytics_label: 'Analytics (Google Analytics)',
      consent_analytics_desc:  'วิเคราะห์จำนวนผู้เข้าชม, หน้าที่นิยม — ไม่ระบุตัวตน',
      consent_ads_label:       'โฆษณา (Google Ads)',
      consent_ads_desc:        'วัดผล conversion, โฆษณา remarketing — Google Ads',
      consent_save:            'บันทึกการตั้งค่า',
      consent_accept:          'ยอมรับทั้งหมด',
      consent_custom:          'ปรับแต่ง',
      consent_custom_hide:     'ซ่อน',
      consent_reject:          'ปฏิเสธ',
      consent_reopen:          'ตั้งค่าคุกกี้',
      consent_close_aria:      'ปิด',
    },

    en: {
      html_lang: 'en',
      page_title: 'Phuket VIP Van Rental Service with Driver',
      meta_desc: 'Phuket VIP van rental with professional driver. Airport transfer, tours, travel at great price. 24-hour service.',

      /* TOP BAR */
      topbar_left: 'SMILE VAN VIP PHUKET.COM – Charter, Airport Transfer & VIP Van Service',

      /* NAVBAR */
      nav_services: 'Services',
      nav_gallery: 'Our Clients',
      nav_reviews: 'Reviews',
      nav_contact: 'Contact',
      hamburger_label: 'Open menu',

      /* HERO */
      hero_h1: 'VIP Van Rental in <span class="accent">Phuket</span><br>with Professional Drivers',
      hero_desc: 'Airport Transfer · Tours · Travel · Events<br>Clean, Comfortable, Safe VIP Van at Great Price',
      btn_line: 'Contact via LINE',
      btn_call: '094-580-0128',
      btn_whatsapp: 'WhatsApp',
      stat1_label: 'Happy Clients',
      stat2_label: 'Available',
      stat3_label: 'Safe',

      /* FEATURES */
      feat_section_tag: 'SMILEVANVIPPHUKET',
      feat_section_h2: 'Our Services',
      feat_about_h3: 'Your Trusted VIP Van Provider',
      feat_about_p: 'Hello! We are proud to be the leading provider of <br><strong>VIP Van Rental for 8–12 passengers</strong>. Our fleet is modern, clean and comfortable, driven by polite, experienced chauffeurs. We operate across Thailand with fully registered vehicles and offer guided tours to top Phuket destinations such as Patong, Mai Khao Beach, Laem Phromthep, Wat Chalong, Sino-Portuguese Architecture, and more.',
      feat_img_alt: 'Phuket VIP Van',
      card1_h3: 'Premium VIP Van',
      card1_p: 'Modern, spotless VIP vans with powerful air-con, suitable for all group types.',
      card2_h3: 'Professional Drivers',
      card2_p: 'Experienced, friendly drivers with excellent Phuket route knowledge and valid licenses.',
      card3_h3: 'Always On Time',
      card3_p: 'Punctual service with flight tracking — we never leave a client behind. Satisfaction guaranteed.',
      card4_h3: 'Great Value',
      card4_p: 'Transparent pricing with no hidden fees. The best value VIP van service in Phuket.',

      /* GALLERY */
      gallery_h2: 'Photos from Our Clients',
      lightbox_label: 'View full image',
      lightbox_close_label: 'Close',
      lightbox_prev_label: 'Previous',
      lightbox_next_label: 'Next',

      /* REVIEWS */
      reviews_h2: 'Customer Reviews',

      /* CONTACT */
      contact_section_tag: 'SMILEVANVIPPHUKET',
      contact_h2: 'Contact Us',
      contact_h3: 'Available 24 Hours a Day',
      contact_p: 'Book your Phuket VIP van anytime.<br>We are ready to take care of every journey.',
      contact_address: '94/19 Moo 1, Sakhu, Thalang, Phuket',

      /* FOOTER */
      footer_brand_p: 'VIP van rental service for 8–12 passengers with experienced professional drivers, operating in Phuket and nationwide. Clean, brand-new vehicles with top safety standards and full amenities at friendly prices.',
      footer_contact_h4: 'Contact Us',
      footer_services_h4: 'Our Services',
      footer_address: '94/19 Moo 1, Sakhu, Thalang, Phuket',
      footer_link1: 'Phuket Airport Transfer',
      footer_link2: 'Phuket Van Tours',
      footer_link3: 'Daily Van Rental',
      footer_link4: 'Charter Service',
      footer_link5: 'Hotel Transfers',

      /* PRIVACY PAGE */
      privacy_section_tag: 'SMILEVANVIPPHUKET',
      privacy_h2: 'Privacy Policy',
      privacy_date: '<strong>Last Updated:</strong> May 5, 2026',
      privacy_h3_1: '1. Information We Collect',
      privacy_p1: 'We may collect information such as your name, phone number, email address, or other contact details in order to provide our services and follow up with customers.',
      privacy_h3_2: '2. Use of Information',
      privacy_p2: 'Your information will be used for van booking, service delivery, and improving the quality of our website so that you receive the best possible experience.',
      privacy_h3_3: '3. Disclosure of Information',
      privacy_p3: 'We will not disclose your information to third parties, except where required by law or to fulfil your service request.',
      privacy_h3_4: '4. Use of Cookies',
      privacy_p4: 'This website may use cookies to analyse user behaviour and improve the browsing experience.',
      privacy_h3_5: '5. Contact',
      privacy_p5: 'If you have any questions about this Privacy Policy, please contact us through the channels listed on our website.',

      /* COOKIE CONSENT BANNER */
      consent_banner_aria:     'Cookie Settings',
      consent_title:           'This website uses cookies',
      consent_subtitle:        'Please choose your preferred settings',
      consent_desc:            'We use cookies to analyse website usage and show you relevant ads. You can choose to accept or reject. Read more in our',
      consent_privacy_link:    'Privacy Policy',
      consent_necessary_label: 'Essential Cookies',
      consent_necessary_desc:  'Language, session — required for the website to function',
      consent_required_pill:   'Required',
      consent_analytics_label: 'Analytics (Google Analytics)',
      consent_analytics_desc:  'Analyse visitor count, popular pages — anonymous data only',
      consent_ads_label:       'Advertising (Google Ads)',
      consent_ads_desc:        'Measure conversions, remarketing ads — Google Ads',
      consent_save:            'Save Settings',
      consent_accept:          'Accept All',
      consent_custom:          'Customise',
      consent_custom_hide:     'Hide',
      consent_reject:          'Reject',
      consent_reopen:          'Cookie Settings',
      consent_close_aria:      'Close',
    }
  };

  function applyLang(lang) {
    const t = translations[lang];
    if (!t) return;

    document.documentElement.lang = t.html_lang;

    document.title = t.page_title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t.meta_desc);

    const topLeft = document.querySelector('.top-left .top-link');
    if (topLeft) topLeft.textContent = t.topbar_left;

    const navLinks = document.querySelectorAll('.nav-links a');
    const navKeys = ['nav_services', 'nav_gallery', 'nav_reviews', 'nav_contact'];
    navLinks.forEach((a, i) => {
      if (navKeys[i]) a.textContent = t[navKeys[i]];
    });

    const hamburger = document.getElementById('hamburger');
    if (hamburger) hamburger.setAttribute('aria-label', t.hamburger_label);

    const heroH1 = document.querySelector('.hero h1');
    if (heroH1) heroH1.innerHTML = t.hero_h1;

    const heroDesc = document.querySelector('.hero-desc');
    if (heroDesc) heroDesc.innerHTML = t.hero_desc;

    const ctaBtns = document.querySelectorAll('.cta-group .btn');
    if (ctaBtns[0]) ctaBtns[0].childNodes[ctaBtns[0].childNodes.length - 1].textContent = ' ' + t.btn_line;
    if (ctaBtns[1]) ctaBtns[1].childNodes[ctaBtns[1].childNodes.length - 1].textContent = ' ' + t.btn_call;
    if (ctaBtns[2]) ctaBtns[2].childNodes[ctaBtns[2].childNodes.length - 1].textContent = ' ' + t.btn_whatsapp;

    const statSpans = document.querySelectorAll('.hero-stats .stat span');
    if (statSpans[0]) statSpans[0].textContent = t.stat1_label;
    if (statSpans[1]) statSpans[1].textContent = t.stat2_label;
    if (statSpans[2]) statSpans[2].textContent = t.stat3_label;

    const featTag = document.querySelector('#features .section-tag');
    if (featTag) featTag.textContent = t.feat_section_tag;

    const featH2 = document.querySelector('#features .section-header h2');
    if (featH2) featH2.textContent = t.feat_section_h2;

    const featAboutH3 = document.querySelector('.feat-text h3');
    if (featAboutH3) featAboutH3.textContent = t.feat_about_h3;

    const featAboutP = document.querySelector('.feat-text p');
    if (featAboutP) featAboutP.innerHTML = t.feat_about_p;

    const featImg = document.querySelector('.feat-image img');
    if (featImg) featImg.alt = t.feat_img_alt;

    const featCards = document.querySelectorAll('.feat-card');
    const cardKeys = [
      ['card1_h3', 'card1_p'],
      ['card2_h3', 'card2_p'],
      ['card3_h3', 'card3_p'],
      ['card4_h3', 'card4_p'],
    ];
    featCards.forEach((card, i) => {
      const h3 = card.querySelector('h3');
      const p  = card.querySelector('p');
      if (h3 && cardKeys[i]) h3.textContent = t[cardKeys[i][0]];
      if (p  && cardKeys[i]) p.textContent  = t[cardKeys[i][1]];
    });

    const galleryH2 = document.querySelector('#gallery .section-header h2');
    if (galleryH2) galleryH2.textContent = t.gallery_h2;

    const lightbox = document.getElementById('lightbox');
    if (lightbox) lightbox.setAttribute('aria-label', t.lightbox_label);

    const lbClose = document.getElementById('lightbox-close');
    if (lbClose) lbClose.setAttribute('aria-label', t.lightbox_close_label);

    const lbPrev = document.getElementById('lightbox-prev');
    if (lbPrev) lbPrev.setAttribute('aria-label', t.lightbox_prev_label);

    const lbNext = document.getElementById('lightbox-next');
    if (lbNext) lbNext.setAttribute('aria-label', t.lightbox_next_label);

    const reviewsH2 = document.querySelector('#reviews .section-header h2');
    if (reviewsH2) reviewsH2.textContent = t.reviews_h2;

    const contactTag = document.querySelector('#contact .section-tag');
    if (contactTag) contactTag.textContent = t.contact_section_tag;

    const contactH2 = document.querySelector('#contact .section-header h2');
    if (contactH2) contactH2.textContent = t.contact_h2;

    const contactH3 = document.querySelector('.contact-info h3');
    if (contactH3) contactH3.textContent = t.contact_h3;

    const contactP = document.querySelector('.contact-info > p');
    if (contactP) contactP.innerHTML = t.contact_p;

    const contactAddr = document.querySelector('.contact-item .fa-location-dot + span, .contact-item:last-of-type span');
    if (contactAddr) contactAddr.textContent = t.contact_address;

    const footerBrandP = document.querySelector('.footer-brand p');
    if (footerBrandP) footerBrandP.textContent = t.footer_brand_p;

    const footerCols = document.querySelectorAll('.footer-col:not(.footer-brand) h4');
    if (footerCols[0]) footerCols[0].textContent = t.footer_contact_h4;
    if (footerCols[1]) footerCols[1].textContent = t.footer_services_h4;

    const footerAddr = document.querySelector('.footer-info .fa-location-dot');
    if (footerAddr && footerAddr.nextSibling) {
      const addrLink = footerAddr.closest('li').querySelector('a');
      if (addrLink) addrLink.textContent = t.footer_address;
    }

    const footerServiceLinks = document.querySelectorAll('.footer-links li a');
    const footerLinkKeys = ['footer_link1', 'footer_link2', 'footer_link3', 'footer_link4', 'footer_link5'];
    footerServiceLinks.forEach((a, i) => {
      if (footerLinkKeys[i]) a.textContent = t[footerLinkKeys[i]];
    });


    const privacyTag = document.querySelector('#privacy .section-tag');
    if (privacyTag) privacyTag.textContent = t.privacy_section_tag;

    const privacyH2 = document.querySelector('#privacy .section-header h2');
    if (privacyH2) privacyH2.textContent = t.privacy_h2;

    const privacyDate = document.querySelector('.privacy-date');
    if (privacyDate) privacyDate.innerHTML = t.privacy_date;

    const privacyH3s = document.querySelectorAll('.privacy-content h3');
    const privacyPs  = document.querySelectorAll('.privacy-content p:not(.privacy-date)');
    const privacyH3Keys = ['privacy_h3_1','privacy_h3_2','privacy_h3_3','privacy_h3_4','privacy_h3_5'];
    const privacyPKeys  = ['privacy_p1','privacy_p2','privacy_p3','privacy_p4','privacy_p5'];
    privacyH3s.forEach((el, i) => { if (privacyH3Keys[i] && t[privacyH3Keys[i]]) el.textContent = t[privacyH3Keys[i]]; });
    privacyPs.forEach((el, i)  => { if (privacyPKeys[i]  && t[privacyPKeys[i]])  el.textContent = t[privacyPKeys[i]];  });

    const consentBanner = document.getElementById('consent-banner');
    if (consentBanner && t.consent_banner_aria) {
      consentBanner.setAttribute('aria-label', t.consent_banner_aria);

      const consentTitle = consentBanner.querySelector('.consent-header-text h3');
      if (consentTitle) consentTitle.textContent = t.consent_title;

      const consentSubtitle = consentBanner.querySelector('.consent-header-text p');
      if (consentSubtitle) consentSubtitle.textContent = t.consent_subtitle;

      const consentDescEl = consentBanner.querySelector('.consent-desc');
      if (consentDescEl) {
        const privLink = consentDescEl.querySelector('a');
        consentDescEl.childNodes[0].textContent = t.consent_desc + ' ';
        if (privLink) privLink.textContent = t.consent_privacy_link;
      }

      const toggleLabels = consentBanner.querySelectorAll('.consent-toggle-label');
      const toggleDescs  = consentBanner.querySelectorAll('.consent-toggle-desc');
      if (toggleLabels[0]) toggleLabels[0].textContent = t.consent_necessary_label;
      if (toggleDescs[0])  toggleDescs[0].textContent  = t.consent_necessary_desc;
      if (toggleLabels[1]) toggleLabels[1].textContent = t.consent_analytics_label;
      if (toggleDescs[1])  toggleDescs[1].textContent  = t.consent_analytics_desc;
      if (toggleLabels[2]) toggleLabels[2].textContent = t.consent_ads_label;
      if (toggleDescs[2])  toggleDescs[2].textContent  = t.consent_ads_desc;

      const requiredPill = consentBanner.querySelector('.consent-required');
      if (requiredPill) requiredPill.textContent = t.consent_required_pill;

      const btnSave   = document.getElementById('consent-save');
      const btnAccept = document.getElementById('consent-accept');
      const btnCustom = document.getElementById('consent-custom');
      const btnReject = document.getElementById('consent-reject');
      const prefs     = document.getElementById('consent-prefs');

      if (btnSave)   { btnSave.innerHTML   = '<i class="fa-solid fa-check"></i> ' + t.consent_save; }
      if (btnAccept) { btnAccept.innerHTML = '<i class="fa-solid fa-check"></i> ' + t.consent_accept; }
      if (btnReject) { btnReject.textContent = t.consent_reject; }
      if (btnCustom) {
        const isOpen = prefs && prefs.classList.contains('open');
        btnCustom.textContent = isOpen ? t.consent_custom_hide : t.consent_custom;
        btnCustom.dataset.labelOpen   = t.consent_custom_hide;
        btnCustom.dataset.labelClosed = t.consent_custom;
      }
      const btnCloseEl = document.getElementById('consent-close');
      if (btnCloseEl && t.consent_close_aria) {
        btnCloseEl.setAttribute('aria-label', t.consent_close_aria);
        btnCloseEl.setAttribute('title', t.consent_close_aria);
      }
    }

    const consentReopen = document.getElementById('consent-reopen');
    if (consentReopen && t.consent_reopen) {
      const icon = consentReopen.querySelector('.reopen-icon');
      consentReopen.textContent = ' ' + t.consent_reopen;
      if (icon) consentReopen.prepend(icon);
      consentReopen.setAttribute('aria-label', t.consent_reopen);
    }

    buttons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    localStorage.setItem('lang', lang);
  }

  applyLang(currentLang);

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetLang = btn.dataset.lang;
      if (window.SmilePreloader && typeof window.SmilePreloader.showLang === 'function') {
        window.SmilePreloader.showLang(targetLang, function () {
          applyLang(targetLang);
        });
      } else {
        applyLang(targetLang);
      }
    });
  });

})();