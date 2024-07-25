const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container h2", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__container .header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header__image img", {
  duration: 1000,
  delay: 2000,
});

ScrollReveal().reveal(".app__image-1, .app__image-3", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".app__image-2", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".app__card h5", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".app__card h4", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".app__card p", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".download__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".download__container p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".download__container .download__btns", {
  ...scrollRevealOption,
  delay: 1000,
});
