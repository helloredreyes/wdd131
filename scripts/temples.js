// toggle menu
document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('header nav');

  menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('menu-open');
      if (navMenu.classList.contains('menu-open')) {
          menuToggle.innerHTML = '&times;'; // "X"
      } else {
          menuToggle.innerHTML = '&#9776;'; // "☰"
      }
  });
});



