document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".static-reviews__cards", {
    slidesPerView: 2.6,
    spaceBetween: 19,
    loop: false,
    grabCursor: true,
    slideToClickedSlide: true,
    initialSlide: 1,
    speed: 600,
    centeredSlides: false,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,

    breakpoints: {
      0: {
        slidesPerView: 1.2,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
      },
      768: {
        slidesPerView: 1.2,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
      },
      1200: {
        slidesPerView: 2.6,
        slidesOffsetBefore: 160,
        slidesOffsetAfter: 20,
      },
    },

    navigation: false,
    pagination: false,
    observer: true,
    observeParents: true,

    on: {
      init: function () {
        if (window.innerWidth >= 1200) {
          this.setTranslate(this.translate - 5);
        }
      },
    },
  });
});
