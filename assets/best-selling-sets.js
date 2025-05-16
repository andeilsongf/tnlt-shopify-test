var swiper = new Swiper('.products-swiper', {
  slidesPerView: 4,
  spaceBetween: 24,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1.6,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    }
  }
});
