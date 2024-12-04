// Toggle mobile menu visibility
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("max-h-0"); // Hide menu
  mobileMenu.classList.toggle("max-h-screen"); // Show menu
});

// Ensure mobile menu is closed when switching to desktop
window.addEventListener("resize", () => {
  if (window.innerWidth >= 640) {
    mobileMenu.classList.add("max-h-0");
    mobileMenu.classList.remove("max-h-screen");
  }
});

