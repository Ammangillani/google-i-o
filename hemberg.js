let close = document.getElementById("close");
let open = document.getElementById("open");
let nav = document.querySelector(".nav-content");
let spanclose = document.getElementById("spanclose");

function openmenu() {
  nav.style.right = "20px";
  open.style.display = "none";
  spanclose.style.display = "block";
}
function closemenu() {
  nav.style.right = "-1000px";
  open.style.display = "block";
  spanclose.style.display = "none";
}
close.addEventListener("click", closemenu);
