const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const calculateBtn = document.getElementById("calculateBtn");
const resultDiv = document.getElementById("result");

calculateBtn.addEventListener("click", () => {

    const weight = parseFloat(weightInput.value);
    const heightCm = parseFloat(heightInput.value);

    if (!weight || !heightCm) {
        resultDiv.textContent = "Please enter valid values!";
        resultDiv.style.color = "red";
        return;
    }

    const heightM = heightCm / 100;
    const bmi = weight / (heightM * heightM);
    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    }
    else if (bmi < 25) {
        category = "Normal weight";
    }
    else if (bmi < 30) {
        category = "Overweight";
    }
    else {
        category = "Obese";
    }

    if (category === "Normal weight") {
        resultDiv.style.color = "green";
    }
    else if (category === "Underweight") {
        resultDiv.style.color = "orange";
    }
    else {
        resultDiv.style.color = "red";
    }

    resultDiv.textContent = `BMI: ${bmi.toFixed(2)} (${category})`;

});

weightInput.addEventListener('input', () => {
    resultDiv.textContent = ``;
})

heightInput.addEventListener('input', () => {
    resultDiv.textContent = ``;
})
