document.addEventListener('DOMContentLoaded', function () {
  let swiperInstance = null;

  function initSwiperIfMobile() {
    const isMobile = window.innerWidth <= 767;
    const swiperContainer = document.getElementById('why-choose-swiper');

    if (isMobile && !swiperInstance) {
      swiperInstance = new Swiper(swiperContainer, {
        slidesPerView: 1.4,
        spaceBetween: 16,
        navigation: false,
        pagination: false,
        allowTouchMove: true,
      });
    } else if (!isMobile && swiperInstance) {
      swiperInstance.destroy(true, true);
      swiperInstance = null;
    }
  }

  initSwiperIfMobile();
  window.addEventListener('resize', initSwiperIfMobile);
});