// dom elements
const openBtn = document.getElementById("openModal")
const closeBtn = document.getElementById("closeDialog")
const dialog = document.getElementById("myDialog")

openBtn.addEventListener('click', () => {
    dialog.showModal()
})

closeBtn.addEventListener('click', () => {
    dialog.close()
})