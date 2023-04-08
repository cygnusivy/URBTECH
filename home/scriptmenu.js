const menuButton = document.getElementById("menu-button");
const menuButtonMenu = document.getElementById("menu-button-menu");
const menu = document.getElementById("menu");
const overlay = document.querySelector("#overlay");
const barraPesquisa = document.querySelector(".barrapesquisa");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("active");
  barraPesquisa.classList.toggle("active");
  overlay.classList.toggle("active");
});

menuButtonMenu.addEventListener("click", () => {
  menu.classList.remove("active");
  barraPesquisa.classList.remove("active");
  overlay.classList.remove("active");
});