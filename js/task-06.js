const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("focus", () => {
  validationInput.classList.remove("valid", "invalid");
});

validationInput.addEventListener("blur", () => {
  const validLength = validationInput.getAttribute("data-length");
  if (validationInput.value.length === Number(validLength)) {
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.add("invalid");
  }
});
