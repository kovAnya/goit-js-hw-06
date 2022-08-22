const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", () => {
  const validLength = validationInput.getAttribute("data-length");
  if (validationInput.value.length === Number(validLength)) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});
