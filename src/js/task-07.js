const textInput = document.getElementById("font-size-control");
const textOutput = document.getElementById("text");

textInput.addEventListener("input", () => {       
   
    textOutput.style.fontSize = textInput.value + "px";
   
});