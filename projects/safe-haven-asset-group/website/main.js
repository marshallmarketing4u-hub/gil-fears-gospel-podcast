/* ============================================================
   Safe Haven Asset Group — Main JavaScript
   Interactions: sticky nav, mobile menu, bottom bar,
   form handling, FAQ tracking, conversion events
   ============================================================ */

// ---------- Sticky header ----------
(function () {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 80);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// ---------- Mobile nav ----------
(function () {
  const hamburger = document.getElementById('nav-hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  if (!hamburger || !mobileNav) return;
  const bg = mobileNav.querySelector('.mobile-nav-bg');

  const openNav = () => {
    mobileNav.classList.add('open');
    mobileNav.setAttribute('aria-hidden', 'false');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    // focus first link
    mobileNav.querySelector('a, button')?.focus();
  };
  const closeNav = () => {
    mobileNav.classList.remove('open');
    mobileNav.setAttribute('aria-hidden', 'true');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    hamburger.focus();
  };

  hamburger.addEventListener('click', () =>
    mobileNav.classList.contains('open') ? closeNav() : openNav()
  );
  bg?.addEventListener('click', closeNav);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mobileNav.classList.contains('open')) closeNav();
  });
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
})();

// ---------- Mobile sticky bottom bar ----------
(function () {
  const bar = document.getElementById('bottom-bar');
  if (!bar) return;

  const updateBar = () => {
    const scrolled = window.scrollY > window.innerHeight * 0.25;
    bar.classList.toggle('show', scrolled);
    bar.setAttribute('aria-hidden', scrolled ? 'false' : 'true');
  };
  window.addEventListener('scroll', updateBar, { passive: true });
  updateBar();

  // Hide when a form field is focused
  const allInputs = document.querySelectorAll('input, textarea, select');
  allInputs.forEach(el => {
    el.addEventListener('focus', () => bar.classList.add('form-focus'));
    el.addEventListener('blur', () => bar.classList.remove('form-focus'));
  });
})();

// ---------- Copyright year ----------
(function () {
  document.querySelectorAll('.js-year').forEach(el => {
    el.textContent = new Date().getFullYear();
  });
})();

// ---------- Tracking helpers ----------
function pushEvent(eventName, params = {}) {
  if (typeof dataLayer !== 'undefined') {
    dataLayer.push({ event: eventName, source_page: location.pathname, ...params });
  }
}

// Phone + email click tracking
document.querySelectorAll('a[href^="tel:"]').forEach(a => {
  a.addEventListener('click', () => pushEvent('phone_click', { link_url: a.href }));
});
document.querySelectorAll('a[href^="mailto:"]').forEach(a => {
  a.addEventListener('click', () => pushEvent('email_click', { link_url: a.href }));
});

// Nav CTA
document.querySelector('.nav-cta')?.addEventListener('click', () => pushEvent('nav_cta_click'));
document.querySelector('#bottom-bar .btn')?.addEventListener('click', () => pushEvent('bottom_bar_cta_click'));

// FAQ open events
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('toggle', () => {
    if (item.open) {
      const q = item.querySelector('summary')?.textContent?.trim();
      pushEvent('faq_open', { faq_question: q });
    }
  });
});

// ---------- Form handling ----------
function initForm(formEl) {
  if (!formEl) return;

  const eventName = formEl.dataset.event || 'form_submit';
  const successTarget = formEl.dataset.success || '#form-success';
  const successEl = successTarget.startsWith('#')
    ? document.querySelector(successTarget)
    : document.getElementById(successTarget);
  const alertEl = formEl.querySelector('.form-alert');
  const submitBtn = formEl.querySelector('button[type="submit"]');

  // Conditional field reveal
  formEl.querySelectorAll('[data-reveals]').forEach(trigger => {
    const targetEl = document.getElementById(trigger.dataset.reveals);
    if (!targetEl) return;
    const check = () => {
      const active = trigger.type === 'checkbox'
        ? trigger.checked
        : (trigger.value !== '' && trigger.value !== trigger.dataset.revealEmpty);
      targetEl.style.display = active ? '' : 'none';
      targetEl.querySelectorAll('input, select, textarea').forEach(f => f.disabled = !active);
    };
    trigger.addEventListener('change', check);
    check();
  });

  // Currency formatting
  formEl.querySelectorAll('[data-currency]').forEach(input => {
    input.addEventListener('blur', () => {
      const raw = parseFloat(input.value.replace(/[^0-9.]/g, ''));
      if (!isNaN(raw)) input.value = raw.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
    });
    input.addEventListener('focus', () => {
      input.value = input.value.replace(/[^0-9.]/g, '');
    });
  });

  // Field validation
  const validateField = (field) => {
    const group = field.closest('.form-group');
    if (!group) return true;
    let valid = true;
    const val = field.value.trim();
    if (field.required) {
      if (field.type === 'checkbox') { if (!field.checked) valid = false; }
      else if (!val) valid = false;
    }
    if (field.type === 'email' && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) valid = false;
    group.classList.toggle('has-error', !valid);
    field.setAttribute('aria-invalid', (!valid).toString());
    return valid;
  };

  formEl.querySelectorAll('input, select, textarea').forEach(f => {
    f.addEventListener('blur', () => validateField(f));
    f.addEventListener('input', () => {
      if (f.closest('.form-group')?.classList.contains('has-error')) validateField(f);
    });
  });

  // Submit
  formEl.addEventListener('submit', async e => {
    e.preventDefault();

    let allValid = true;
    formEl.querySelectorAll('input:not(:disabled), select:not(:disabled), textarea:not(:disabled)').forEach(f => {
      if (!validateField(f)) allValid = false;
    });

    if (!allValid) {
      if (alertEl) {
        alertEl.textContent = "We weren't able to submit the form. Please check the fields highlighted in red and try again.";
        alertEl.classList.add('show');
        alertEl.setAttribute('role', 'alert');
      }
      formEl.querySelector('.has-error input, .has-error select, .has-error textarea')?.focus();
      return;
    }

    if (alertEl) alertEl.classList.remove('show');

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn._origText = submitBtn.textContent;
      submitBtn.textContent = 'Submitting your information…';
      submitBtn.setAttribute('aria-busy', 'true');
      submitBtn.setAttribute('aria-live', 'polite');
    }

    try {
      const formData = Object.fromEntries(new FormData(formEl));
      formData.source_page = location.pathname;

      // Append UTM params from URL
      const params = new URLSearchParams(location.search);
      ['utm_source','utm_medium','utm_campaign','utm_content','utm_term','gclid','fbclid'].forEach(k => {
        if (params.has(k)) formData[k] = params.get(k);
      });

      const webhookUrl = formEl.dataset.webhook;
      if (!webhookUrl || webhookUrl === '[[GHL_WEBHOOK_URL]]') {
        throw new Error('Webhook URL is not configured.');
      }

      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      // Fire conversion events
      pushEvent(eventName, formData);
      if (formData.sms_consent) pushEvent('sms_optin_submit', { source_page: location.pathname });
      if (formData.email_consent) pushEvent('email_optin_submit', { source_page: location.pathname });

      // Show success
      formEl.style.display = 'none';
      if (successEl) {
        successEl.classList.add('show');
        successEl.setAttribute('tabindex', '-1');
        successEl.focus();
      }

      // Scroll to Calendly if present
      const scheduleAnchor = document.getElementById('schedule');
      if (scheduleAnchor) {
        if (scheduleAnchor.style.display === 'none') scheduleAnchor.style.display = '';
        setTimeout(() => scheduleAnchor.scrollIntoView({ behavior: 'smooth', block: 'start' }), 500);
      }

    } catch (err) {
      console.error('Form submission error:', err);
      if (alertEl) {
        alertEl.textContent = 'Something went wrong on our end. Please try again or contact our team directly.';
        alertEl.classList.add('show');
        alertEl.setAttribute('role', 'alert');
      }
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = submitBtn._origText;
        submitBtn.removeAttribute('aria-busy');
      }
    }
  });
}

// Initialize all forms
document.querySelectorAll('form[data-form]').forEach(initForm);

// ---------- Calendly event tracking ----------
window.addEventListener('message', e => {
  if (e.data?.event === 'calendly.event_scheduled') {
    pushEvent('calendly_book', {
      calendly_event_uri: e.data.payload?.event?.uri,
      calendly_event_type: e.data.payload?.event_type?.name,
    });
  }
});
