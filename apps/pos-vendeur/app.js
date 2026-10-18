document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const mobileMenuIcon = mobileMenuBtn ? mobileMenuBtn.querySelector('i') : null;

    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', () => {
            const isOpen = mobileNav.classList.toggle('open');
            // Toggle icon menu / close
            if (mobileMenuIcon && typeof lucide !== 'undefined') {
                if (isOpen) {
                    mobileMenuIcon.setAttribute('data-lucide', 'x');
                } else {
                    mobileMenuIcon.setAttribute('data-lucide', 'menu');
                }
                lucide.createIcons();
            }
        });

        // Close mobile nav when clicking a link
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('open');
                if (mobileMenuIcon && typeof lucide !== 'undefined') {
                    mobileMenuIcon.setAttribute('data-lucide', 'menu');
                    lucide.createIcons();
                }
            });
        });
    }

    // 3. Theme Toggle (Light / Dark)
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // Check for saved theme preference, otherwise use system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
    } else {
        htmlElement.setAttribute('data-theme', systemPrefersDark ? 'dark' : 'light');
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    // 4. Interactive Phone Mockup Tabs
    const tabBtns = document.querySelectorAll('.app-tab-btn');
    const appScreens = document.querySelectorAll('.app-screen');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetScreenId = `app-screen-${btn.getAttribute('data-target')}`;
            
            // Remove active classes
            tabBtns.forEach(b => b.classList.remove('active'));
            appScreens.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked button and target screen
            btn.classList.add('active');
            const targetScreen = document.getElementById(targetScreenId);
            if (targetScreen) {
                targetScreen.classList.add('active');
            }
        });
    });

    // 5. Interactive Products in POS Mockup
    const productCards = document.querySelectorAll('.pos-product-card');
    const cartQty = document.querySelector('.cart-qty');
    const cartTotal = document.querySelector('.cart-total');
    
    // Initial state
    let cart = {
        "Croissant Beurre": { qty: 2, price: 1000 },
        "Café Espresso": { qty: 0, price: 1500 },
        "Soda Citron": { qty: 0, price: 800 },
        "Sandwich Club": { qty: 0, price: 2500 }
    };

    function updateMockCart() {
        let totalItems = 0;
        let totalPrice = 0;
        
        for (const key in cart) {
            totalItems += cart[key].qty;
            totalPrice += cart[key].qty * cart[key].price;
        }
        
        if (cartQty) {
            cartQty.textContent = `${totalItems} article${totalItems > 1 ? 's' : ''}`;
        }
        if (cartTotal) {
            cartTotal.textContent = `${totalPrice.toLocaleString('fr-FR')} F`;
        }
    }

    productCards.forEach(card => {
        card.addEventListener('click', () => {
            const name = card.querySelector('.prod-name').textContent;
            
            // Toggle selection logic
            if (cart[name]) {
                if (cart[name].qty > 0) {
                    // Deselect or decrement
                    cart[name].qty = 0;
                    card.classList.remove('selected');
                    const badge = card.querySelector('.badge-count');
                    if (badge) badge.remove();
                } else {
                    // Select
                    cart[name].qty = 1;
                    card.classList.add('selected');
                    
                    // Create badge count if not present
                    let badge = card.querySelector('.badge-count');
                    if (!badge) {
                        badge = document.createElement('span');
                        badge.className = 'badge-count';
                        card.appendChild(badge);
                    }
                    badge.textContent = '1';
                }
                updateMockCart();
            }
        });
    });

    // 6. Back To Top Button
    const backToTopBtn = document.getElementById('back-to-top');

    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 7. Scroll Reveal Animation using Intersection Observer
    const animatedElements = document.querySelectorAll('.feature-card, .step-card, .trust-metric');
    
    // Add initial opacity styling programmatically to avoid style clashes if JS fails
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    });

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => {
        revealOnScroll.observe(el);
    });
});
