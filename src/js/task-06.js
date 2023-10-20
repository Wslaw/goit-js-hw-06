const textInput = document.getElementById("validation-input");
const exampleLength = parseInt(textInput.getAttribute("data-length"));

textInput.addEventListener("blur", () => {
  
  textInput.classList.remove("invalid", "valid");
  
  exampleLength === textInput.value.trim().length
    
    ? textInput.classList.add("valid")
    : textInput.classList.add("invalid");     
});

