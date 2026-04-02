// SquareUp — Mobile Nav Toggle
// Place this file as nav.js and add before </body>:
// <script src="nav.js"></script>

document.addEventListener('DOMContentLoaded', function () {

  // 1. Inject the hamburger button into the navbar
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelector('.nav-links');

  if (!navbar || !navLinks) return;

  const hamburger = document.createElement('button');
  hamburger.classList.add('hamburger');
  hamburger.setAttribute('aria-label', 'Toggle navigation');
  hamburger.innerHTML = `
    <span></span>
    <span></span>
    <span></span>
  `;

  // Insert hamburger before the nav-links
  navbar.insertBefore(hamburger, navLinks);

  // 2. Toggle open/close on click
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // 3. Close the menu when a nav link is clicked (good UX for single-page sites)
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  // 4. Close the menu when clicking outside of the navbar
  document.addEventListener('click', function (e) {
    if (!navbar.contains(e.target)) {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    }
  });

});