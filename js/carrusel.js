document.addEventListener("DOMContentLoaded", () => {
  const slide = document.querySelector(".carrusel-slide");
  const images = document.querySelectorAll(".carrusel-slide img");

  let currentIndex = 0;

  function updateSlide() {
    slide.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlide();
  }, 5000);
});
