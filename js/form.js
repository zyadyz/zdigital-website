/* ===========================
   ZDigital — form.js
   =========================== */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const successEl = document.getElementById('form-success');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm(form)) {
      submitForm(form, successEl);
    }
  });

  // Real-time validation
  form.querySelectorAll('input, textarea, select').forEach(field => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (field.classList.contains('error')) {
        validateField(field);
      }
    });
  });
});

function validateForm(form) {
  let valid = true;
  form.querySelectorAll('[required]').forEach(field => {
    if (!validateField(field)) valid = false;
  });
  return valid;
}

function validateField(field) {
  const errorEl = field.parentElement.querySelector('.field-error');
  let message = '';

  if (field.hasAttribute('required') && !field.value.trim()) {
    message = 'Ce champ est obligatoire.';
  } else if (field.type === 'email' && field.value.trim()) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(field.value.trim())) {
      message = 'Adresse email invalide.';
    }
  } else if (field.type === 'tel' && field.value.trim()) {
    const telRegex = /^[\d\s\+\-\(\)]{7,20}$/;
    if (!telRegex.test(field.value.trim())) {
      message = 'Numéro de téléphone invalide.';
    }
  }

  if (message) {
    field.classList.add('error');
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.classList.add('visible');
    }
    return false;
  } else {
    field.classList.remove('error');
    if (errorEl) {
      errorEl.textContent = '';
      errorEl.classList.remove('visible');
    }
    return true;
  }
}

function submitForm(form, successEl) {
  const submitBtn = form.querySelector('[type="submit"]');

  // Show loading state
  submitBtn.classList.add('btn-loading');
  submitBtn.disabled = true;

  // Simulate async submission (replace with real fetch in production)
  setTimeout(() => {
    form.style.display = 'none';
    if (successEl) {
      successEl.classList.add('visible');
    }

    // Scroll to success
    if (successEl) {
      successEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, 1200);
}
