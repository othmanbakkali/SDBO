/**
 * Shared site behaviors (vanilla).
 * - Mobile navigation toggle for the header menu.
 */
(function () {
  'use strict';

  function initMobileNav() {
    var navToggle = document.getElementById('navToggle');
    var mainNav = document.getElementById('mainNav');
    if (!navToggle || !mainNav) return;

    navToggle.addEventListener('click', function () {
      var expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      mainNav.classList.toggle('is-open');
    });

    // Close menu when a link is clicked (mobile UX)
    mainNav.addEventListener('click', function (e) {
      var target = e.target;
      if (!(target instanceof Element)) return;
      if (target.tagName.toLowerCase() !== 'a') return;
      navToggle.setAttribute('aria-expanded', 'false');
      mainNav.classList.remove('is-open');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
      var isOpen = mainNav.classList.contains('is-open');
      if (!isOpen) return;

      var target = e.target;
      var isClickInsideMenu = mainNav.contains(target);
      var isClickInsideToggle = navToggle.contains(target);

      if (!isClickInsideMenu && !isClickInsideToggle) {
        navToggle.setAttribute('aria-expanded', 'false');
        mainNav.classList.remove('is-open');
      }
    });
  }

  function initReveals() {
    // Immediately mark all .reveal elements as active to prevent any empty white voids
    var reveals = document.querySelectorAll('.reveal');
    reveals.forEach(function (el) {
      el.classList.add('active');
    });

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, { threshold: 0.05, rootMargin: '50px' });

      reveals.forEach(function (el) {
        observer.observe(el);
      });
    }
  }

  function initStickyHeader() {
    var header = document.querySelector('header');
    if (!header) return;
    window.addEventListener('scroll', function () {
      if (window.scrollY > 30) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    }, { passive: true });
  }

  function initAll() {
    initMobileNav();
    initReveals();
    initStickyHeader();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
})();


