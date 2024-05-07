function openMenu() {
  document.getElementById("mobileMenu").classList.add("show");
}

function closeMenu() {
  document.getElementById("mobileMenu").classList.remove("show");
}

document.getElementById("openMenu").addEventListener("click", openMenu);
document.getElementById("closeMenu").addEventListener("click", closeMenu);
