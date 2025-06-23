document.addEventListener('DOMContentLoaded', () => {
  const sideNav = document.getElementById("sideNav");
  const hamburger = document.getElementById("hamburger");
  const closeNav = document.getElementById("closeNav");

  // Open/Close side nav
  hamburger.onclick = () => sideNav.classList.add("open");
  closeNav.onclick = () => sideNav.classList.remove("open");

  // Scroll reveal
  const faders = document.querySelectorAll('.fade-in');
  const options = {
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px"
  };

  const revealOnScroll = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, options);

  faders.forEach(fader => revealOnScroll.observe(fader));
});
