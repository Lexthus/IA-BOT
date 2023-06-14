document.addEventListener("DOMContentLoaded", function () {

  // Configuración de ScrollReveal:

  ScrollReveal().reveal('.fade-in-scroll', {
    beforeReveal: function (el) {
      el.style.opacity = 1;
    },
    distance: '50px',
    duration: 800,
    easing: 'ease-in'
  });

  // Añadir flecha de desplazamiento después de un tiempo:

  setTimeout(function () {
    var arrowDiv = document.createElement('div');
    arrowDiv.className = 'arrow bounce';

    var link = document.createElement('a');
    link.className = 'fa fa-arrow-down fa-2x';
    link.href = '#cursos';

    arrowDiv.appendChild(link);
    document.getElementById('inicio').appendChild(arrowDiv);
  }, 2000);

  // Abrir y cerrar menú de navegación:

  const nav = document.querySelector("#navbar-menu");
  const abrir = document.querySelector("#abrir-menu");
  const cerrar = document.querySelector("#cerrar-menu");

  abrir.addEventListener("click", () => {
    nav.classList.add("visible")
  })

  cerrar.addEventListener("click", () => {
    nav.classList.remove("visible")
  })

  // Mostrar u ocultar botones adicionales:

  var cuposButtonWedo = document.getElementById('cupos_wedo');
  var botonesContainerWedo = document.getElementById('botones-adicionales-wedo');

  cuposButtonWedo.addEventListener('click', function () {
    botonesContainerWedo.classList.toggle('hide-buttons');
    hideOtherButtons('wedo');
  });

  var cuposButtonSpike = document.getElementById('cupos_spike');
  var botonesContainerSpike = document.getElementById('botones-adicionales-spike');

  cuposButtonSpike.addEventListener('click', function () {
    botonesContainerSpike.classList.toggle('hide-buttons');
    hideOtherButtons('spike');
  });

  var cuposButtonPrime = document.getElementById('cupos_prime');
  var botonesContainerPrime = document.getElementById('botones-adicionales-prime');

  cuposButtonPrime.addEventListener('click', function () {
    botonesContainerPrime.classList.toggle('hide-buttons');
    hideOtherButtons('prime');
  });

  // Función para ocultar otros botones:

  function hideOtherButtons(exceptCard) {
    var cards = ['wedo', 'spike', 'prime'];
    cards.forEach(function (card) {
      if (card !== exceptCard) {
        var botonesContainer = document.getElementById('botones-adicionales-' + card);
        botonesContainer.classList.add('hide-buttons');
      }
    });
  }

  //

  var slides = document.getElementsByClassName("slide");
  var currentSlide = 0;
  
  setInterval(function() {
    for (var i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
    }
    
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }, 4000);

});
