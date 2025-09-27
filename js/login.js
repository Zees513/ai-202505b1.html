let login = document.getElementById("Login")

login.addEventListener("submit", function (e) {
    e.preventDefault()

    let email = document.getElementById("email").value
    let pass = document.getElementById("pass").value

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let foundusers = users.find(u => u.email === email && u.pass === pass)

    if (foundusers) {
        localStorage.setItem("loggedInUser", JSON.stringify(foundusers))
        location.assign('welcome.html')
    } else {
        alert("email and password incorrect")
        location.assign('login.html')
    }
})