// dom elements
const colorInput = document.getElementById("colorInput");
const previewBox = document.getElementById("previewBox");
const colorCode = document.getElementById("colorCode");
const copyBtn = document.getElementById("copyBtn");
const randomBtn = document.getElementById("randomBtn");

colorInput.addEventListener("input", () => {
    const selectedColor = colorInput.value;
    previewBox.style.backgroundColor = selectedColor;
    colorCode.value = selectedColor;
});

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(colorCode.value);
    alert(`Copied ${colorCode.value} to clipboard!`);
});

randomBtn.addEventListener("click", () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    previewBox.style.backgroundColor = randomColor;
    colorCode.value = randomColor;
    colorInput.value = randomColor;
});
