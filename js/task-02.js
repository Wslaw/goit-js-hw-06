const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];
// *********************************************
// ------------Variant 2------------------------
//
//
// const list = document.querySelector("#ingredients")

//  const liElements = ingredients.map((ingredient) =>
//    `<li class = "item"> ${ingredient}</li>`
//  );
// list.insertAdjacentHTML("beforeend", liElements.join(''));

// *********************************************
// ------------Variant 1------------------------
//
//
const list = document.querySelector("#ingredients");
const arr = [];

ingredients.map((ingredient) => {
  const newItemEl = document.createElement("li");
  console.log(newItemEl);
  newItemEl.textContent = ingredient;
  newItemEl.classList.add("item");
  newItemEl.style.listStyleType = "none";
  newItemEl.style.fontSize = "25px";
  newItemEl.style.fontWeight = "700";
  newItemEl.style.color = getRandomHexColor();
  arr.push(newItemEl);
});
list.append(...arr);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
