const giftData = {
    birthday: [
        "Chocolate Cake",
        "Personalized Mug",
        "Board Game",
        "Flowers",
        "Gift Card",
    ],
    anniversary: [
        "Jewelry",
        "Couple Watch",
        "Romantic Dinner",
        "Photo Frame",
        "Spa Voucher",
    ],
    christmas: [
        "Socks",
        "Christmas Sweater",
        "Candles",
        "Ornaments",
        "Hot Chocolate Set",
    ],
    valentine: [
        "Red Roses",
        "Heart-shaped Box",
        "Couple Necklace",
        "Love Letter",
        "Chocolates",
    ],
};

const categorySelect = document.getElementById("categorySelect");
const suggestBtn = document.getElementById("suggestBtn");
const suggestions = document.getElementById("suggestions");

suggestBtn.addEventListener("click", () => {
    const category = categorySelect.value;
    suggestions.innerHTML = "";
    if (!category) {
        alert("Please select a category!");
        return;
    }

    giftData[category].forEach((gift) => {
        const div = document.createElement("div");
        div.className =
            "p-4 bg-gray-200 rounded shadow text-center hover:bg-gray-300 transition";
        div.textContent = gift;
        suggestions.appendChild(div);
    });
});