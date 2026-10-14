const paas = document.querySelector(".password")
const btn = document.querySelector(".btn")


btn.addEventListener("click", () => {
    // if(paas.type === "password"){
    //     paas.type = "text"
    // } else {
    //     paas.type = "password"
    // }

    paas.type === "password" ? paas.type = "text" : paas.type = "password"
})