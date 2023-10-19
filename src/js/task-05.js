// *************Variant 2********************************
// const nameInput = document.getElementById("name-input");
// const nameOutput = document.getElementById("name-output");

// nameInput.addEventListener("input", () => {
//     console.log(nameInput.value);
//     if (nameInput.value.trim() === '') {
//         nameOutput.textContent = "Anonymous";
//     } else {
//         nameOutput.textContent = nameInput.value;
        
//     }
// })
// ***********Variant 1*********************************
const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", () => {
  // event.preventDefault();
  nameInput.value.trim() === "" ? (nameOutput.textContent = "Anonymous") : (nameOutput.textContent = nameInput.value);
});
