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
    nav.classList.add("visible");
  });
  
  cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
  });
  
  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target) && event.target !== abrir) {
      nav.classList.remove("visible");
    }
  });  

  // Botón de inscripción:

  document.getElementById('boton-inscripcion').addEventListener('click', function () {
    window.open('https://forms.gle/hZEFM1cUyTCGGYyC7', '_blank');
  })
});

// Función para ampliar una imagen al hacer clic
// en ella y mostrarla en pantalla completa
function ampliarImagen(element) {
  var ampliada = document.createElement("div");
  ampliada.classList.add("ampliada");

  var imgAmpliada = document.createElement("img");
  imgAmpliada.src = element.src;
  imgAmpliada.alt = element.alt;

  ampliada.appendChild(imgAmpliada);
  document.body.appendChild(ampliada);

  ampliada.addEventListener("click", function () {
    ampliada.remove();
  });
}

