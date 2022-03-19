let heightElement = document.querySelector(".js-height");
let weightElement = document.querySelector(".js-weight");
let resultElement = document.querySelector(".js-result");
let form = document.querySelector(".js-form")
let range = document.querySelector(".js-range")

console.log(weightElement)

form.addEventListener("submit", (event) => {

    event.preventDefault();


    let height = heightElement.value;
    let weight = weightElement.value;

    let result = weight / ((height/100)**2);

    if (result<16) {
        range.innerText=" (Severe Thinness)**"
    } else if (result>= 16 && result<17) {
        range.innerText=" (Moderate Thinness)**"
    } else if (result>=17 && result<18.5) {
        range.innerText=" (Mild Thinness)**"
    } else if (result>=18.5 && result<25) {
        range.innerText=" (Normal)**"
    } else if (result>=25 && result<30) {
        range.innerText=" (Overweight)**"
    } else if (result>=30 && result<35) {
        range.innerText=" (Obese Class I)**"
    } else if (result>=35 && result<40) {
        range.innerText=" (Obese Class II)**"
    } else if (result>=40) {
        range.innerText=" (Obese Class III)**"
    }
    resultElement.innerText = `${result.toFixed(1)}`
})


