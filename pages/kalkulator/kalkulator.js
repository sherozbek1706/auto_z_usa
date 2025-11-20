let cena = document.querySelector(".cena");
let btn = document.querySelector(".kalk__btns__active");
let kalk__btns = document.querySelector(".kalk__btns");

btn.addEventListener("click", (e) => {
  cena.classList.toggle("cena__active");
  kalk__btns.classList.toggle("disabled__margin");
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
