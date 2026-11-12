const expenceName = document.querySelector(".expense-name")
const expenseAmount = document.querySelector(".expense-amount")
const category = document.querySelector(".expense-category")
const addButton = document.querySelector(".add-expense-btn")
const totalAmount = document.querySelector(".total-amount")
const expenceList = document.querySelector(".expense-list")

let expense = []

addButton.addEventListener("click", ()=> {
    let name = expenceName.value.trim()
    let amount = Number(expenseAmount.value) 
    let categor = category.value

    if(name === "" || categor === "" || amount <= 0){
        return alert("plzz fill the form first then add.")
    } else {
        expense.push({name:name, amount:amount, categor:categor})
        const div = document.createElement("div")
        div.classList.add("expense-item")
        expenceList.appendChild(div)

        const p1 = document.createElement("p")
        const p2 = document.createElement("p")
        const p3 = document.createElement("p")

        p1.textContent = expense[0].name
        p2.textContent = expense[0].amount
        p3.textContent = expense[0].categor

        div.appendChild(p1)
        div.appendChild(p2)
        div.appendChild(p3)
    }

    console.log(expense)

})


