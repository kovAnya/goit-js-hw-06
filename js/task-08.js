const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value && password.value) {
    const resultObj = {
      email: email.value,
      password: password.value,
    };
    loginForm.reset();
    return console.log(resultObj);
  }
  alert("Всі поля повинні бути заповнені!");
});
