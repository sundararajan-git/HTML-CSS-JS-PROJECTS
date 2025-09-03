// dom elements
const tipFormEle = document.getElementById("tipForm")
const display = document.getElementById("diplayContainer")

function submitHandler(e) {
    e.preventDefault()
    const formData = new FormData(tipFormEle)
    const formJson = Object.fromEntries(formData)
    const { billAmt, tipPer, persons } = formJson

    const tipAmt = parseFloat(billAmt) * (parseFloat(tipPer) / 100)
    const total = parseFloat(billAmt) + tipAmt
    const perPerson = total / Number(persons)

    display.innerHTML = `<p> Tip Amt : ${tipAmt.toFixed(2)} , Total Amt : ${total.toFixed(2)} , Per Person : ${perPerson.toFixed(2)}  </p>`

    tipFormEle.reset()
}


tipFormEle.addEventListener("submit", submitHandler)