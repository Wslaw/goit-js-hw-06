const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients")
const arr = [];

ingredients.map((ingredient) => {  
  const newItemEl = (document.createElement("li"));
  newItemEl.textContent = ingredient; 
  newItemEl.classList.add("item"); 
  arr.push(newItemEl);
  
})

list.append(...arr);  
