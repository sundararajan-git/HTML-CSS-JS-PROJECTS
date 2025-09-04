const symbols = ["🍎", "🍌", "🍇", "🍓", "🍒", "🥝", "🍍", "🍑"];
let cards = [...symbols, ...symbols]; // duplicate for pairs
let firstCard = null,
    secondCard = null;
let lockBoard = false;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function createCard(symbol) {
    const card = document.createElement("div");
    card.className = "card relative w-24 h-24";
    card.innerHTML = `
    <div class="card-inner w-full h-full relative">
        <div class="card-front">❓</div>
        <div class="card-back">${symbol}</div>
    </div>
    `;
    card.addEventListener("click", () => flipCard(card));
    return card;
}

function flipCard(card) {
    if (lockBoard || card.classList.contains("flipped")) return;

    card.classList.add("flipped");

    if (!firstCard) {
        firstCard = card;
    } else {
        secondCard = card;
        checkMatch();
    }
}

function checkMatch() {
    const firstSymbol = firstCard.querySelector(".card-back").textContent;
    const secondSymbol = secondCard.querySelector(".card-back").textContent;

    if (firstSymbol === secondSymbol) {
        firstCard = null;
        secondCard = null;
    } else {
        lockBoard = true;
        setTimeout(() => {
            firstCard.classList.remove("flipped");
            secondCard.classList.remove("flipped");
            firstCard = null;
            secondCard = null;
            lockBoard = false;
        }, 1000);
    }
}

const gameBoard = document.getElementById("gameBoard");
shuffle(cards).forEach((symbol) => {
    gameBoard.appendChild(createCard(symbol));
});