const input = document.querySelector(".input")
const button = document.querySelector(".button")
const ul = document.querySelector(".ul")

let editTask = null

const saveTask = () => {
    localStorage.setItem("tasks", JSON.stringify(task))
}

const loadTask = () => {
    return JSON.parse(localStorage.getItem("tasks")) || []
}

loadTask()

let task = loadTask()

const renderTask = () => {

    ul.innerHTML = ""

    task.forEach((tas, index) => {
        const li = document.createElement('li')
        const span = document.createElement('span')
        const deletebtn = document.createElement("button")
        const updatebtn = document.createElement("button")
        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        deletebtn.textContent = "Delete"
        updatebtn.textContent = "Update"

        span.textContent = tas.text

        checkbox.checked = tas.completed

        if(tas.completed){
            span.style.textDecoration = "line-through"
        }

        deletebtn.addEventListener("click", () => {
           task.splice(index, 1)
           
           saveTask()
           renderTask()
        })



        updatebtn.addEventListener("click", () => {
            input.value = tas.text
            editTask = index
            button.textContent = "Save Update"
        })


        checkbox.addEventListener("change", ()=> {
            
            tas.completed  = checkbox.checked

            saveTask()
            renderTask()
        })


        
        ul.appendChild(li)
        li.appendChild(checkbox)
        li.appendChild(span)
        li.appendChild(deletebtn)
        li.appendChild(updatebtn)
    })
}



button.addEventListener("click", () => {

    

    if (input.value === "") {
        return console.log("Plzz Enter your work.")
    }
 
    

    if (editTask === null) {
       
        task.push({text:input.value, completed:false})
     
    } else {
        

        task[index].text = input.value
       
        editTask = null
        button.textContent = "Add"
    }
    saveTask()
    renderTask()

    input.value = ""
})

renderTask()