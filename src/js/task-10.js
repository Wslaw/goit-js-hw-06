// ************************************
console.log('Hello!');
const inputNumber = document.querySelector('#controls');
const btnCreate = document.querySelector('[data - create]');
const btnDestroy = document.querySelector('[data - destroy]');

inputNumber.addEventListener('input', handleClick);
btnCreate.addEventListener('click', handleCreateClick);
btnDestroy.addEventListener('click', handleDestroyClick);

function handleClick() {
  console.log(inputNumber.value);
}

function handleCreateClick() {
  console.log('click', btnCreate.value);
}

function handleDestroyClick() {
  console.log('click', btnDestroy.value);
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
