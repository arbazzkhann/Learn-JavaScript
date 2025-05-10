const form = document.querySelector("form");


form.addEventListener("submit",(e) => {
    e.preventDefault();


    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#width").value);

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.6) {
        document.querySelector("#final-result").innerText = `Your BMI is ${bmi} and You are in Under-Weight`;
    }
    if (bmi > 18.6 || bmi < 24.9) {
        document.querySelector("#final-result").innerText = `Your BMI is ${bmi} and You are in Normal-Weight`;
    }
    if (bmi > 24.9) {
        document.querySelector("#final-result").innerText = `Your BMI is ${bmi} and You are in Over-Weight`;
    }
    if (height == "" || weight == "" || height <= 0 || weight <= 0 || isNaN(weight) || isNaN(height)) {
        document.querySelector("#final-result").innerText = "Please Give Valid Number";
    }
})

document.body.style.backgroundColor="#212121"
document.body.style.color="white"