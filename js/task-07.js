const textInput = document.getElementById("font-size-control");
const textOutput = document.getElementById("text");

textInput.addEventListener("input", () => {
  textOutput.style.fontSize = textInput.value + "px";
  textOutput.style.opacity = 1 - textInput.value / 100;
  // textOutput.style.opacity = 1 - parseFloat(textInput.value / 100);
  // textOutput.style.opacity = 1 - Number(textInput.value / 100);
  // console.log((typeof(textInput.value)));
});
