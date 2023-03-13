const menuBtn = document.querySelector(".nav__menu-button");
const menu = menuBtn.nextElementSibling;
menuBtn.addEventListener("click", (e) => {
  menu.classList.toggle("active");
  if (menu.classList.contains("active")) {
    document.body.setAttribute("style", "height: 100vh;overflow: hidden;");
    e.target.setAttribute("src", "assets/images/icon-close.svg");
    e.target.previousElementSibling.setAttribute(
      "src",
      "assets/images/footer-logo-bookmark.svg"
    );
  } else {
    document.body.setAttribute("style", "");
    e.target.setAttribute("src", "assets/images/icon-hamburger.svg");
    e.target.previousElementSibling.setAttribute(
      "src",
      "assets/images/logo-bookmark.svg"
    );
  }
});
