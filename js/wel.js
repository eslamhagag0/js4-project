var welH = document.querySelector("h1")
var userInfo = []
usersInfo = JSON.parse(localStorage.getItem("userInfo"))
var userNameStrg = localStorage.getItem("userName")
// console.log(userNameStrg)
welH.innerHTML="Welcome "+userNameStrg