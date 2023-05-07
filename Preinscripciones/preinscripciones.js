function HabilitarBotonEnviar() {
  var cajasTexto = document.getElementById("CamposFormulario").value;
  var validado = 0;

  if (cajasTexto == "") {
    validado++;
  }

  if (validado = 0) {
    document.getElementById("envio").disabled = false;
  } else {
    document.getElementById("envio").disabled = true;
  }
}

document.getElementById("CamposFormulario").addEventListener("keyup", HabilitarBotonEnviar);
document.getElementById("envio").addEventListener("click", () => {
  alert("Inscripción Finalizada");
});
console.log(envio);
console.log(CamposFormulario);
