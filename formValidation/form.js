const name = document.querySelector(".name")
const email = document.querySelector(".email")
const password = document.querySelector(".password")
const confirmPassword = document.querySelector(".confirmPassword")
const form = document.querySelector('form')
const nameError = document.querySelector(".nameError")
const emailError = document.querySelector(".emailError")
const passwordError = document.querySelector(".passwordError")
const confirmPasswordError = document.querySelector(".confirmPasswordError")
const errorp = document.querySelector(".error")


form.addEventListener("submit", (e) => {
    e.preventDefault()

    if(name.value == ""){
        nameError.style.display = "block"
        nameError.textContent = "plzz fill the name"
         console.log("plzz fill the name")
    } else {
        nameError.style.display = "none"
        nameError.textContent = ""
    if(email.value == ""){
        emailError.style.display = "block"
        emailError.textContent = "plzz fill the Email"
    } else {
        emailError.style.display = "none"
    
    
    if(!email.value.includes("@gmail.com")){
        emailError.style.display = "block"
        emailError.textContent= "Please enter a valid email"
    } else {
        emailError.style.display = "none"
    

     if (password.value == ""){
        passwordError.style.display = "block"
        passwordError.textContent = "plzz fill the paasword"
    } else {
         passwordError.style.display = "none"
         passwordError.textContent = ""
        
    if (confirmPassword.value == ""){
        confirmPasswordError.style.display = "block"
        confirmPasswordError.textContent = "plzz fill the confirm password"
    } else {
        confirmPasswordError.style.display = "none"
    
    
    
    if(password.value.length < 8){
        passwordError.style.display = "block"
        passwordError.textContent = "Password must be at least than 8 character"
    } else{
        passwordError.style.display = "none"
    

     if (confirmPassword.value !== password.value){
        confirmPasswordError.style.display = "block"
         confirmPasswordError.textContent = "your confirm password or password did not match"
    } else {
        confirmPasswordError.style.display = "none"
        console.log("form submitted")
    }
}
}
}
}
}
}
})
