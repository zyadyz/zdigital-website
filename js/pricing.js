/* ===========================
   ZDigital — pricing.js
   =========================== */

// Alpine.js pricing tabs data is handled via x-data in HTML.
// This file handles any additional pricing interactivity.

document.addEventListener('DOMContentLoaded', () => {
  initPricingHighlight();
});

function initPricingHighlight() {
  // Add hover effects to plan cards not handled by CSS alone
  document.querySelectorAll('.plan-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
      document.querySelectorAll('.plan-card').forEach(c => {
        if (c !== this && !c.classList.contains('plan-card--featured')) {
          c.style.opacity = '0.75';
        }
      });
    });

    card.addEventListener('mouseleave', () => {
      document.querySelectorAll('.plan-card').forEach(c => {
        c.style.opacity = '';
      });
    });
  });
}
