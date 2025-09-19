let modebtn = document.querySelector("#mode");
let currmode = "light";
let body = document.querySelector("body")

modebtn.addEventListener("click", () => {
if(currmode === "dark"){
    currmode = "light";
    body.classList.add("light")
}else{
    currmode = "dark"
    body.classList.add("dark")
}
console.log(currmode)
})
    dhg
