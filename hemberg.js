let lowOpacity = document.querySelector(".fullBody-blur");

function openMenu() {
  document.querySelector(".nav-strart .navigation").classList.add("show");
  document.querySelector(".nav-end").classList.add("show");
  document.querySelector(".mobile-menu").classList.add("show");
  lowOpacity.style.display = "block";
}

function closeMenu() {
  document.querySelector(".nav-strart .navigation").classList.remove("show");
  document.querySelector(".nav-end").classList.remove("show");
  document.querySelector(".mobile-menu").classList.remove("show");
  lowOpacity.style.display = "none";
}
