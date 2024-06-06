document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById('menu-icon-h');
  const navbar = document.querySelector('.navbar-h');

  menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('open-menu-h');
  });
});