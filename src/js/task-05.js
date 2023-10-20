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
  nameInput.value = nameInput.value.replace(/[^a-zA-Zа-яА-Я]/g, ""); // Оставляем только буквы
  nameOutput.textContent = nameInput.value.trim() === "" ? "Anonymous" : nameInput.value;
});
nameInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
    nameInput.value = "";
  }
});

