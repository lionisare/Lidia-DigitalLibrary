/* ==========Show  Menu========== */
const navMenu = document.querySelector(".show-menu"),
  btnMenu = document.getElementById("btn-menu"),
  btnClose = document.getElementById("btn-close");

/* show menu */
if (btnMenu) {
  btnMenu.addEventListener("click", () => {
    navMenu.classList.toggle("right-1");
  });
}
/* hide menu */
if (btnClose) {
  btnClose.addEventListener("click", () => {
    navMenu.classList.toggle("right-0");
  });
}
