let btn = document.getElementById("btn")
let form = document.getElementById("form")


form.addEventListener("submit",function(e){
    e.preventDefault()
    let name = document.getElementById("name").value
     let email = document.getElementById("email").value
      let pass = document.getElementById("pass").value

      // localStorage.setItem("name",name)
      // localStorage.setItem("email",email)
      // localStorage.setItem("pass",pass)


      if(name == "" || email == "" || pass == ""){
        alert("please fill out all the fields")
      }

      let users = JSON.parse(localStorage.getItem("users")) || [];
      users.push({name : name , email : email , pass : pass})

      localStorage.setItem("users",JSON.stringify(users))
        location.assign('login.html')
      
      this.reset()
})