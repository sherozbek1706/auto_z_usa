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

// let car__boxes = document.querySelectorAll(".cars__box");

// car__boxes.forEach((elem) =>
//   elem.addEventListener("click", () => {
//     console.log("sadas");

//     window.location.assign("/pages/karta_auto/karta_auto.html");
//   })
// );
