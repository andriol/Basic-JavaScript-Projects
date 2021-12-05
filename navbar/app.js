const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".links");
const section = document.querySelector(".section");
// on click we toggle the show-links class
navToggle.addEventListener("click", function () {
  navLinks.classList.toggle("show-links");
});
