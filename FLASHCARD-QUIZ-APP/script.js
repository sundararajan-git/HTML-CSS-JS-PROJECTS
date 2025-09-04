const flashcards = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is 2 + 2?", answer: "4" },
    {
        question: "What is the largest planet in our solar system?",
        answer: "Jupiter",
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answer: "William Shakespeare",
    },
];

let currentIndex = 0;

const flashcardEl = document.getElementById("flashcard");
const frontEl = flashcardEl.querySelector(".flashcard-front");
const backEl = flashcardEl.querySelector(".flashcard-back");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function loadFlashcard(index) {
    frontEl.textContent = flashcards[index].question;
    backEl.textContent = flashcards[index].answer;
    flashcardEl.classList.remove("flipped");
}

flashcardEl.addEventListener("click", () => {
    flashcardEl.classList.toggle("flipped");
});

prevBtn.addEventListener("click", () => {
    currentIndex =
        (currentIndex - 1 + flashcards.length) % flashcards.length;
    loadFlashcard(currentIndex);
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % flashcards.length;
    loadFlashcard(currentIndex);
});

loadFlashcard(currentIndex);