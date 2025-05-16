document.addEventListener('DOMContentLoaded', function() {
  var hamburger = document.querySelector('.header-tlnt__hamburger');
  var modal = document.getElementById('mobileMenu');
  var closeBtn = document.querySelector('.header-tlnt__mobile-close');
  var backdrop = document.querySelector('.header-tlnt__mobile-modal-backdrop');

  if (hamburger && modal) {
    hamburger.addEventListener('click', function() {
      modal.setAttribute('aria-hidden', 'false');
      hamburger.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    });
  }
  if (closeBtn && modal) {
    closeBtn.addEventListener('click', function() {
      modal.setAttribute('aria-hidden', 'true');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  }
  if (backdrop && modal) {
    backdrop.addEventListener('click', function() {
      modal.setAttribute('aria-hidden', 'true');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  }
});