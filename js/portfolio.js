/** Set up mobile menu start */

const menuOverlay = document.querySelector("#menu-overlay");
const mobileMenuButton = document.querySelector("#mobile-menu-btn");

function mobileMenuToogle() {
  alert('mobile menu toggle');
  menuOverlay.style.width = "100%";
}

function closeMobileMenu() {
  menuOverlay.style.width = "0";
}

mobileMenuButton.addEventListener("click", () => {
  alert('i got here');
  mobileMenuToogle();
});

const mobileMenuLinks = document.querySelectorAll(".menu-mobile li a");
for (let i = 0; i < mobileMenuLinks.length; i += 1) {
  mobileMenuLinks[i].addEventListener("click", () => {
    closeMobileMenu();
  });
}

/** Set up mobile menu finish */