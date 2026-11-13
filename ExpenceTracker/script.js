const expenceName = document.querySelector(".expense-name")
const expenseAmount = document.querySelector(".expense-amount")
const category = document.querySelector(".expense-category")
const addButton = document.querySelector(".add-expense-btn")
const totalAmount = document.querySelector(".total-amount")
const expenceList = document.querySelector(".expense-list")
const dropdown = document.querySelector(".dropdown")

let expense = []

let saveItem = () => {
    localStorage.setItem("expence", JSON.stringify(expense))
}

let data = localStorage.getItem("expence")
expense = JSON.parse(data) || []


let badaId = expense.length > 0 ? Math.max(...expense.map((curr) => curr.id)) : 0;

let nextId = badaId + 1


const updateTotal = () => {
    let total = expense.reduce((acc, curr) => {
        return acc + curr.amount
    }, 0)

    totalAmount.textContent = "₹" + total
}


const renderExpense = (data) => {



    expenceList.innerHTML = ""

    data.forEach((curr) => {

        const div = document.createElement("div")
        div.dataset.id = curr.id
        div.classList.add("expense-item")
        expenceList.appendChild(div)

        const p1 = document.createElement("p")
        const p2 = document.createElement("p")
        const p3 = document.createElement("p")
        const button = document.createElement("button")

        p1.textContent = curr.name
        p2.textContent = curr.amount
        p3.textContent = curr.categor
        button.textContent = "Delete"

        div.appendChild(p1)
        div.appendChild(p2)
        div.appendChild(p3)
        div.appendChild(button)

        button.addEventListener("click", () => {
            let id = button.parentElement.dataset.id
            console.log(id)
            expense = expense.filter((curr) => {
                return curr.id !== Number(id)
            })

            button.parentElement.remove()
            updateTotal()
            saveItem()
        })

    })
}

addButton.addEventListener("click", () => {

    let name = expenceName.value.trim()
    let amount = Number(expenseAmount.value)
    let categor = category.value

    if (name === "" || categor === "" || amount <= 0) {
        return alert("plzz fill the form first then add.")
    } else {
        expense.push({ name: name, amount: amount, categor: categor, id: nextId })
        nextId++
        updateTotal()
        expenceName.value = ""
        expenseAmount.value = ""
        category.value = ""

        renderExpense(expense)
        saveItem()
    }

})

dropdown.addEventListener("change", () => {
    let select = dropdown.value
    let filter = expense.filter((curr) => {
        return select === "All Categories" || curr.categor === select
    })
    renderExpense(filter)

})

renderExpense(expense)
updateTotal()