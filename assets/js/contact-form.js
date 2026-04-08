/**
 * Contact form — sends via Web3Forms (https://web3forms.com) to your inbox.
 *
 * Setup (once):
 * 1. Open https://web3forms.com and create an access key.
 * 2. Set the form destination to sdbocontact@gmail.com in the Web3Forms dashboard.
 * 3. Paste the key into the form attribute data-web3forms-access-key on #contactForm,
 *    or set ACCESS_KEY_FALLBACK below.
 *
 * The access key is public by design; restrict allowed domains in the Web3Forms dashboard.
 */
(function () {
    'use strict';

    var WEB3FORMS_URL = 'https://api.web3forms.com/submit';
    /** Optional default if you prefer not to use the data attribute on the form */
    var ACCESS_KEY_FALLBACK = 'd5bc3f0c-3573-498c-b75a-a75487f42dc6';

    var SERVICE_LABELS = {
        ai: 'Intelligence Artificielle',
        hardware: 'Matériel Informatique',
        software: 'Solutions sur Mesure',
        consulting: 'Consulting / Audit'
    };

    var NO_KEY_MESSAGE =
        "Le formulaire n'est pas encore configuré. Ajoutez votre clé Web3Forms (attribut data-web3forms-access-key sur le formulaire).";

    function getAccessKey(form) {
        var fromAttr = form.getAttribute('data-web3forms-access-key');
        if (fromAttr && String(fromAttr).trim()) {
            return String(fromAttr).trim();
        }
        return String(ACCESS_KEY_FALLBACK || '').trim();
    }

    function buildEmailBody(name, email, serviceValue, serviceLabel, message) {
        var lines = [
            '— Nouveau message depuis le site SDBO (formulaire contact) —',
            '',
            'Nom      : ' + name,
            'Email    : ' + email,
            'Service  : ' + serviceLabel,
            '',
            '— Message —',
            message
        ];
        return lines.join('\n');
    }

    function setVisible(el, visible) {
        if (!el) return;
        if (visible) {
            el.removeAttribute('hidden');
            el.style.display = 'block';
        } else {
            el.setAttribute('hidden', '');
            el.style.display = 'none';
        }
    }

    function setLoading(button, loading, labelSubmit) {
        if (!button) return;
        button.disabled = loading;
        button.style.opacity = loading ? '0.75' : '1';
        if (loading) {
            button.dataset.originalHtml = button.innerHTML;
            button.innerHTML =
                '<span class="contact-form__spinner" aria-hidden="true"></span> Envoi en cours…';
        } else if (button.dataset.originalHtml) {
            button.innerHTML = button.dataset.originalHtml;
            delete button.dataset.originalHtml;
        } else {
            button.textContent = labelSubmit || 'Envoyer';
        }
    }

    function init() {
        var form = document.getElementById('contactForm');
        if (!form) return;

        var successEl = document.getElementById('formSuccess');
        var errorEl = document.getElementById('formError');
        var submitBtn = form.querySelector('button[type="submit"]');
        var labelSubmit = submitBtn ? submitBtn.textContent.trim() : 'Envoyer la demande';

        setVisible(successEl, false);
        setVisible(errorEl, false);

        form.addEventListener('submit', function (e) {
            e.preventDefault();

            setVisible(successEl, false);
            setVisible(errorEl, false);

            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }

            var honeypot = form.elements.namedItem('botcheck');
            if (honeypot && String(honeypot.value).trim() !== '') {
                return;
            }

            var accessKey = getAccessKey(form);
            if (!accessKey) {
                if (errorEl) {
                    errorEl.textContent = NO_KEY_MESSAGE;
                    setVisible(errorEl, true);
                } else {
                    alert(NO_KEY_MESSAGE);
                }
                console.warn('[SDBO contact] Missing Web3Forms access key.');
                return;
            }

            var nameInput = form.elements.namedItem('name');
            var emailInput = form.elements.namedItem('email');
            var serviceInput = form.elements.namedItem('service');
            var messageInput = form.elements.namedItem('message');

            var name = nameInput ? String(nameInput.value).trim() : '';
            var email = emailInput ? String(emailInput.value).trim() : '';
            var serviceValue = serviceInput ? String(serviceInput.value).trim() : '';
            var message = messageInput ? String(messageInput.value).trim() : '';

            var serviceLabel = SERVICE_LABELS[serviceValue] || serviceValue;
            var subject =
                '[SDBO — Contact site] ' + serviceLabel + ' — ' + name;
            var bodyPlain = buildEmailBody(name, email, serviceValue, serviceLabel, message);

            setLoading(submitBtn, true, labelSubmit);

            var payload = {
                access_key: accessKey,
                subject: subject,
                name: name,
                email: email,
                message: bodyPlain,
                replyto: email,
                from_name: name
            };

            fetch(WEB3FORMS_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify(payload)
            })
                .then(function (res) {
                    return res.json().then(function (data) {
                        return { ok: res.ok, data: data };
                    });
                })
                .then(function (result) {
                    if (result.ok && result.data && result.data.success) {
                        form.reset();
                        if (successEl) {
                            successEl.textContent =
                                'Message envoyé avec succès ! Nous vous recontacterons sous 24h.';
                            setVisible(successEl, true);
                        }
                    } else {
                        var msg =
                            (result.data && result.data.message) ||
                            "L'envoi a échoué. Réessayez plus tard ou contactez-nous par email.";
                        if (errorEl) {
                            errorEl.textContent = msg;
                            setVisible(errorEl, true);
                        }
                    }
                })
                .catch(function () {
                    if (errorEl) {
                        errorEl.textContent =
                            'Erreur réseau. Vérifiez votre connexion ou écrivez à sdbocontact@gmail.com.';
                        setVisible(errorEl, true);
                    }
                })
                .finally(function () {
                    setLoading(submitBtn, false, labelSubmit);
                });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
