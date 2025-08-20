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

let swiperArticleHero = new Swiper(".swiper-article__hero", {
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

let swiperAboutHero = new Swiper(".swiper-about__hero", {
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
      // slidesOffsetBefore: -((window.innerWidth / 1.5) / 2),
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
      // slidesOffsetBefore: -((window.innerWidth / 1.5) / 2),
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

// swiper About-slider
let swiperAbout = new Swiper(".about-slider", {
  slidesPerView: 'auto',
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 12,
    },
    768: {
      slidesPerView: 2.6,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3.3,
      spaceBetween: 26,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 26,
    }
  },
  navigation: {
    nextEl: ".swiper-button-next-about",
    prevEl: ".swiper-button-prev-about",
  },
  pagination: {
    el: ".swiper-pagination-about",
  },
});

// swiper Article-slider
let swiperArticle = new Swiper(".artice-slider", {
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
    }
  },
  navigation: {
    nextEl: ".swiper-button-next-article",
    prevEl: ".swiper-button-prev-article",
  },
  pagination: {
    el: ".swiper-pagination-article",
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

// swiper current-slider
let swiperExclusive = new Swiper(".exclusive-slider-slider", {
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
    nextEl: ".swiper-button-next-exclusive",
    prevEl: ".swiper-button-prev-exclusive",
  },
  pagination: {
    el: ".swiper-pagination-exclusive",
  },
});




// swiper current-slider
let swiperExclusiveImg = new Swiper(".exclusive-img-slider", {
  slidesPerView: 'auto',
  spaceBetween: 20,
  grabCursor: false,
  pagination: {
    el: ".swiper-pagination-exclusive-image",
  },
});




// Map initialization
function initMap() {
  ymaps.ready(function () {
    let map = new ymaps.Map("map", {
      center: [36.5133, -4.8858],
      zoom: 14,
      controls: []
    });

    let customSVG = `
          <svg width="45" height="50" viewBox="0 0 52 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.252 0.463867C40.2662 0.463867 51.627 11.9556 51.627 26.1309C51.6269 46.0516 29.8604 57.3793 26.6465 58.9434C26.3877 59.0693 26.1162 59.0693 25.8574 58.9434C22.6427 57.3789 0.876959 46.0511 0.876953 26.1309C0.876953 11.9556 12.2378 0.463948 26.252 0.463867ZM26.252 15.1309C20.2459 15.1309 15.377 20.0558 15.377 26.1309C15.377 32.2059 20.2459 37.1308 26.252 37.1309C32.258 37.1309 37.1269 32.206 37.127 26.1309C37.127 20.0557 32.258 15.1309 26.252 15.1309Z" fill="#333130"/>
          </svg>
        `;

    // Custom layout
    let MyIconLayout = ymaps.templateLayoutFactory.createClass(customSVG);

    let placemark = new ymaps.Placemark(
      [36.5133, -4.8858], // Marker joyi
      { hintContent: 'Solo Marbella - Real Estates' },
      { iconLayout: MyIconLayout, iconShape: { type: 'Circle', coordinates: [26, 30], radius: 30 } }
    );

    map.geoObjects.add(placemark);
  });
}