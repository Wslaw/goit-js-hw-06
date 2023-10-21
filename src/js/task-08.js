const input = document.querySelector(".login-form");
const btn = document.querySelector("button")
let email = "";
let password = "";
input.addEventListener("input", handleInput);
btn.addEventListener("click", handleBtn);

function handleInput(event) {
   
    email = event.currentTarget[0].value;
    password = event.currentTarget[1].value;

    console.dir( email);
    console.dir(password);
};
function handleBtn(event) {
    event.preventDefault();
    if (email && password) {
        console.log("true");
    } else {
        console.log("false");
    alert("все поля должны быть заполнены");
    };
    const resultObjectField = {};


}