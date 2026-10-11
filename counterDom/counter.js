const para = document.querySelector(".para")
const inc = document.querySelector(".inc")
const dec = document.querySelector(".dec")
const res = document.querySelector(".res")


let count = 0

inc.addEventListener("click", ()=> {
    para.textContent = ++count
})

dec.addEventListener("click", ()=> {
    para.textContent = --count
})

res.addEventListener("click", ()=> {
    para.textContent = count = 0
})