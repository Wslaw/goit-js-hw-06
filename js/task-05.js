// *************Variant 2********************************
const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", () => {
    console.log(nameInput.value);
    if (nameInput.value.trim() === '') {
        nameOutput.textContent = "Anonymous";
    } else {
        nameOutput.textContent = nameInput.value;

    }
})

