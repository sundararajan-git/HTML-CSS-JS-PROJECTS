const searchInput = document.getElementById("searchInput");
const itemList = document.getElementById("itemList");
const items = itemList.getElementsByTagName("li");

searchInput.addEventListener("input", () => {
    const filter = searchInput.value.toLowerCase();
    Array.from(items).forEach((item) => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(filter) ? "" : "none";
    });
});