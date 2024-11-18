const logoImage = document.querySelector('#navbar .logo img');
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
  if (window.scrollY > 0) {
    logoImage.src = '/assets/imagens/logo/logo-paes-dcasa.png';
  } else {
    logoImage.src = '/assets/imagens/logo/logo-paes-dcasa-white.png';
  }
});

var slidersProducts = document.querySelectorAll(".sliders");
var productItem = document.querySelectorAll('.product');
  
window.addEventListener('load', () => {
    slidersProducts.forEach(item => {
        item.classList.remove("sliders");
    });
    productItem.forEach(item => {
        item.classList.remove("product");
    });
});

const slider = new Swiper('.slider', {
    loop: true,
    effect: 'fade',
    autoplay: {
        delay: 5000
    },
    navigation: {
        nextEl: '.slide-button-next',
        prevEl: '.slide-button-prev'
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
})

ScrollReveal({
  distance: '20px',
  duration: 1500
});

window.addEventListener('load', () => {
  ScrollReveal().reveal('.product__item', { interval: 200, origin: 'bottom' });
});