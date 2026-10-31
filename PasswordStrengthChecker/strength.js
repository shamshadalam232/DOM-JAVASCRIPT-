const password = document.querySelector(".password")
const check = document.querySelector(".check")
const strengthfill = document.querySelector(".strength-fill")
const lengthcheck = document.querySelector(".length-check")
const uppercase = document.querySelector(".upper-case")
const lowercase = document.querySelector(".lower-case")
const numbercase = document.querySelector(".number-case")
const specialcase = document.querySelector(".special-case")
const lengthCheckbox = lengthcheck.querySelector("input")
const uppercaseCheckbox = uppercase.querySelector("input")
const lowercaseCheckbox = lowercase.querySelector("input")
const specialcaseCheckbox = specialcase.querySelector("input")
const numbercaseCheckbox = numbercase.querySelector("input")


password.addEventListener("input", () => {

    let hasUppercase = /[A-Z]/.test(password.value)
    let hasLowwercase = /[a-z]/.test(password.value)
    let hasNumber = /[0-9]/.test(password.value)
    let hasSpecialCharacter = /[!@#$%^&*]/.test(password.value)

    console.log(hasUppercase)
    console.log(hasLowwercase)
    console.log(hasNumber)
    console.log(hasSpecialCharacter)

    let score = 0


    if(hasUppercase){
        score++
    }
    if(hasLowwercase){
        score++
    }
    if(hasSpecialCharacter){
        score++
    }
    if(hasNumber){
        score++
    }

    console.log(score)

    if (password.value.length >= 8){
        lengthcheck.style.color = "green"
        lengthCheckbox.checked = true
    } else {
        lengthcheck.style.color = "gray"
        lengthCheckbox.checked = false
    }

    if(hasUppercase){
        uppercase.style.color = "green"
        uppercaseCheckbox.checked = true
    }else {
        uppercase.style.color ="gray"
        uppercaseCheckbox.checked = false
    }

    if(hasLowwercase){
        lowercase.style.color = "green"
        lowercaseCheckbox.checked = true
    }else {
        lowercase.style.color ="gray"
        lowercaseCheckbox.checked = false
    }

    if(hasSpecialCharacter){
        specialcase.style.color = "green"
        specialcaseCheckbox.checked  = true
    }else {
        specialcase.style.color ="gray"
        specialcaseCheckbox.checked = false
    }

    if(hasNumber){
        numbercase.style.color = "green"
        numbercaseCheckbox.checked = true
    }else {
        numbercase.style.color ="gray"
        numbercaseCheckbox.checked = false
    }

    if (password.value === "") {
        check.textContent = "Enter password"
        strengthfill.style.width = "0%"
    } else if (password.value.length < 8){
        check.textContent = "Password must be at least 8 Character"
        check.style.color = "black"
        strengthfill.style.width = "0%"
        
    } else  if (score <= 1){
        check.textContent = "Weak"
        check.style.color = "red"
        strengthfill.style.width = "25%"
    } else if  (score <= 3){
        check.textContent = "Medium"
        check.style.color = "orange"
        strengthfill.style.width = "50%"
    } else if  (score === 4){
        check.textContent = "Strong"
        check.style.color = "green"
        strengthfill.style.width = "100%"
    }

   // else if (password.value.length < 5 || score >= 1) {
    //     check.textContent = "Weak"
    // } else if (password.value.length <= 8 || score >= 3) {
    //     check.textContent = "Medium"
    // } else if (password.value.length > 8 || score >= 4) {
    //     check.textContent = "strong"
    // } else {
    //     check.textContent = ""
    // }
})