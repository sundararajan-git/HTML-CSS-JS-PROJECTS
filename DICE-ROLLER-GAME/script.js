const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const result = document.getElementById("result");
const rollBtn = document.getElementById("rollBtn");

const diceFaces = [
    "\u2680",
    "\u2681",
    "\u2682",
    "\u2683",
    "\u2684",
    "\u2685",
];

function rollDice() {
    const roll1 = Math.floor(Math.random() * 6);
    const roll2 = Math.floor(Math.random() * 6);

    dice1.textContent = diceFaces[roll1];
    dice2.textContent = diceFaces[roll2];

    if (roll1 > roll2) {
        result.textContent = "🎉 You wins!";
    } else if (roll2 > roll1) {
        result.textContent = "🎉 Computer wins!";
    } else {
        result.textContent = "🤝 It's a tie!";
    }
}

rollBtn.addEventListener("click", rollDice);