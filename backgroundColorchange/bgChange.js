const btn = document.getElementById("btn")
const body = document.querySelector("body")

console.log(body)

btn.addEventListener("click", () => {
   body.style.backgroundColor = "red"
})