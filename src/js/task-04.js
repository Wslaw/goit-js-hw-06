let counterValue = 0;
const span = document.querySelector("#value");
const buttons = document.querySelectorAll("#counter button");
const decrement = buttons[0];
const increment = buttons[1];


decrement.addEventListener("click", () => {
  counterValue -= 1;
  span.textContent = counterValue;  
});

increment.addEventListener("click", () => {
    counterValue += 1;   
    span.textContent = counterValue;    
});
