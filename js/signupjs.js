var userName = document.querySelector("#userName")
var userEmail = document.querySelector("#userEmail")
var userPass = document.querySelector("#userPass")
var signUpBtn = document.querySelector("#signUpBtn")
var signUpH6 = document.querySelector("h6")
console.log(userName.value)
var usersInfo = []
if (localStorage.getItem("info") != null) {
    usersInfo = JSON.parse(localStorage.getItem("userInfo"))
}

signUpBtn.addEventListener("click", function () {
    var userObject = {
        name: userName.value,
        email: userEmail.value,
        pass: userPass.value
    }
    var h = usersInfo.some(el => {
        return el.email == userEmail.value
    })
    console.log("h out = " + h)
    if (h == true) {
        console.log("h if = " + h)

        signUpH6.innerHTML = "Account Already Exist"
        signUpH6.classList.replace("h-white", "h-red")
        signUpH6.classList.replace("h-green", "h-red")
    }
    else if (userName.value == "" || userEmail.value == "" || userPass.value == "") {
        signUpH6.innerHTML = "All inputs requird"
        signUpH6.classList.replace("h-white", "h-red")
        signUpH6.classList.replace("h-green", "h-red")
    }
    else {
        console.log("h else = " + h)
        usersInfo.push(userObject);
        localStorage.setItem("userInfo", JSON.stringify(usersInfo))
        signUpH6.innerHTML = "Success"
        signUpH6.classList.replace("h-white", "h-green")
        signUpH6.classList.replace("h-red", "h-green")
    }
})




// var x = [12, 123, 34, 95, 32, 84, 92]
// var h = x.some(el => {
//     return el > 50
// })

// console.log(h)





