const playerScoreEl = document.getElementById('playerScore');
const computerScoreEl = document.getElementById('computerScore');
const resultText = document.getElementById('resultText');

let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    if (playerChoice === computerChoice) {
        resultText.textContent = `🤝 It's a tie! Both chose ${playerChoice}`;
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerScore++;
        playerScoreEl.textContent = playerScore;
        resultText.textContent = `🎉 You win! ${playerChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        computerScoreEl.textContent = computerScore;
        resultText.textContent = `💻 Computer wins! ${computerChoice} beats ${playerChoice}`;
    }
}