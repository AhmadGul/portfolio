
//code for typing effect
var type = new Typed(".typing", {
  strings: ["", "Web Developer", "Web Designer", "Wordpress Developer", "MERN Stack Developer", "Shopify Developer"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

//coding for active menu/section
window.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');
  const navbarLinks = document.querySelectorAll('.nav li a');

  // Function to highlight the current section in the navbar
  const highlightNavbar = () => {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) { }

    navbarLinks.forEach(link => link.classList.remove('active'));
    navbarLinks[index].classList.add('active');
  };

  // Add scroll event listener
  window.addEventListener('scroll', highlightNavbar);

  // Initial call to highlightNavbar
  highlightNavbar();
});
