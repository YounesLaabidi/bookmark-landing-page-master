const qButtons = document.querySelectorAll(".q");
qButtons.forEach((button, index) => {
  button.addEventListener("click", (e) => {
    e.target.classList.toggle("active");
    if (!e.target.classList.contains("active")) {
      e.target.nextElementSibling.setAttribute("style", "display : none");
    } else {
      e.target.nextElementSibling.setAttribute("style", "display : block");
    }
  });
});
