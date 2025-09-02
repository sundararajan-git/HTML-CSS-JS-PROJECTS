const items = document.querySelectorAll(".item")
const cards = document.querySelectorAll(".card")


// items func
function dragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.id)
  setTimeout(() => {
    e.target.style.display = "none"
  }, 0)
}

function dragEnd(e) {
  e.target.style.display = "block"
}

// items
items.forEach((item) => {
  item.addEventListener("dragstart", dragStart)
  item.addEventListener("dragend", dragEnd)
})


function dragOver(e) {
  e.preventDefault()
  e.currentTarget.classList.add("over")
}

function drag(e) {
  e.preventDefault()
  const id = e.dataTransfer.getData("text/plain")
  const item = document.getElementById(id)
  e.currentTarget.appendChild(item)
  e.currentTarget.classList.remove("over")
}

// cards
cards.forEach((card) => {
  card.addEventListener("dragover", dragOver)
  card.addEventListener("drop", drag)
})