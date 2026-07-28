/* ==========================================
   AVAT Theme System
========================================== */

const themeToggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("avat-theme");

if (savedTheme === "light") {
  document.body.classList.add("light");
  themeToggle.textContent = "☀️";
} else {
  themeToggle.textContent = "🌙";
}

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("light");

  const isLight =
    document.body.classList.contains("light");

  if (isLight) {

    localStorage.setItem(
      "avat-theme",
      "light"
    );

    themeToggle.textContent = "☀️";

  } else {

    localStorage.setItem(
      "avat-theme",
      "dark"
    );

    themeToggle.textContent = "🌙";

  }

});