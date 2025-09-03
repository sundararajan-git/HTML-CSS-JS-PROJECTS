// dom elements
const html = document.documentElement
const lightBtn = document.getElementById("lightBtn")
const darkBtn = document.getElementById("darkBtn")

html.classList.remove('dark')

lightBtn.addEventListener('click', () => {
    html.classList.remove('dark')
    lightBtn.style.display = "none"
    darkBtn.style.display = "block"
})

darkBtn.addEventListener('click', () => {
    html.classList.add('dark')
    darkBtn.style.display = "none"
    lightBtn.style.display = "block"
})