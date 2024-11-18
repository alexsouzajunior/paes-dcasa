const menuToggle = document.querySelector("header nav .menu__toggle");
const navSpanMiddle = document.querySelector("header nav .menu__toggle .middle");
const navMenu = document.querySelector("header nav .nav__menu");

// Hamburger menu
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navSpanMiddle.classList.toggle("hide");
  navMenu.classList.toggle("show");
});

window.addEventListener('scroll', () => {
  let header = document.querySelector('header nav');
  header.classList.toggle('sticky', window.scrollY > 0);
});

var testimonial = document.querySelectorAll('.testimonial');
  
window.addEventListener('load', () => {
    testimonial.forEach((item) => {
      item.classList.remove('testimonial');
    });
});

ScrollReveal({
  distance: '20px',
  duration: 1500
});

window.addEventListener('load', () => {
  ScrollReveal().reveal('.testimonial__card', { interval: 200, origin: 'top' });
});