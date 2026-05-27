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

const slides = document.querySelectorAll(".carousel-slide");
const carousel = document.querySelector(".carousel");
const prevBtn = document.querySelector(".carousel-prev");
const nextBtn = document.querySelector(".carousel-next");
let currentSlide = 0;
let carouselTimer;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function startCarousel() {
  carouselTimer = setInterval(nextSlide, 4000);
}

function resetCarouselTimer() {
  clearInterval(carouselTimer);
  startCarousel();
}

if (slides.length && carousel && prevBtn && nextBtn) {
  prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
    resetCarouselTimer();
  });

  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetCarouselTimer();
  });

  carousel.addEventListener("mouseenter", () => clearInterval(carouselTimer));
  carousel.addEventListener("mouseleave", startCarousel);

  startCarousel();
}
