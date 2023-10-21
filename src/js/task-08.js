const input = document.querySelector(".login-form");

input.addEventListener("submit", function (event) {
    event.preventDefault();

    const cloneInput = { input };
    const dataInput = {};

    cloneInput.forEach((value, key) => {
        dataInput[key] = value;
    });

    if (!dataInput.email || !dataInput.password) {
        alert("Все поля должны быть заполнены!");
        return;
    }

    console.log(dataInput);
        input.reset();
});
