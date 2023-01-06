let username = document.querySelector(".username")
let sail1 = document.querySelector(".sail1")
let sail2 = document.querySelector(".sail2")
let sail3 = document.querySelector(".sail3")

let password = document.querySelector(".password")
let btn = document.querySelector(".btn1")
error1 = document.querySelector(".erorrus")
error2 = document.querySelector(".erorrps")
btn.addEventListener("click", (eo) => {
    eo.preventDefault();
    if (username.value == '' || username.value != "سكر") {
        error1.classList.add("erorrusunh")
    }
    else if (password.value == '' || password.value != 1000) {
        error2.classList.add("erorrpsunh")
    }
    else if (username.value == "سكر" && password.value == 1000 && sail2.value == 1234 && sail3.value == 8000) {

        window.location = "table1.html"

    }
})