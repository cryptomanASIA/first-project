const navLinks = document.querySelectorAll('nav a');
let currentLink = 0;

window.addEventListener('wheel', function(event) {
  event.preventDefault();
  const delta = event.deltaY;
  if (delta > 0 && currentLink < navLinks.length - 1) {
    currentLink++;
  } else if (delta < 0 && currentLink > 0) {
    currentLink--;
  }
  setActiveLink();
});

function setActiveLink() {
  navLinks.forEach((link, index) => {
    if (index === currentLink) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}
