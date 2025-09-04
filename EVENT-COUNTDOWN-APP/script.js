const startBtn = document.getElementById("startBtn");
const countdownEl = document.getElementById("countdown");
const eventDateInput = document.getElementById("eventDate");
const statusEl = document.getElementById("status");
let countdownInterval;

function startCountdown() {
    const eventDate = new Date(eventDateInput.value);
    if (isNaN(eventDate.getTime())) {
        statusEl.textContent = "Please select a valid date and time!";
        statusEl.classList.add("text-red-500");
        return;
    }
    clearInterval(countdownInterval);
    statusEl.textContent = "";

    countdownInterval = setInterval(() => {
        const now = new Date();
        const diff = eventDate - now;

        if (diff <= 0) {
            clearInterval(countdownInterval);
            countdownEl.textContent = "00d 00h 00m 00s";
            statusEl.textContent = "🎉 Event Started!";
            statusEl.classList.add("text-green-500");
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        countdownEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}

startBtn.addEventListener("click", startCountdown);