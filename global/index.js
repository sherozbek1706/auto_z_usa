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
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// *****

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".zapytaj__layout .zl__form");
  const requiredWrappers = document.querySelectorAll(
    ".zapytaj__layout .input-wrapper"
  );
  const desc = document.querySelector(".zapytaj__layout .desc");

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
      const input = wrapper.querySelector(".zapytaj__layout input[required]");
      const star = wrapper.querySelector(".zapytaj__layout .star");
      const alertText = wrapper.querySelector(".zapytaj__layout h4");

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
    .querySelectorAll(".zapytaj__layout .input-wrapper h4")
    .forEach((h4) => {
      h4.style.opacity = "0";
      h4.style.visibility = "hidden";
      h4.style.transition = "0.3s";
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".zapytaj");
  const requiredWrappers = form.querySelectorAll(".zapytaj .input-wrapper");

  // --- REQUIRED VALIDATION ---
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    requiredWrappers.forEach((wrapper) => {
      const input = wrapper.querySelector(".zapytaj input[required]");
      const star = wrapper.querySelector(".zapytaj .star");
      const alertText = wrapper.querySelector(".zapytaj h4");
      console.log(alertText);

      if (input) {
        if (!input.value.trim()) {
          isValid = false;

          // Qizil belgi
          star.style.color = "#e3342f";
          alertText.style.opacity = "1";
          alertText.style.marginTop = "5px";
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

    // Agar required input bo‘sh bo‘lsa, form submit qilinmasin
    if (!isValid) {
      e.preventDefault();

      // Foydalanuvchini birinchi bo‘sh inputga yo‘naltirish
      const firstEmpty = form.querySelector(
        ".zapytaj input[required]:invalid, .zapytaj input[required]:not(:valid), .zapytaj input[required]:not([value])"
      );
      if (firstEmpty) firstEmpty.focus();
    }
  });

  // --- INPUT blur event validation ---
  requiredWrappers.forEach((wrapper) => {
    const input = wrapper.querySelector(".zapytaj input[required]");
    const star = wrapper.querySelector(".zapytaj .star");
    const alertText = wrapper.querySelector(".zapytaj h4");

    if (input) {
      input.addEventListener("blur", () => {
        if (!input.value.trim()) {
          star.style.color = "#e3342f";
          alertText.style.opacity = "1";
          alertText.style.visibility = "visible";
        } else {
          star.style.color = "#0090ff";
          alertText.style.opacity = "0";
          alertText.style.visibility = "hidden";
          input.style.border = "1px solid #f1f1f1";
        }
      });
    }
  });
});

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
