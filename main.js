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

  // Chat-bot

  const messageBar = document.querySelector(".bar-wrapper input");
  const sendBtn = document.querySelector(".bar-wrapper button");
  const messageBox = document.querySelector(".message-box");

  let API_URL = "https://api.openai.com/v1/chat/completions";
  let API_KEY = "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";

  // Almacenamiento en caché de respuestas
  const cachedResponses = {};

  function handleClickOrEnter() {
    if (messageBar.value.length > 0) {
      const UserTypedMessage = messageBar.value;
      messageBar.value = "";

      let message = `
      <div class="chat message">
        <img src="assets/img/usuario.webp">
        <span>${UserTypedMessage}</span>
      </div>`;

      let response = `
      <div class="chat response">
        <img src="assets/img/chat-bot.png">
        <span class="new">...</span>
      </div>`;

      messageBox.insertAdjacentHTML("beforeend", message);

      setTimeout(() => {
        messageBox.insertAdjacentHTML("beforeend", response);

        // Desplazamiento automático hacia abajo
        messageBox.scrollTop = messageBox.scrollHeight;

        // Comprobar si la respuesta está en caché
        if (cachedResponses.hasOwnProperty(UserTypedMessage)) {
          updateChatBotResponse(cachedResponses[UserTypedMessage]);
        } else {
          const requestOptions = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
              "model": "gpt-3.5-turbo",
              "messages": [{ "role": "user", "content": UserTypedMessage }]
            })
          };

          fetch(API_URL, requestOptions)
            .then(res => res.json())
            .then(data => {
              const chatBotResponse = data.choices[0].message.content;

              // Actualizar la respuesta en caché
              cachedResponses[UserTypedMessage] = chatBotResponse;

              updateChatBotResponse(chatBotResponse);
            })
            .catch((error) => {
              showErrorMessage();
            });
        }
      }, 100);
    }
  }

  function updateChatBotResponse(response) {
    const chatBotResponse = document.querySelector(".response .new");
    chatBotResponse.innerHTML = response;
    chatBotResponse.classList.remove("new");

    // Desplazamiento automático hacia abajo
    messageBox.scrollTop = messageBox.scrollHeight;
  }

  function showErrorMessage() {
    const chatBotResponse = document.querySelector(".response .new");
    chatBotResponse.innerHTML = "Uups! Ha ocurrido un error. Por favor intentelo nuevamente";
    chatBotResponse.classList.remove("new");

    // Desplazamiento automático hacia abajo
    messageBox.scrollTop = messageBox.scrollHeight;
  }

  sendBtn.addEventListener('click', handleClickOrEnter);

  messageBar.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      handleClickOrEnter();
    }
  });

  const chatboxWrapper = document.querySelector(".chatbox-wrapper");
  const toggleChatbotBtn = document.getElementById("toggleChatbot");

  toggleChatbotBtn.addEventListener("click", function () {
    chatboxWrapper.classList.toggle("hidden");
  });
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

