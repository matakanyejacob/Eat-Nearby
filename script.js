document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const sideNav = document.getElementById("sideNav");
  const closeNav = document.getElementById("closeNav");

  hamburger.addEventListener("click", () => {
    sideNav.style.left = "0";
  });

  closeNav.addEventListener("click", () => {
    sideNav.style.left = "-250px";
  });
});
