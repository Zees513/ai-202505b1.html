let login = document.getElementById("login")

login.addEventListener("submit",function(e){
    e.preventDefault()

    let email = document.getElementById("email")
    let pass = document.getElementById("pass")

    let users = JSON.parse (localStorage.getItem("users")) || [];
    let founduers = users.find(u=>u.email === email && u.pass === pass)

    if (founduser) {
        localStorage.setItem("logeddinuser",JSON.stringify(founduser))
        location.assign('welcome.html')
} else {
        alert("email and password incorrect")
        location.assign('welcome.html')
    }
})