const btnHor = document.querySelector(".btn1");
const btnVer = document.querySelector(".btn2");
const header = document.querySelector("header");
const horizon = document.querySelector(".nav_items");

btnHor.addEventListener("click", () => {
  btnHor.classList.add("active");
  header.classList.add("header");
  horizon.classList.add("horizontal", "lists");
  btnVer.classList.remove("active");
});
btnVer.addEventListener("click", () => {
  btnVer.classList.add("active");
  header.classList.remove("header");
  horizon.classList.remove("horizontal", "lists");
  btnHor.classList.remove("active");
});
