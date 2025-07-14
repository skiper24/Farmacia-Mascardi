document.addEventListener("DOMContentLoaded", () => {
  const slide = document.querySelector(".carrusel-slide");
  const images = document.querySelectorAll(".carrusel-slide img");
  const prevBtn = document.querySelector(".carrusel-btn.prev");
  const nextBtn = document.querySelector(".carrusel-btn.next");

  let currentIndex = 0;
  const totalSlides = images.length;

  function updateSlide() {
    slide.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlide();
  }

  nextBtn.addEventListener("click", showNext);
  prevBtn.addEventListener("click", showPrev);

  // Automático cada 5 segundos
  setInterval(showNext, 5000);
});

