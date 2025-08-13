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


// swiper current-slider
let swiperCurrent = new Swiper(".current-slider-slider", {
  slidesPerView: 'auto',
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 12,
      allowTouchMove: false,
    },
    640: {
      slidesPerView: 1.4,
      spaceBetween: 12,
      allowTouchMove: false,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
      allowTouchMove: false,
    },
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 26,
      allowTouchMove: true,
      grabCursor: true,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 26,
      allowTouchMove: true,
      grabCursor: true,
    }
  },
  navigation: {
    nextEl: ".swiper-button-next-current",
    prevEl: ".swiper-button-prev-current",
  },
  pagination: {
    el: ".swiper-pagination-current",
  },
});




// swiper current-slider
let swiperCurrentImg = new Swiper(".current-img-slider", {
  slidesPerView: 'auto',
  spaceBetween: 20,
  grabCursor: false,
  pagination: {
    el: ".swiper-pagination-current-image",
  },
});
