const questions = document.querySelectorAll(".faq-item h4")
const faqItem = document.querySelectorAll(".faq-item")


questions.forEach((question) => {
    const answer = question.parentElement.querySelectorAll("p")
    const icon = question.querySelector("span")
    question.addEventListener("click", ()=> {
    answer.forEach((item) => {
        if(getComputedStyle(item).display === "none"){
            item.style.display = "block"
            icon.textContent = "-"
        }else{
            item.style.display = "none"
            icon.textContent = "+"
        }
    })

    const currentItem = question.parentElement;

    faqItem.forEach((item) => {
        if(item !== currentItem){

            const answers = item.querySelectorAll("p")
            const iconss = item.querySelector("span")

            answers.forEach((answer) => {
                answer.style.display = "none"
            })

            iconss.textContent = "+"
        }
        
    })
    })
}

)