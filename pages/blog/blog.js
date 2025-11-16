const hamburger = document.querySelector(".hamburger");
const sticky_header = document.querySelector(".sticky__header");

const closeHeader = document.querySelector(".sticky__header__close");

hamburger.addEventListener("click", () => {
  sticky_header.classList.toggle("active");
});
closeHeader.addEventListener("click", () => {
  sticky_header.classList.toggle("active");
});
