const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// *********************************************
// ------------Variant 2------------------------
// 
// 
const list = document.querySelector("#ingredients")

 const liElements = ingredients.map((ingredient) => 
   `<li class = "item"> ${ingredient}</li>`
 );
list.insertAdjacentHTML("beforeend", liElements.join(''));


// *********************************************
// ------------Variant 1------------------------
// 
// 
// const list = document.querySelector("#ingredients");
// const arr = [];

// ingredients.map((ingredient) => {
//   const newItemEl = (document.createElement("li"));
//   console.log(newItemEl);
//   newItemEl.textContent = ingredient;
//   newItemEl.classList.add("item");
//   arr.push(newItemEl);
// });
// list.append(...arr);