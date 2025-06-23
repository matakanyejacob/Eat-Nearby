let slideIndex = 0;
showSlides(slideIndex);

function showSlides(n) {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  
  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;

  slides.forEach((slide) => (slide.style.display = "none"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slides[slideIndex].style.display = "block";
  dots[slideIndex].classList.add("active");
}

function nextSlide() {
  slideIndex++;
  showSlides(slideIndex);
}

function prevSlide() {
  slideIndex--;
  showSlides(slideIndex);
}

document.querySelector('.next').addEventListener('click', () => {
  nextSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
  prevSlide();
});

document.querySelectorAll('.dot').forEach((dot, idx) => {
  dot.addEventListener('click', () => {
    slideIndex = idx;
    showSlides(slideIndex);
  });
});

// Optional: auto slideshow every 5 seconds
setInterval(() => {
  nextSlide();
}, 5000);
