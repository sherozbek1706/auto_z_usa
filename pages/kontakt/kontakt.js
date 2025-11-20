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

/**
 *
 * RECEPTION
 */

let rt__image = document.querySelector(".rt__image");
let reception = document.querySelector(".reception");

rt__image.addEventListener("click", () => {
  reception.classList.toggle("reception__active");
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
