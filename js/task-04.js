let counterValue = 0;

const decr = document.querySelector("[data-action = 'decrement']");
const incr = document.querySelector("[data-action = 'increment']");
const value = document.querySelector("#value");

decr.addEventListener("click", () => {
  counterValue -= 1;
  value.textContent = counterValue;
});

incr.addEventListener("click", () => {
  counterValue += 1;
  value.textContent = counterValue;
});
