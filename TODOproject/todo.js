const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const ul = document.querySelector(".ull");

let editTask = null;

let tasks = []
//localstorage work save data 
let saveTask = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

//localstorage work get data 
let renderTask = () => {
    ul.innerHTML = ""
    let data = localStorage.getItem("tasks")
    tasks = JSON.parse(data) || []
    tasks.forEach((task, index) => {

        const li = document.createElement("li")
        const span = document.createElement("span")

        const updatebtn = document.createElement("button");
        const deletebtn = document.createElement("button");
        const inputCheck = document.createElement("input")
        inputCheck.type = "checkbox"
        inputCheck.checked = task.completed;
        // Add classes

        inputCheck.addEventListener("change", ()=> {
            task.completed = inputCheck.checked
            saveTask()
            span.classList.toggle("completed", task.completed)
        })


        updatebtn.classList.add("update-btn");
        deletebtn.classList.add("delete-btn");
        span.classList.add("text-element")

        // Set text
        updatebtn.textContent = "Update";
        deletebtn.textContent = "Delete";
        span.textContent = task.text
        span.classList.toggle("completed", task.completed);

        deletebtn.addEventListener("click", ()=> {
            let newtask =  tasks.filter((task , currentIndex) => {
                return currentIndex !== index
            })
            tasks = newtask
            saveTask()
            renderTask()
        })

        updatebtn.addEventListener("click", ()=> {
            btn.textContent = "Save Update"
            input.value = task.text
            editTask = index
        })

        li.appendChild(span)
        li.appendChild(inputCheck)
        li.appendChild(deletebtn);
        li.appendChild(updatebtn);
        ul.appendChild(li)
    })
}

renderTask()




btn.addEventListener("click", () => {

    if (input.value.trim() === "") {
        console.log("Please Enter your task");
        return;
    }

    if (editTask === null) {
        tasks.push({text:input.value.trim(), completed:false});
        saveTask();
        renderTask();
        input.value = "";
    } else {

        // Update existing task
        tasks[editTask].text = input.value.trim()
        saveTask()
        renderTask()
        editTask = null;
        input.value = "";
        btn.textContent = "Add"
    }

    // if(inputCheck === true){
    //     span.style
    // }
});

// let tasks = ["Learn HTML", "Learn CSS"]

// localStorage.setItem("myTasks", JSON.stringify(tasks))

// console.log(localStorage.getItem("myTasks"))