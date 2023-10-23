const input = document.querySelector(".login-form");

input.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputElements = input.elements;
  const dataInput = {};

  for (let i = 0; i < inputElements.length; i += 1) {
    const element = inputElements[i];
    if (element.type !== "submit") {
      if (element.value.trim() === "") {
        alert("All fields must be fill");
        return;
      }

      dataInput[element.name] = element.value;
    }
  }
  console.log(dataInput);
  input.reset();
});
