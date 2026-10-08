// const h1 = document.getElementById("class")
// h1.textContent = "Namastey"


// const h2 = document.getElementsByClassName("item")
// h2.textContent = "SOME"



// console.log(h2)
// console.dir(h1)

// const btn = document.getElementById("btn")


// btn.addEventListener("click",  ()   => {
//     const v = document.getElementById("name").value  
//     console.log(v)
//     name.value = " "
// })

// const box = document.getElementById("box")

// console.log(box.className)
// console.log(box.classList)

// const showMessage = () => {
//     document.getElementById("msg").textContent = "button click hua"
// }

// btn.addEventListener("click", showMessage)


// const h1 = document.querySelector("#text")
// const btn = document.querySelector("#btn")


// btn.addEventListener("click", () => {
//     h1.textContent = "kuch new aa jao"
// })


// const input = document.querySelector("#name")
// const out = document.querySelector("#out")
// const number = document.querySelector("#number")


// input.addEventListener("input", () => {
//     out.textContent  = input.value
// })

// input.addEventListener("input", () => {
//     number.textContent = input.value.length
// })


// input.addEventListener("keydown", (e) => {
//     console.log(e.key)
//     if(e.key === "enter"){
//         console.log("enter dabaya !")
//     }



// const a = document.querySelector("#a")
// const b = document.querySelector("#b")


// a.addEventListener("input", () => {
//     console.log("input wala chala", a.value)
// })

// b.addEventListener("change", () => {
//     console.log("change event chala",b.value)
// })



// function a(){
//     console.log("pehla chALA")
// }


// function B(){
//     console.log("pehla chALA")
// }


// const FUNCTIONS = [a, B]

// console.log(FUNCTIONS)




// const form = document.querySelector("#myForm")
// const result = document.querySelector("#result")
// const user = document.querySelector("#user")

// form.addEventListener("submit", (e) => {
//     e.preventDefault()
//     form.textContent = "welcom ," + user.value
// })


// const parent = document.querySelector("#parent")

// parent.addEventListener("click", (e) => {
//     console.log("kaun dabaya :", e.target.textContent)
//     e.target.style.color = "red"
// })


// const list = document.querySelector("#list")

// list.addEventListener("click", (e) => {
//     console.log("kaun dababya" , e.target.textContent)
//     console.log("jo badalta nhi hai ", e.currentTarget)
//     e.target.style.color = "red"
// })


const sunn = document.querySelector("#list")

// items.forEach((li) => {
//   li.addEventListener("click", () => {
//     console.log(li.textContent);
//   });
// });

sunn.addEventListener("click", (e) => {
    if(e.target.tagName === "LI"){
        console.log(e.target.textContent)
    }
})


