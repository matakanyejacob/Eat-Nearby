document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const sideNav = document.getElementById('sideNav');
  const closeNav = document.getElementById('closeNav');

  hamburger.addEventListener('click', () => {
    sideNav.style.right = '0';
  });

  closeNav.addEventListener('click', () => {
    sideNav.style.right = '-300px';
  });
});
