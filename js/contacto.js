"use strict";

const formularioContacto = document.querySelector("#formularioContacto");
const respuestaFormulario = document.querySelector("#respuestaFormulario");

formularioContacto.addEventListener("submit", (evento) => {
  evento.preventDefault();

  if (!formularioContacto.checkValidity()) {
    formularioContacto.reportValidity();
    return;
  }

  const nombre = formularioContacto.querySelector("#nombre").value.trim();
  respuestaFormulario.textContent = `Gracias, ${nombre}. Los campos se validaron correctamente. Recuerda: esta demostración no envía información a un servidor.`;
  respuestaFormulario.classList.add("is-visible");
  formularioContacto.reset();
});
