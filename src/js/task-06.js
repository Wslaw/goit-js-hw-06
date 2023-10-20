// const textInput = document.querySelector("#validation-input");

// // const setFocusBtn = document.querySelector('[data-length="6"]');


// textInput.addEventListener("keydown", (event) => {
//     console.log(event.key);
//   if (event.key === "Enter") {
//     textInput.value = "";
//   }
// });


const input = document.getElementById("validation-input");

input.addEventListener("focus", () => {
  input.classList.remove("valid", "invalid");
});

input.addEventListener("blur", () => {
  const expectedLength = parseInt(input.getAttribute("data-length"));
  const currentLength = input.value.length;

  if (currentLength === expectedLength) {
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
});

