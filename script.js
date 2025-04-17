/* script.js */

// Smooth scroll for navigation links
document.querySelectorAll('nav#navbar a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetID = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetID);
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  });
});
