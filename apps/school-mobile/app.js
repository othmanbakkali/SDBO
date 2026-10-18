document.addEventListener('DOMContentLoaded', () => {
    // ==========================================================================
    // 1. Mobile Menu Navigation
    // ==========================================================================
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileNavOverlay = document.getElementById('mobile-nav-overlay');

    if (mobileMenuToggle && mobileNavOverlay) {
        mobileMenuToggle.addEventListener('click', () => {
            const isVisible = mobileNavOverlay.style.display === 'flex';
            mobileNavOverlay.style.display = isVisible ? 'none' : 'flex';
            mobileMenuToggle.classList.toggle('active');
        });

        // Close mobile nav when clicking a link
        const mobileLinks = mobileNavOverlay.querySelectorAll('.mobile-nav-link, .btn');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileNavOverlay.style.display = 'none';
                mobileMenuToggle.classList.remove('active');
            });
        });
    }

    // ==========================================================================
    // 2. Dark / Light Mode Toggle
    // ==========================================================================
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    document.body.setAttribute('data-theme', savedTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.body.getAttribute('data-theme') || 'light';
            const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
            document.body.setAttribute('data-theme', nextTheme);
            localStorage.setItem('theme', nextTheme);
        });
    }

    // ==========================================================================
    // 3. Bilingual System (French / Arabic Toggle)
    // ==========================================================================
    const langToggleBtn = document.getElementById('lang-toggle-btn');
    let currentLang = 'fr';

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            currentLang = currentLang === 'fr' ? 'ar' : 'fr';
            const isAr = currentLang === 'ar';
            
            // Update document attributes
            document.documentElement.setAttribute('lang', currentLang);
            document.documentElement.setAttribute('dir', isAr ? 'rtl' : 'ltr');
            
            // Toggle language button label
            const langText = langToggleBtn.querySelector('.lang-text');
            if (langText) {
                langText.textContent = isAr ? 'Français' : 'العربية';
            }

            // Find all nodes with data-fr and data-ar
            const translatableNodes = document.querySelectorAll('[data-fr][data-ar]');
            translatableNodes.forEach(node => {
                const text = isAr ? node.getAttribute('data-ar') : node.getAttribute('data-fr');
                
                if (node.tagName === 'INPUT' || node.tagName === 'TEXTAREA') {
                    node.setAttribute('placeholder', text);
                } else if (node.tagName === 'SELECT') {
                    // Handled inside options
                } else {
                    node.textContent = text;
                }
            });

            // Special handling for dropdown select options
            const options = document.querySelectorAll('option[data-fr]');
            options.forEach(opt => {
                const text = isAr ? opt.getAttribute('data-ar') : opt.getAttribute('data-fr');
                opt.textContent = text;
            });
        });
    }

    // ==========================================================================
    // 4. Interactive Phone Simulator View Switcher
    // ==========================================================================
    const navItems = document.querySelectorAll('.app-nav-item');
    const screens = document.querySelectorAll('.screen-content');
    const featureTriggers = document.querySelectorAll('.feature-item-trigger');

    function switchScreen(targetId) {
        screens.forEach(s => s.classList.remove('active'));
        navItems.forEach(n => n.classList.remove('active'));
        featureTriggers.forEach(f => f.classList.remove('active'));

        // Activate matching screen
        const targetScreen = document.getElementById(`screen-${targetId}`);
        if (targetScreen) targetScreen.classList.add('active');

        // Activate matching bottom navigation tab in app
        const matchingNav = document.querySelector(`.app-nav-item[data-target="${targetId}"]`);
        if (matchingNav) matchingNav.classList.add('active');

        // Activate matching feature list button on landing page
        const matchingTrigger = document.querySelector(`.feature-item-trigger[data-target="${targetId}"]`);
        if (matchingTrigger) matchingTrigger.classList.add('active');
    }

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const target = item.getAttribute('data-target');
            switchScreen(target);
        });
    });

    featureTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const target = trigger.getAttribute('data-target');
            switchScreen(target);
            
            // Scroll to simulator if on smaller viewports
            if (window.innerWidth <= 1024) {
                document.querySelector('.hero-visual').scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ==========================================================================
    // 5. App Mockup Sub-Actions (Signature, Wallet recharge, Moving Bus)
    // ==========================================================================
    
    // a. Electronic signature mock click
    const btnSignAppMessage = document.getElementById('btn-sign-app-message');
    const signActionArea = document.getElementById('sign-action-area');
    
    if (btnSignAppMessage && signActionArea) {
        btnSignAppMessage.addEventListener('click', () => {
            btnSignAppMessage.textContent = currentLang === 'fr' ? 'Signature en cours...' : 'جاري التوقيع...';
            btnSignAppMessage.style.opacity = '0.7';
            btnSignAppMessage.disabled = true;
            
            setTimeout(() => {
                // Replace with signed success state
                signActionArea.innerHTML = `
                    <div class="sign-status-signed">
                        <span>✓</span>
                        <span data-fr="Signé par le parent le ${new Date().toLocaleDateString()}" data-ar="تم التوقيع من طرف ولي الأمر بتاريخ ${new Date().toLocaleDateString()}">
                            ${currentLang === 'fr' ? `Signé par le parent le ${new Date().toLocaleDateString()}` : `تم التوقيع من طرف ولي الأمر بتاريخ ${new Date().toLocaleDateString()}`}
                        </span>
                    </div>
                `;
            }, 1200);
        });
    }

    // b. Wallet topup button amount selection toggle
    const topupBtns = document.querySelectorAll('.topup-btn');
    topupBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            topupBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // c. Simulated Bus Movement Animation on Map
    const liveBusPoint = document.getElementById('live-bus-point');
    if (liveBusPoint) {
        // Animation path coordinates (simulated percentage values on map container)
        // Path goes from School (top right, 80%, 15%) to Home (bottom left, 15%, 80%)
        const pathPoints = [
            { x: 80, y: 15 },
            { x: 72, y: 22 },
            { x: 60, y: 35 },
            { x: 50, y: 50 }, // Bus stop mid point
            { x: 38, y: 65 },
            { x: 25, y: 75 },
            { x: 18, y: 80 }
        ];
        
        let pathIndex = 3; // start from middle
        let movingForward = true;
        
        setInterval(() => {
            const currentPoint = pathPoints[pathIndex];
            
            // Set bus position
            liveBusPoint.style.right = `${100 - currentPoint.x}%`;
            liveBusPoint.style.top = `${currentPoint.y}%`;
            
            // Increment/Decrement direction
            if (movingForward) {
                pathIndex++;
                if (pathIndex >= pathPoints.length) {
                    movingForward = false;
                    pathIndex = pathPoints.length - 2;
                }
            } else {
                pathIndex--;
                if (pathIndex < 0) {
                    movingForward = true;
                    pathIndex = 1;
                }
            }
        }, 3500); // Shift bus position every 3.5s
    }

    // ==========================================================================
    // 6. Stakeholder Benefits Tabs
    // ==========================================================================
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTabId = btn.getAttribute('data-tab');
            
            // Deactivate active states
            tabButtons.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Activate current
            btn.classList.add('active');
            const targetTab = document.getElementById(targetTabId);
            if (targetTab) {
                targetTab.classList.add('active');
            }
        });
    });

    // ==========================================================================
    // 7. Stat counters with ScrollTrigger (IntersectionObserver)
    // ==========================================================================
    const statsData = [
        { id: 'stat-schools', endVal: 45, suffix: '+' },
        { id: 'stat-parents', endVal: 15000, suffix: '+' },
        { id: 'stat-satisfaction', endVal: 98, suffix: '%' },
        { id: 'stat-time', endVal: 3.5, suffix: 'h' }
    ];

    const statsSection = document.querySelector('.stats-section');
    let animated = false;

    function runCounters() {
        statsData.forEach(stat => {
            const element = document.getElementById(stat.id);
            if (!element) return;
            
            let current = 0;
            const target = stat.endVal;
            const duration = 2000; // 2s duration
            const steps = 50;
            const stepTime = duration / steps;
            const increment = target / steps;
            
            let countInterval = setInterval(() => {
                current += increment;
                if (current >= target) {
                    clearInterval(countInterval);
                    element.textContent = target + stat.suffix;
                } else {
                    // Check if value is float or int to display correctly
                    if (target % 1 === 0) {
                        element.textContent = Math.round(current) + stat.suffix;
                    } else {
                        element.textContent = current.toFixed(1) + stat.suffix;
                    }
                }
            }, stepTime);
        });
    }

    if (statsSection && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animated) {
                    runCounters();
                    animated = true;
                    observer.unobserve(statsSection);
                }
            });
        }, { threshold: 0.3 });
        
        observer.observe(statsSection);
    } else {
        // Fallback if IntersectionObserver is not supported
        runCounters();
    }

    // ==========================================================================
    // 8. Lead Capture Form Submission Simulation
    // ==========================================================================
    const leadForm = document.getElementById('lead-form');
    const formSuccess = document.getElementById('form-success');

    if (leadForm && formSuccess) {
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = leadForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.textContent;
            
            // Loading phase
            submitBtn.textContent = currentLang === 'fr' ? 'Traitement...' : 'جاري الإرسال...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                // Hide form, show beautiful success panel
                leadForm.style.display = 'none';
                formSuccess.style.display = 'flex';
                
                // Track details in console (mock DB)
                const clientData = {
                    name: document.getElementById('client-name').value,
                    school: document.getElementById('school-name').value,
                    email: document.getElementById('client-email').value,
                    phone: document.getElementById('client-phone').value,
                    size: document.getElementById('school-size').value,
                    message: document.getElementById('client-message').value,
                    timestamp: new Date().toISOString()
                };
                console.log('%c[Lead Captured successfully!]', 'color: #10b981; font-weight: bold;', clientData);
            }, 1500);
        });
    }

    // ==========================================================================
    // 9. Brochure & PDF Document Center Handler (Category Filter & Lightbox)
    // ==========================================================================
    const brochureModal = document.getElementById('brochure-modal');
    const brochureModalImg = document.getElementById('brochure-modal-img');
    const brochureModalClose = document.getElementById('brochure-modal-close');
    const filterBtns = document.querySelectorAll('.doc-filter-btn');
    const docCards = document.querySelectorAll('.brochure-card');

    // Document Category Filtering
    if (filterBtns.length > 0 && docCards.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');
                docCards.forEach(card => {
                    const category = card.getAttribute('data-category');
                    if (filter === 'all' || category === filter) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                });
            });
        });
    }

    // Lightbox Preview Modal Handler using Event Delegation
    if (brochureModal && brochureModalImg) {
        document.addEventListener('click', (e) => {
            const trigger = e.target.closest('.btn-preview-brochure');
            if (trigger) {
                e.preventDefault();
                const imgSrc = trigger.getAttribute('data-img');
                if (imgSrc) {
                    brochureModalImg.src = imgSrc;
                    brochureModal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            }
        });

        function closeModal() {
            brochureModal.classList.remove('active');
            document.body.style.overflow = '';
        }

        if (brochureModalClose) {
            brochureModalClose.addEventListener('click', closeModal);
        }

        brochureModal.addEventListener('click', (e) => {
            if (e.target === brochureModal) {
                closeModal();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && brochureModal.classList.contains('active')) {
                closeModal();
            }
        });
    }
});
