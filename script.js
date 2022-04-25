let black = document.querySelectorAll(".color")[0]
let green = document.querySelectorAll(".color")[1]
let yellow = document.querySelectorAll(".color")[2]
let blue = document.querySelectorAll(".color")[3]

function addRemoveSelectedClass(event) {
    let SelectedClass = document.querySelector(".selected")
    SelectedClass.classList.remove("selected")
    event.target.classList.add("selected")
}

black.addEventListener("click" , addRemoveSelectedClass)
green.addEventListener("click" , addRemoveSelectedClass)
yellow.addEventListener("click" , addRemoveSelectedClass)
blue.addEventListener("click" , addRemoveSelectedClass)