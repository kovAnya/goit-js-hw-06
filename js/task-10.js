function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

createButton.addEventListener("click", createButtonClick);

destroyButton.addEventListener("click", () => {
  boxes.innerHTML = "";
  input.value = null;
});

function createButtonClick() {
  const boxAmount = Number(input.value);
  createBoxes(boxAmount);
}

function createBoxes(amount) {
  const markup = [];
  let divSize = 30;
  for (let i = 1; i <= amount; i += 1) {
    const newDiv = document.createElement("div");
    newDiv.style.backgroundColor = getRandomHexColor();
    divSize += 10;
    newDiv.style.width = `${divSize}px`;
    newDiv.style.height = `${divSize}px`;
    markup.push(newDiv);
  }
  boxes.append(...markup);
  input.value = null;
}
