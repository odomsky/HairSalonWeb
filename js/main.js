/* ============================================================
   Veronika Štogrová Hair & Braids: Main JS
   ============================================================ */

'use strict';

/* --- DOM Ready --- */
document.addEventListener('DOMContentLoaded', () => {
  initNavScroll();
  initHamburger();
  initSmoothScroll();
  initScrollAnimations();
  initActiveNavHighlight();
  initFAQ();
  initFormSubmit();
  initI18n();
});

/* ============================================================
   1. NAV: Darken on scroll
   ============================================================ */
function initNavScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // run once on load
}

/* ============================================================
   2. HAMBURGER MENU
   ============================================================ */
function initHamburger() {
  const hamburger    = document.querySelector('.hamburger');
  const mobileNav    = document.querySelector('.mobile-nav');
  const overlay      = document.querySelector('.mobile-overlay');
  const mobileLinks  = document.querySelectorAll('.mobile-nav .nav-link');

  if (!hamburger || !mobileNav) return;

  const openMenu = () => {
    hamburger.classList.add('open');
    mobileNav.classList.add('open');
    overlay && overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    hamburger.classList.remove('open');
    mobileNav.classList.remove('open');
    overlay && overlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  hamburger.addEventListener('click', () => {
    if (hamburger.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  overlay && overlay.addEventListener('click', closeMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });
}

/* ============================================================
   3. SMOOTH SCROLLING
   ============================================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();

      const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 72;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight;

      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ============================================================
   4. SCROLL ANIMATIONS (IntersectionObserver)
   ============================================================ */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');

  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Stagger delay for sibling elements
        const siblings = entry.target.parentElement
          ? [...entry.target.parentElement.children].filter(el =>
              el.classList.contains('fade-in') ||
              el.classList.contains('fade-in-left') ||
              el.classList.contains('fade-in-right')
            )
          : [];
        const siblingIndex = siblings.indexOf(entry.target);
        const delay = siblingIndex >= 0 ? siblingIndex * 100 : 0;

        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);

        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -60px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

/* ============================================================
   5. ACTIVE NAV HIGHLIGHT on scroll
   ============================================================ */
function initActiveNavHighlight() {
  const sections  = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-link[href^="#"], .mobile-nav .nav-link[href^="#"]');
  const navHeight = 80;

  const setActive = () => {
    const scrollPos = window.scrollY + navHeight + 10;

    let current = '';
    sections.forEach(section => {
      if (scrollPos >= section.offsetTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href === `#${current}`) {
        link.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', setActive, { passive: true });
  setActive();
}

/* ============================================================
   6. FAQ ACCORDION
   ============================================================ */
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all
      faqItems.forEach(i => i.classList.remove('open'));

      // Toggle clicked
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
}

/* ============================================================
   7. CONTACT FORM (simple validation + feedback)
   ============================================================ */
function initFormSubmit() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name    = form.querySelector('#fname');
    const email   = form.querySelector('#femail');
    const message = form.querySelector('#fmessage');
    const btn     = form.querySelector('.form-submit');

    if (!name.value.trim() || !message.value.trim()) {
      showFormFeedback(form, typeof getT === 'function' ? getT('form_err_fields') : 'Prosím vyplňte jméno a zprávu.', 'error');
      return;
    }

    if (email.value.trim() && !isValidEmail(email.value)) {
      showFormFeedback(form, typeof getT === 'function' ? getT('form_err_email') : 'Zadejte prosím platnou e-mailovou adresu.', 'error');
      return;
    }

    // The site has no backend: copy the message and open an Instagram DM to @revu_braidart.
    const text = name.value.trim()
      + (email.value.trim() ? ' (' + email.value.trim() + ')' : '')
      + '\n\n' + message.value.trim();
    const copied = (navigator.clipboard && navigator.clipboard.writeText)
      ? navigator.clipboard.writeText(text)
      : Promise.reject(new Error('clipboard unavailable'));
    window.open('https://ig.me/m/revu_braidart', '_blank', 'noopener');

    copied.then(
      () => showFormFeedback(form, typeof getT === 'function' ? getT('form_ig_copied') : 'Zprávu jsem zkopírovala. Na Instagramu ji stačí vložit a odeslat.', 'success'),
      () => showFormFeedback(form, typeof getT === 'function' ? getT('form_ig_manual') : 'Otevírám Instagram. Zprávu mi tam prosím pošlete.', 'success')
    );
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showFormFeedback(form, message, type) {
  let feedback = form.querySelector('.form-feedback');
  if (!feedback) {
    feedback = document.createElement('div');
    feedback.className = 'form-feedback';
    form.appendChild(feedback);
  }
  feedback.textContent = message;
  feedback.style.cssText = `
    margin-top: 14px;
    padding: 12px 18px;
    border-radius: 8px;
    font-size: 0.92rem;
    font-weight: 700;
    background: ${type === 'success' ? 'rgba(46,200,120,0.15)' : 'rgba(220,60,60,0.15)'};
    border: 1px solid ${type === 'success' ? 'rgba(46,200,120,0.35)' : 'rgba(220,60,60,0.35)'};
    color: ${type === 'success' ? '#4CE89A' : '#FF7B7B'};
  `;

  if (type === 'success') {
    setTimeout(() => {
      feedback.style.opacity = '0';
      setTimeout(() => feedback.remove(), 600);
    }, 4000);
  }
}
