/* ==========================================
   Mobile Menu
========================================== */

const hamburger =
  document.querySelector(".hamburger");

const mobileMenu =
  document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {

  mobileMenu.classList.toggle("active");

});

/* ==========================================
   Close Menu On Click
========================================== */

document
.querySelectorAll(".mobile-menu a")
.forEach(link => {

  link.addEventListener("click", () => {

    mobileMenu.classList.remove("active");

  });

});

/* ==========================================
   Navbar Shrink
========================================== */

const header =
  document.querySelector(".header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {

    header.classList.add("scrolled");

  } else {

    header.classList.remove("scrolled");

  }

});

/* ==========================================
   FAQ Accordion
========================================== */

document
.querySelectorAll(".faq-item")
.forEach(item => {

  const btn =
    item.querySelector("button");

  btn.addEventListener("click", () => {

    item.classList.toggle("active");

  });

});

/* ==========================================
   Loader
========================================== */

window.addEventListener("load", () => {

  const loader =
    document.getElementById("loader");

  setTimeout(() => {

    loader.classList.add("hidden");

  }, 600);

});

/* ==========================================
   Scroll Progress Bar
========================================== */

const progress =
document.createElement("div");

progress.className =
"scroll-progress";

document.body.appendChild(progress);

window.addEventListener("scroll", () => {

  const totalHeight =
    document.documentElement.scrollHeight -
    window.innerHeight;

  const progressWidth =
    (window.scrollY / totalHeight) * 100;

  progress.style.width =
    progressWidth + "%";

});