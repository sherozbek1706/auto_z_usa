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
