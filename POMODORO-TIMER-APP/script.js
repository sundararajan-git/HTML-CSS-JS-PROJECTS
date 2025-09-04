let workDuration = 25 * 60; // seconds
let breakDuration = 5 * 60;
let timeLeft = workDuration;
let isRunning = false;
let onBreak = false;
let timerInterval = null;

const timerEl = document.getElementById("timer");
const statusEl = document.getElementById("status");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const workTimeInput = document.getElementById("workTime");
const breakTimeInput = document.getElementById("breakTime");

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60)
        .toString()
        .padStart(2, "0");
    const seconds = (timeLeft % 60).toString().padStart(2, "0");
    timerEl.textContent = `${minutes}:${seconds}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        statusEl.textContent = onBreak ? "Status: Break" : "Status: Work";
        timerInterval = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateTimerDisplay();
            } else {
                clearInterval(timerInterval);
                isRunning = false;
                onBreak = !onBreak;
                timeLeft = onBreak ? breakDuration : workDuration;
                updateTimerDisplay();
                startTimer(); // auto start next session
            }
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    statusEl.textContent = "Status: Paused";
}

function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    onBreak = false;
    workDuration = parseInt(workTimeInput.value) * 60;
    breakDuration = parseInt(breakTimeInput.value) * 60;
    timeLeft = workDuration;
    updateTimerDisplay();
    statusEl.textContent = "Status: Ready";
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

updateTimerDisplay();