const playBtn = document.getElementById('playBtn');
const progressBar = document.getElementById('progressBar');

let isPlaying = false;

playBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;
    playBtn.textContent = isPlaying ? "⏸️" : "▶️";
});

// Simulate progress bar
let progress = 0;
setInterval(() => {
    if (isPlaying) {
        progress += 0.5;
        if (progress > 100) progress = 0;
        progressBar.value = progress;
    }
}, 500);