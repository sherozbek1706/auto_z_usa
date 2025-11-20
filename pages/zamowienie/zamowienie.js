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

// BAR

document.querySelectorAll(".bar-title").forEach((title) => {
  title.addEventListener("click", function () {
    this.parentElement.classList.toggle("active");
  });
});

const setting = document.querySelector(".setting");
const sticky__bar = document.querySelector(".sticky__bar");
const bac__ximg = document.querySelector(".bac__ximg");

setting.addEventListener("click", () => {
  sticky__bar.classList.toggle("sticky__bar__search");
});
bac__ximg.addEventListener("click", () => {
  sticky__bar.classList.remove("sticky__bar__search");
});
sticky__bar.addEventListener("click", () => {
  sticky__bar.classList.remove("sticky__bar__search");
});

/**
 *
 * ACCORDIAN UCHUN
 *
 */
const items = document.querySelectorAll(".mark-item");

items.forEach((item) => {
  item.addEventListener("click", () => {
    // Avval hamma accordionlarni yopib chiqamiz
    items.forEach((i) => {
      if (i !== item) i.classList.remove("active");
    });

    // Keyin bosilganini ochamiz/yopamiz
    item.classList.toggle("active");
  });
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

