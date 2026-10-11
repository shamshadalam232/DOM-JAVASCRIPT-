const input = document.querySelector(".input")
const para = document.querySelector(".para")

input.addEventListener("input", () => {
  para.textContent  = input.value.length
})

