const playBtn = document.getElementById('playBtn');
const progressBar = document.getElementById('progressBar');

let isPlaying = false;

playBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;

    if (isPlaying) {
        document.querySelector('.feather-pause').classList.remove("hidden")
        document.querySelector('.feather-play').classList.add("hidden")
    } else {
        document.querySelector('.feather-pause').classList.add("hidden")
        document.querySelector('.feather-play').classList.remove("hidden")
    }
});

let progress = 0;
setInterval(() => {
    if (isPlaying) {
        progress += 0.5;
        if (progress > 100) progress = 0;
        progressBar.value = progress;
    }
}, 500);