// ************************************
console.log('Hello!');
const inputNumber = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");

inputNumber.addEventListener('input', handleClick);
btnCreate.addEventListener('click', handleCreateClick);
btnDestroy.addEventListener('click', handleDestroyClick);

function handleClick() {
  console.log(inputNumber.value);
  console.log("click");
}

function handleCreateClick() {
  // console.log("click");
  // btnCreate.style.backgroundColor = "#336688";
  console.log("btnCreate");
}

function handleDestroyClick() {
  // console.log("click");
  console.log("btnDestroy");
}
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
