document.addEventListener("DOMContentLoaded", function() {
  // Configuración de ScrollReveal
  ScrollReveal().reveal('.fade-in-scroll', {
    beforeReveal: function (el) {
      el.style.opacity = 1;
    },
    distance: '50px',
    duration: 800,
    easing: 'ease-in'
  });

  const nav = document.querySelector("#navbar-menu");
  const abrir = document.querySelector("#abrir-menu");
  const cerrar = document.querySelector("#cerrar-menu");
  
  abrir.addEventListener ("click", () => {
    nav.classList.add("visible")
  })

  cerrar.addEventListener ("click", () => {
    nav.classList.remove("visible")
  })
  
});
