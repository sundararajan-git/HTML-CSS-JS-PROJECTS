const cards = document.querySelectorAll(".card");
const items = document.querySelectorAll(".item");

for (let card of cards) {
  card.addEventListener("dragstart", dragstart);
  card.addEventListener("dragend", dragEnd);
}

const dragstart = (e) => {
  e.dataTransfer.setData("text/plain", this.id);
};

const dragEnd = () => {
  console.log("deog end");
};
