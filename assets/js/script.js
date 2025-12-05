const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const dropdown = document.querySelector(".dropdown");

/* Abrir/fechar menu mobile */
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/* Dropdown mobile */
dropdown.addEventListener("click", () => {
  if (window.innerWidth <= 750) {
    dropdown.classList.toggle("open");
  }
});