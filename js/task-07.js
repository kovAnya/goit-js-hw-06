const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

let newFontSize = fontSizeControl.value;
text.style.fontSize = `${newFontSize}px`;

fontSizeControl.addEventListener("input", () => {
  newFontSize = fontSizeControl.value;
  text.style.fontSize = `${newFontSize}px`;
});
