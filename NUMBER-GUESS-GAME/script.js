const min = 1;
const max = 100;
let secretNumber = Math.floor(Math.random() * (max - min + 1)) + min;
let attemptsLeft = 10;

const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const feedback = document.getElementById('feedback');
const attemptsEl = document.getElementById('attempts');
const resetBtn = document.getElementById('resetBtn');

document.getElementById('min').textContent = min;
document.getElementById('max').textContent = max;

function checkGuess() {
    const guess = Number(guessInput.value);
    if (!guess || guess < min || guess > max) {
        feedback.textContent = `Please enter a number between ${min} and ${max}.`;
        feedback.classList.add('text-red-500');
        return;
    }

    attemptsLeft--;
    attemptsEl.textContent = attemptsLeft;

    if (guess === secretNumber) {
        feedback.textContent = `🎉 Correct! The number was ${secretNumber}.`;
        feedback.classList.remove('text-red-500');
        feedback.classList.add('text-green-500');
        guessBtn.disabled = true;
    } else if (attemptsLeft === 0) {
        feedback.textContent = `😢 Game Over! The number was ${secretNumber}.`;
        feedback.classList.remove('text-green-500');
        feedback.classList.add('text-red-500');
        guessBtn.disabled = true;
    } else {
        feedback.textContent = guess < secretNumber ? '⬆️ Too low!' : '⬇️ Too high!';
        feedback.classList.remove('text-green-500');
        feedback.classList.add('text-yellow-500');
    }

    guessInput.value = '';
    guessInput.focus();
}

guessBtn.addEventListener('click', checkGuess);
guessInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkGuess();
});

resetBtn.addEventListener('click', () => {
    secretNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    attemptsLeft = 10;
    attemptsEl.textContent = attemptsLeft;
    feedback.textContent = '';
    guessBtn.disabled = false;
    guessInput.value = '';
    guessInput.focus();
});