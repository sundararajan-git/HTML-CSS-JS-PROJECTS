const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const direction = document.getElementById("direction");
const preview = document.getElementById("preview");
const cssCode = document.getElementById("cssCode");

function generateGradient() {
    const grad = `linear-gradient(${direction.value}, ${color1.value}, ${color2.value})`;
    preview.style.background = grad;
    cssCode.value = `background: ${grad};`;
}

// Initialize
generateGradient();

// Update gradient live on change
color1.addEventListener("input", generateGradient);
color2.addEventListener("input", generateGradient);
direction.addEventListener("change", generateGradient);
