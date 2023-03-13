/*
- Receive an error message when the newsletter form is submitted if:
  - The input field is empty
  - The email address is not formatted correctly
  // email address contains ["." , "@"] / index of "." is < index of "@"
  
*/
const input = document.querySelector(".form__email-input");
const submitButton = document.querySelector("[submitButton]");
const ErrorMessage = document.querySelector(".form__email");
document.querySelector(".form").addEventListener("submit", (e) => {
  let i = 0;
  if (input.value.length < 1) {
    e.preventDefault();
    ErrorMessage.classList.add("active");
  }
  for (item of input.value) {
    if (item === "@" || item === ".") {
      i++;
    }
  }
  if (i < 2) {
    e.preventDefault();
    ErrorMessage.classList.add("active");
  }
});
