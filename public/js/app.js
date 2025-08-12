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

// swiper reviews-slider
let swiperReview = new Swiper(".reviews-slider", {
  slidesPerView: 'auto',
  spaceBetween: 20,
  grabCursor: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 12,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 26,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 26,
    }
  },
  navigation: {
    nextEl: ".swiper-button-next-reviews",
    prevEl: ".swiper-button-prev-reviews",
  },
  pagination: {
    el: ".swiper-pagination-reviews",
  },
});
