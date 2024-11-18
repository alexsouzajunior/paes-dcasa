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

window.addEventListener("load", function () {
  setTimeout(function open() {
    document.querySelector(".notification").style.display = "block";
  }, 1500);
});

var heroImage = document.querySelectorAll(".heroImage");
var aboutContent = document.querySelectorAll('.aboutContent');
var banners = document.querySelectorAll('.banners');
var servicesCards = document.querySelectorAll('.serviceCard');
  
window.addEventListener('load', () => {
    heroImage.forEach(item => {
        item.classList.remove("heroImage");
    });

    aboutContent.forEach(item => {
      item.classList.remove("aboutContent");
    });

    banners.forEach(item => {
      item.classList.remove("banners");
    });

    servicesCards.forEach(item => {
      item.classList.remove("serviceCard");
    });
});

ScrollReveal({
  distance: '20px',
  duration: 1500
});

window.addEventListener('load', () => {
  ScrollReveal().reveal('.hero__content h2', { delay: 100, origin: 'top' });
  ScrollReveal().reveal('.hero__content p', { delay: 200, origin: 'top' });

  ScrollReveal().reveal('.about__content', { delay: 400, origin: 'top' });
  ScrollReveal().reveal('.about-logo-image', { delay: 800, origin: 'bottom' });

  ScrollReveal().reveal('.banner-column', { delay: 200, origin: 'bottom' });
  ScrollReveal().reveal('.banner-inner', { delay: 600, origin: 'top' });
  ScrollReveal().reveal('.banner-image', { delay: 700, origin: 'bottom' });

  ScrollReveal().reveal('.services .card', { interval: 200, scale: .75 });
});