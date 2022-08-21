const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listItems = ingredients.reduce((ingredientsList, ingredient) => {
  const item = document.createElement("li");
  item.classList.add("item");
  item.textContent = ingredient;
  ingredientsList.push(item);
  return ingredientsList;
}, []);

const list = document.querySelector("#ingredients");
list.append(...listItems);
