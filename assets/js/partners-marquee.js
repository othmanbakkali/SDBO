/**
 * Partners infinite marquee — builds markup from config and duplicates sets for a seamless CSS loop.
 * Uses the same -50% translate pattern as app.css (@keyframes partners-scroll).
 */
(function () {
    'use strict';

    /** @type {{ src: string, alt: string }[]} */
    var PARTNER_LOGOS = [
        { src: 'assets/images/partners/BSI.png', alt: 'BSI' },
        { src: 'assets/images/partners/RMH.png', alt: 'RMH' },
        { src: 'assets/images/partners/Techniscan.png', alt: 'Techniscan' },
        { src: 'assets/images/partners/UnitedService.png', alt: 'United Service' }
    ];

    var DEFAULT_DURATION_S = 80;
    var WIDTH_FACTOR = 1.15;
    var MAX_EXTRA_SETS = 12;

    /**
     * @param {HTMLElement} root
     */
    function buildOneSetFragment(partners) {
        var frag = document.createDocumentFragment();
        for (var i = 0; i < partners.length; i++) {
            var p = partners[i];
            var item = document.createElement('div');
            item.className = 'partner-item';
            var img = document.createElement('img');
            img.src = p.src;
            img.alt = p.alt;
            img.loading = 'lazy';
            img.decoding = 'async';
            item.appendChild(img);
            frag.appendChild(item);
        }
        return frag;
    }

    /**
     * @param {HTMLElement} root — .partners-marquee
     */
    function init(root) {
        var track = root.querySelector('.partners-track');
        if (!track || !PARTNER_LOGOS.length) {
            return;
        }

        track.replaceChildren();

        track.appendChild(buildOneSetFragment(PARTNER_LOGOS));

        var minWidth = Math.max(root.clientWidth || 0, 320) * WIDTH_FACTOR;
        var extra = 0;
        while (track.scrollWidth < minWidth && extra < MAX_EXTRA_SETS) {
            track.appendChild(buildOneSetFragment(PARTNER_LOGOS));
            extra++;
        }

        var firstHalf = Array.prototype.slice.call(track.children);
        for (var j = 0; j < firstHalf.length; j++) {
            track.appendChild(firstHalf[j].cloneNode(true));
        }

        var duration = parseFloat(root.getAttribute('data-marquee-duration'), 10);
        if (isNaN(duration) || duration <= 0) {
            duration = DEFAULT_DURATION_S;
        }
        track.style.setProperty('--partners-marquee-duration', duration + 's');

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            root.classList.add('partners-marquee--reduced-motion');
        }
    }

    function boot() {
        var root = document.getElementById('partnersMarquee');
        if (root) {
            init(root);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot);
    } else {
        boot();
    }
})();
