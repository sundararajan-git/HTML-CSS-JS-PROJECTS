
// dom elements
const menuBtn = document.getElementById("menuBtn")
const closeBtn = document.getElementById("closeBtn")
const mobileMenu = document.getElementById("mobileMenu")



menuBtn.addEventListener("click", () => {
    mobileMenu.style.display = "block";
})

closeBtn.addEventListener("click", () => {
    mobileMenu.style.display = "none";
})