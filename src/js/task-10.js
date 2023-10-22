// ************************************
console.log('Hello!');
const inputNum = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const divBoxes = document.getElementById("boxes")

inputNum.addEventListener('input', handleClick);
btnCreate.addEventListener("click", handleCreateClick);
btnDestroy.addEventListener('click', handleDestroyClick);

let amount = 0;
let arr = [];
let el = '';
let unic = 30;

function createBoxes(amount) {
  for (let i = 0; i <= amount; i+=1) {
    el = `<divl class = box  
    padding: 10px;
    background-color: #212121;    
    border: 1px
    width: ${unic} + 10 * ${i} + px;
    height: ${unic} + 10 * ${i} + px;
    >Send</divl>`;
    arr.push(el)
   
  }
  divBoxes.innerHTML = arr.join();

}


function handleClick() {
  amount = inputNum.value;
}

function handleCreateClick() {
  createBoxes(amount);
    
  }
  
  function handleDestroyClick() {
      // console.log("click");
    console.log(arr.join(' '));
  // console.log("btnDestroy");
}
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
