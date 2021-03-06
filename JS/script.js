{
    const welcome = () => {
        console.log("Hello World!");
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const range = document.querySelector(".js-range")
        const heightElement = document.querySelector(".js-height");
        const weightElement = document.querySelector(".js-weight");

        const height = heightElement.value;
        const weight = weightElement.value;

        let result = weight / ((height / 100) ** 2);

        if (result < 16) {
            range.innerText = " (Severe Thinness)**"
        } else if (result >= 16 && result < 17) {
            range.innerText = " (Moderate Thinness)**"
        } else if (result >= 17 && result < 18.5) {
            range.innerText = " (Mild Thinness)**"
        } else if (result >= 18.5 && result < 25) {
            range.innerText = " (Normal)**"
        } else if (result >= 25 && result < 30) {
            range.innerText = " (Overweight)**"
        } else if (result >= 30 && result < 35) {
            range.innerText = " (Obese Class I)**"
        } else if (result >= 35 && result < 40) {
            range.innerText = " (Obese Class II)**"
        } else if (result >= 40) {
            range.innerText = " (Obese Class III)**"
        }
        resultText(result, weight, height, range);
    }

    const resultText = (result, weight, height, range) => {

        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${result.toFixed(1)}${range.innerText}`
    }

    const init = () => {

        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);
        welcome();
    }

    init();

}



