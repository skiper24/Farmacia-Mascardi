const slide = document.querySelector(".carrusel-slide");
const images = document.querySelectorAll(".carrusel-slide img");

let currentIndex = 0;
const totalSlides = images.length;

function updateSlide() {
  slide.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Cambio automático cada 5 segundos
setInterval(() => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlide();
}, 5000);

