function toggleSingleReviewAccordion(button) {
  var accordion = button.closest('.single-review__accordion');
  var content = accordion.querySelector('.single-review__accordion-content');
  var arrow = accordion.querySelector('.single-review__accordion-arrow');
  var expanded = button.getAttribute('aria-expanded') === 'true';

  if (expanded) {
    content.style.display = 'none';
    button.setAttribute('aria-expanded', 'false');
    arrow.style.transform = 'rotate(180deg)';
  } else {
    content.style.display = 'block';
    button.setAttribute('aria-expanded', 'true');
    arrow.style.transform = 'rotate(0deg)';
  }
}