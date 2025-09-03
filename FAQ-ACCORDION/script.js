// dom elements
const faItem = document.querySelectorAll(".faq-item")


faItem.forEach((item) => {
    const question = item.querySelector(".faq-question")
    question.addEventListener("click", () => {
        faItem.forEach((i) => {
            if (i !== item) {
                item.classList.remove("active")
                i.querySelector(".faq-answer").style.maxHeight = null;
            }
        })
        item.classList.toggle("active")
        const answer = item.querySelector(".faq-answer")
        if (item.classList.contains("active")) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = null
        }
    })
})
