let heightElement = document.querySelector(".js-height");
let weightElement = document.querySelector(".js-weight");
let resultElement = document.querySelector(".js-result");
let form = document.querySelector(".js-form")

console.log(weightElement)

form.addEventListener("submit", (event) => {

    event.preventDefault();


    let height = heightElement.value;
    let weight = weightElement.value;

    let result = weight / ((height/100)**2);
    resultElement.innerText = `${result.toFixed(1)}`
})


