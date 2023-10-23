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


function createBoxes(amount) {
  let arr = [];
  for (let i = 1; i <= amount; i+=1) {
    const el = `<div class = "box"  style ="
        background-color: ${getRandomHexColor()};    
    border: 1px solid #000;
    width: ${20 + 10 * i}px;
    height: ${20 + 10 * i}px;"
    ></div>`;
    arr.push(el)
   
  }
  divBoxes.innerHTML = arr.join('');

}


function handleClick() {
  amount = parseInt(inputNum.value);
}

function handleCreateClick() {
  createBoxes(amount);
    
  }
  
  function handleDestroyClick() {
destroyBoxes();
}
    
function destroyBoxes() {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => {
    if (box.innerHTML === '') {
      box.remove();
  }
})
       
   
  }



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
