const canvas = document.getElementById("barChart");
const ctx = canvas.getContext("2d");

const data = [12, 19, 8, 15, 10];
const labels = ["Red", "Blue", "Yellow", "Green", "Purple"];
const colors = ["#f87171", "#60a5fa", "#facc15", "#34d399", "#a78bfa"];

const chartWidth = canvas.width - 50;
const chartHeight = canvas.height - 50;
const barWidth = chartWidth / data.length - 20;
const maxValue = Math.max(...data);

//  bars
data.forEach((value, index) => {
    const barHeight = (value / maxValue) * chartHeight;
    ctx.fillStyle = colors[index];
    ctx.fillRect(
        40 + index * (barWidth + 20),
        canvas.height - barHeight - 25,
        barWidth,
        barHeight
    );

    // label
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.fillText(
        labels[index],
        40 + index * (barWidth + 20) + barWidth / 2,
        canvas.height - 10
    );

    // value
    ctx.fillText(
        value,
        40 + index * (barWidth + 20) + barWidth / 2,
        canvas.height - barHeight - 35
    );
});

// axes
ctx.beginPath();
ctx.moveTo(10, 0);
ctx.lineTo(10, canvas.height - 1);
ctx.lineTo(canvas.width, canvas.height - 1);
ctx.stroke();