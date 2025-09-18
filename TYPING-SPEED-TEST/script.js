const texts = [
    "The quick brown fox jumps over the lazy dog.",
    "Learning to code is both fun and challenging.",
    "Practice makes perfect in everything you do.",
    "JavaScript is a versatile language for web development.",
];

const textDisplay = document.getElementById("textDisplay");
const typingInput = document.getElementById("typingInput");
const timeEl = document.getElementById("time");
const wpmEl = document.getElementById("wpm");
const errorsEl = document.getElementById("errors");

let timer = 60;
let interval;
let currentText = "";
let errors = 0;
let started = false;

function startTest() {
    typingInput.value = "";
    errors = 0;
    timer = 60;
    timeEl.textContent = timer;
    wpmEl.textContent = 0;
    errorsEl.textContent = errors;
    started = false;
    currentText = texts[Math.floor(Math.random() * texts.length)];
    displayText(currentText);
    clearInterval(interval);
}

function displayText(text) {
    textDisplay.innerHTML = "";
    text.split("").forEach((char) => {
        const span = document.createElement("span");
        span.textContent = char;
        textDisplay.appendChild(span);
    });
}

typingInput.addEventListener("input", () => {
    const input = typingInput.value;
    const spans = textDisplay.querySelectorAll("span");
    errors = 0;

    if (!started) {
        started = true;
        interval = setInterval(() => {
            timer--;
            timeEl.textContent = timer;
            if (timer <= 0) {
                clearInterval(interval);
                typingInput.disabled = true;
            }
        }, 1000);
    }

    spans.forEach((span, idx) => {
        const char = input[idx];
        if (char == null) {
            span.classList.remove("correct", "incorrect");
        } else if (char === span.textContent) {
            span.classList.add("correct");
            span.classList.remove("incorrect");
        } else {
            span.classList.add("incorrect");
            span.classList.remove("correct");
            errors++;
        }
    });

    errorsEl.textContent = errors;
    const wordsTyped = input.trim().split(" ").length;
    wpmEl.textContent = wordsTyped;
});

startTest();