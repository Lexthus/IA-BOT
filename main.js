ScrollReveal().reveal('.fade-in-scroll', {
  beforeReveal: function (el) {
    el.style.opacity = 1;
  },
  distance: '50px',
  duration: 800,
  easing: 'ease-in'
});

document.querySelector(".burger").addEventListener("click", animateBars);

var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");

function animateBars(){
  line1__bars.classList.toggle("activeline1__bars-menu");
  line2__bars.classList.toggle("activeline2__bars-menu");
  line3__bars.classList.toggle("activeline3__bars-menu");
}