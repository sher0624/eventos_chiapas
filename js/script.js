const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Mensaje enviado correctamente. Gracias por contactar a Eventos Chiapas.");
    form.reset();
  });
}
const formulario = document.getElementById("contactForm");

formulario.addEventListener("submit", function(e) {
  e.preventDefault();

  const confirmar = confirm("¿Estás seguro de enviar esta información?");

  if (confirmar) {
    alert("Información enviada correctamente ✅");
    formulario.reset();
  } else {
    alert("Envío cancelado ❌");
  }
});