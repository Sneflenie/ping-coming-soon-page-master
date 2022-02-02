const form = document.querySelector("form");
const email = document.querySelector(".input-space");
const msg = document.querySelector(".msg");

form.addEventListener("submit", (e) => {
  // refresh the page
  e.preventDefault();

  const emailValue = email.value;

  //check if it is a valid email
  if (!validateEmail(emailValue)) {
    email.classList.add("error");
    msg.classList.add("error");
  } else {
    email.classList.remove("error");
    msg.classList.remove("error");
  }

  function validateEmail(email) {
    var re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
});
