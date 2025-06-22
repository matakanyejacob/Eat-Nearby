document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('navigateBtn');
  btn.addEventListener('click', () => {
    // Example: navigate to Gallery section
    location.hash = '#gallery';
  });
});
document.addEventListener('DOMContentLoaded', () => {
  // Existing button click code
  const btn = document.getElementById('navigateBtn');
  btn.addEventListener('click', () => {
    location.hash = '#gallery';
  });

  // Fade-in on scroll
  const fadeElements = document.querySelectorAll('section');

  const fadeInOnScroll = () => {
    fadeElements.forEach((el, index) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.style.animationDelay = `${index * 0.3}s`;
        el.classList.add('fade-in');
      }
    });
  };

  // Run once and on scroll
  fadeInOnScroll();
  window.addEventListener('scroll', fadeInOnScroll);
});
