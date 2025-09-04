let currentStep = 0;
const steps = document.querySelectorAll(".step");
const bars = document.querySelectorAll(".step-bar");

function showStep(step) {
    steps.forEach((s, i) => s.classList.toggle("active", i === step));
    bars.forEach((b, i) => b.classList.toggle("bg-blue-500", i <= step));
    bars.forEach((b, i) => b.classList.toggle("bg-gray-300", i > step));
}

function nextStep() {
    if (currentStep < steps.length - 1) {
        currentStep++;
        showStep(currentStep);
    }
}

function prevStep() {
    if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
    }
}

document.getElementById("wizardForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Form submitted! (UI only)");
});