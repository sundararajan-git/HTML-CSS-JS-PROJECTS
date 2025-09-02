// dom elements
const btns = document.getElementsByTagName("button")
const expresionEl = document.getElementById("expersion")
const ansEl = document.getElementById("answer")


function btnHandler(e) {
    const char = e.target.dataset.value
    if (char === "=") {
        const ans = simpleCalc(expresionEl.innerText)
        if (ans === false) {
            ansEl.innerText = "Error"
        } else {
            ansEl.innerText = ans
        }
    } else if (char === "AC") {
        expresionEl.innerText = ""
        ansEl.innerText = 0
    } else if (char === "X") {
        expresionEl.innerText = expresionEl.innerText.slice(0, -1)
        if (expresionEl.innerText === "") {
            ansEl.innerText = 0
        } else {
            const ans = simpleCalc(expresionEl.innerText)
            if (ans !== false) {
                ansEl.innerText = ans
            }
        }
    } else {
        expresionEl.innerText += char
        const ans = simpleCalc(expresionEl.innerText)
        if (ans !== false) {
            ansEl.innerText = ans
        }
    }
}

function simpleCalc(expr) {
    if (/[\+\-\*\/\%\.]$/.test(expr)) {
        return false
    }
    return new Function("return " + expr)();
}

for (let btn of btns) {
    btn.addEventListener("click", btnHandler)
}



