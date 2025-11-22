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

// let car__boxes = document.querySelectorAll(".cars__box");

// car__boxes.forEach((elem) =>
//   elem.addEventListener("click", () => {
//     console.log("sadas");

//     window.location.assign("/pages/karta_auto/karta_auto.html");
//   })
// );

const text2 = document.getElementById("text");
const btn2 = document.getElementById("toggleBtn");

btn2.addEventListener("click", () => {
  text2.classList.toggle("expanded");

  if (text2.classList.contains("expanded")) {
    btn2.textContent = "";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".zapytaj__layout2 .zl__form");
  const requiredWrappers = document.querySelectorAll(
    ".zapytaj__layout2 .input-wrapper"
  );
  const desc = document.querySelector(".zapytaj__layout2 .desc");

  // --- DESC qisqartirish ---
  let isExpanded = false;
  const originalText = desc.innerText;

  // 3 qator qilish uchun max-height beramiz
  desc.style.maxHeight = "20px";
  desc.style.overflow = "hidden";
  desc.style.position = "relative";

  // Create button
  const showMoreBtn = document.createElement("p");
  showMoreBtn.innerHTML = `
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 13.0938L15.0084 8.08542L13.8309 6.90625L10 10.7396L6.17003 6.90625L4.9917 8.08458L10 13.0938Z" fill="#6E6E6E"/>
  </svg>
`;
  showMoreBtn.style.cursor = "pointer";
  showMoreBtn.style.marginBottom = "10px";
  showMoreBtn.style.display = "inline-block";
  showMoreBtn.style.transition = "transform .3s";
  desc.after(showMoreBtn);

  showMoreBtn.addEventListener("click", () => {
    if (!isExpanded) {
      // Expand
      desc.style.maxHeight = "500px";
      showMoreBtn.style.transform = "rotate(180deg)";
    } else {
      // Collapse
      desc.style.maxHeight = "20px";
      showMoreBtn.style.transform = "rotate(0deg)";
    }

    isExpanded = !isExpanded;
  });

  // --- REQUIRED VALIDATION ---
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    requiredWrappers.forEach((wrapper) => {
      const input = wrapper.querySelector(".zapytaj__layout2 input[required]");
      const star = wrapper.querySelector(".zapytaj__layout2 .star");
      const alertText = wrapper.querySelector(".zapytaj__layout2 h4");

      if (input) {
        if (!input.value.trim()) {
          isValid = false;

          // Qizil belgi

          star.style.color = "red";
          alertText.style.opacity = "1";
          alertText.style.display = "block";
          alertText.style.visibility = "visible";
        } else {
          // Normalga qaytarish
          star.style.color = "#0090ff";
          alertText.style.opacity = "0";
          alertText.style.visibility = "hidden";
          input.style.border = "1px solid #f1f1f1";
        }
      }
    });

    if (!isValid) e.preventDefault();
  });

  // H4 larni default yashirish
  document
    .querySelectorAll(".zapytaj__layout2 .input-wrapper h4")
    .forEach((h4) => {
      h4.style.opacity = "0";
      h4.style.visibility = "hidden";
      h4.style.transition = "0.3s";
    });
});
