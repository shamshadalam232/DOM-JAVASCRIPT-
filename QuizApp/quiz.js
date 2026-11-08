const questions = [
    {
        question: "what is Array.",
        Options: [
            "Store data in a variable",
            "store data in a key value pair",
            "store things in data type",
            "store databse"
        ],
        correctAnswer: "Store data in a variable"
    },
    {
        question: "what is JavaScript",
        Options: [
            "Programming Language",
            "Database",
            "Operating System",
            "Browser"
        ],
        correctAnswer: "Programming Language"
    },
    {
        question: "which keyword declares a constant",
        Options: [
            "var",
            "let",
            "const",
            "function"
        ],
        correctAnswer: "const"
    }
]

const ques = document.querySelector(".question")
const option = document.querySelectorAll(".options button")
const next = document.querySelector(".next")
const scored = document.querySelector(".score")
const restart = document.querySelector(".restart")


let currentQuestions = 0
let score = 0
let answered = false


const showQuestions = () => {
    ques.textContent = questions[currentQuestions].question

    option.forEach((btn, index) => {
        btn.textContent = questions[currentQuestions].Options[index]
        btn.disabled = false
        btn.style.backgroundColor = ""
    })
}

option.forEach((btn) => {
    btn.addEventListener("click", () => {

        if (!answered) {

            if (btn.textContent === questions[currentQuestions].correctAnswer) {
                console.log("correct answer");
                score++
                scored.textContent = "score :" + score
                btn.style.backgroundColor = "green"
            } else {
                console.log("incorrect answer");
                btn.style.backgroundColor = "red"
            }

            answered = true

            option.forEach((opt) => {
                opt.disabled = true
            })

        }

    });
});

showQuestions()

next.addEventListener("click", () => {

    currentQuestions++

    if (currentQuestions === questions.length) {
        ques.textContent = "Congratulations! Quiz Completed"
        option.forEach((opt) => {
            opt.style.display = "none"
        })
        next.style.display = "none"
    } else {
        answered = false
        showQuestions()
    }
})

restart.addEventListener("click", () => {
    currentQuestions = 0
    score = 0
    scored.textContent = "Score: 0"
    answered = false
    next.style.display = ""
    option.forEach((opt) => {
        opt.style.display = ""
        opt.disabled = false
    })
    showQuestions()
})