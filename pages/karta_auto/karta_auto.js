const hamburger = document.querySelector(".hamburger");
const sticky_header = document.querySelector(".sticky__header");

const closeHeader = document.querySelector(".sticky__header__close");

hamburger.addEventListener("click", () => {
  sticky_header.classList.toggle("active");
});
closeHeader.addEventListener("click", () => {
  sticky_header.classList.toggle("active");
});

/**
 *
 * Swiper Initialization
 *
 */

var swiper = new Swiper(".mySwiper", {
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
});

// var swiper3 = new Swiper(".mySwiper3", {
//   loop: true,
//   spaceBetween: 10,
//   slidesPerView: 4,
//   freeMode: true,
//   watchSlidesProgress: true,
// });
// var swiper2 = new Swiper(".mySwiper2", {
//   loop: true,
//   spaceBetween: 10,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   thumbs: {
//     swiper: swiper3,
//   },
// });

var swiper3 = new Swiper(".mySwiper3", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    560: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper3,
  },
});

const button = document.querySelector(".header__btn button");
const zapytaj__layout = document.querySelector(".zapytaj__layout");

const close__img = document.querySelector(".close__img");

button.addEventListener("click", () => {
  zapytaj__layout.classList.toggle("zl__form__active");
});
close__img.addEventListener("click", () => {
  zapytaj__layout.classList.toggle("zl__form__active");
});

const button2 = document.querySelector(".kib__btn");
const zapytaj__layout2 = document.querySelector(".zapytaj__layout2");

const close__img2 = document.querySelector(".close__img2");

button2.addEventListener("click", () => {
  zapytaj__layout2.classList.toggle("zl__form__active");
});
close__img2.addEventListener("click", () => {
  zapytaj__layout2.classList.toggle("zl__form__active");
});
