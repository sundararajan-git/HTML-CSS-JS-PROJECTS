// dom elements
const hrs = document.getElementById("hrs");
const mins = document.getElementById("min");
const secs = document.getElementById("sec");
const peroid = document.getElementById("peroid");


function displayTime() {
    const date = new Date()
    const hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours()

    hrs.innerText = padzero(hours)
    mins.innerText = padzero(date.getMinutes())
    secs.innerText = padzero(date.getSeconds())
    peroid.innerText = date.getHours() >= 12 ? "PM" : "AM"

}

function padzero(num) {
    return num < 10 ? "0" + num : num
}

setInterval(displayTime, 500)