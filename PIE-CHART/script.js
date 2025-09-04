const canvas = document.getElementById('pieChart');
const ctx = canvas.getContext('2d');

const data = [10, 20, 30, 15, 25];
const colors = ["#f87171", "#60a5fa", "#facc15", "#34d399", "#a78bfa"];
const total = data.reduce((sum, val) => sum + val, 0);

let startAngle = 0;

data.forEach((value, index) => {
    const sliceAngle = (value / total) * 2 * Math.PI;

    // Draw slice
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.arc(canvas.width / 2, canvas.height / 2, 100, startAngle, startAngle + sliceAngle);
    ctx.closePath();
    ctx.fillStyle = colors[index];
    ctx.fill();

    startAngle += sliceAngle;
});