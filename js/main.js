var userEmail = document.querySelector("#mail")
var userPass = document.querySelector("#pass")
var login = document.querySelector("#loginBtn")
var loginH6 = document.querySelector("h6")
var signupList = []
signupList = JSON.parse(localStorage.getItem("userInfo"))

console.log(signupList)
login.addEventListener("click", function () {
    for (let i = 0; i < signupList.length; i++) {
        // console.log(signupList[i].email)
        if (signupList[i].email==userEmail.value&&signupList[i].pass==userPass.value) {
        console.log("true yst")
        location.href="welcome.html"
        localStorage.setItem("userName",signupList[i].name)
        // console.log("user naem = "+  localStorage.getItem("userName"))
        }
        else if(userEmail.value==""||userPass.value==""){
            loginH6.innerHTML = "All inputs requird "
            loginH6.classList.replace("h-trans","h-red")    
        }
        else{
            console.log("la2");
            loginH6.innerHTML = "incorrect email or password"
            loginH6.classList.replace("h-trans","h-red")    
            // loginH6.classList.replace("h-green","h-red")
        }
    }
}
)



