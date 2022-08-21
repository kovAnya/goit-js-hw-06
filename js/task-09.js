function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const colorName = body.querySelector(".color");
const button = body.querySelector(".change-color");

button.addEventListener("click", () => {
  const bgColor = getRandomHexColor();
  body.style.backgroundColor = bgColor;
  colorName.textContent = bgColor;
});
