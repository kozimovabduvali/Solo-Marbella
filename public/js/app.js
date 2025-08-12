let swiperMainHero = new Swiper(".swiper-main__hero", {
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 12,
    },
    768: {
      slidesPerView: 1.5,
      spaceBetween: 20,
      slidesOffsetBefore: -((window.innerWidth / 1.5) / 2),
    }
  },
});
