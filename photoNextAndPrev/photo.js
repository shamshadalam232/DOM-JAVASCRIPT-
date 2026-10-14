const photo = document.querySelector(".photo")
const next = document.querySelector(".next")
const prev = document.querySelector(".prev")

const iamge = ["./image1.png", "./image2.png", "./image3.png"]

console.log(iamge)

let index = 0

next.addEventListener("click", () => {
    photo.src = iamge[index++]
    if(index === iamge.length){
        index =  0
    }
})


prev.addEventListener("click", () => {
    index--

    
    if(index < 0){
        index = iamge.length-1
    }

    photo.src = iamge[index]
})