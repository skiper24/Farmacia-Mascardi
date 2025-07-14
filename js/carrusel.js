document.addEventListener("DOMContentLoaded", () => {
  const slide = document.querySelector(".carrusel-slide");
  const images = document.querySelectorAll(".carrusel-slide img");
  const prevBtn = document.querySelector(".carrusel-btn.prev");
  const nextBtn = document.querySelector(".carrusel-btn.next");

  let currentIndex = 0;
  const totalSlides = images.length;
  const visibleSlides = 4; // las originales, sin contar duplicados

  function updateSlide(animate = true) {
    if (!animate) {
      slide.style.transition = "none";
    } else {
      slide.style.transition = "transform 1s ease";
    }
    slide.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function showNext() {
    currentIndex++;
    updateSlide();
    if (currentIndex === totalSlides - 1) {
      setTimeout(() => {
        currentIndex = 1;
        updateSlide(false);
      }, 1000); // tiempo exacto de la transición
    }
  }

  function showPrev() {
    if (currentIndex === 0) {
      currentIndex = totalSlides - visibleSlides - 1;
      updateSlide(false);
    }
    setTimeout(() => {
      currentIndex--;
      updateSlide();
    }, 20);
  }

  nextBtn.addEventListener("click", showNext);
  prevBtn.addEventListener("click", showPrev);

  // Automático
  setInterval(showNext, 5000);
});
