/* ==========Show  Menu========== */
const navMenu = document.getElementById("navbar-menu"),
  btnMenu = document.getElementById("btn-menu"),
  btnClose = document.getElementById("btn-close");

/* show menu */
if (btnMenu) {
  btnMenu.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
/* hide menu */
if (btnClose) {
  btnClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== CHANGE BACKGROUND HEADER ===============*/
const stickyHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("sticky-header")
    : header.classList.remove("sticky-header");
};
window.addEventListener("scroll", stickyHeader);
