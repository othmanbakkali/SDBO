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
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileNav);
  } else {
    initMobileNav();
  }
})();

