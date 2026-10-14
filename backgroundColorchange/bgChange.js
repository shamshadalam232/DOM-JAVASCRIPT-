const btn = document.getElementById("btn")
const body = document.querySelector("body")

console.log(body)

let corlor = "red"

btn.addEventListener("click", () => {
   body.style.backgroundColor = corlor
   if(corlor === "red"){
      corlor = "blue"
   } else if (corlor === "blue"){
      corlor = "green"
   } else {
      corlor = "red"
   }
})