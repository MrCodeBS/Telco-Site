const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".carousel-dot");
let currentSlide = 0;

function updateCarousel() {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
  });

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index;
    updateCarousel();
  });
});

// Auto-advance carousel
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateCarousel();
}, 5000);
