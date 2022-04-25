let black = document.querySelectorAll(".color")[0]
let green = document.querySelectorAll(".color")[1]
let yellow = document.querySelectorAll(".color")[2]
let blue = document.querySelectorAll(".color")[3]

function addRemoveSelectedClass(event) {
  let SelectedClass = document.querySelector(".selected")
  SelectedClass.classList.remove("selected")
  event.target.classList.add("selected")
}

black.addEventListener("click", addRemoveSelectedClass)
green.addEventListener("click", addRemoveSelectedClass)
yellow.addEventListener("click", addRemoveSelectedClass)
blue.addEventListener("click", addRemoveSelectedClass)

function paintPixel(event) {
  let selectedColor = document.querySelector(".selected")
  let color = window.getComputedStyle( selectedColor , null).getPropertyValue( "background-color" );
  event.target.style.backgroundColor = color
}

let pixel1 = document.querySelectorAll(".pixel")[0]
let pixel2 = document.querySelectorAll(".pixel")[1]
let pixel3 = document.querySelectorAll(".pixel")[2]
let pixel4 = document.querySelectorAll(".pixel")[3]
let pixel5 = document.querySelectorAll(".pixel")[4]
let pixel6 = document.querySelectorAll(".pixel")[5]
let pixel7 = document.querySelectorAll(".pixel")[6]
let pixel8 = document.querySelectorAll(".pixel")[7]
let pixel9 = document.querySelectorAll(".pixel")[8]
let pixel10 = document.querySelectorAll(".pixel")[9]
let pixel11 = document.querySelectorAll(".pixel")[10]
let pixel12 = document.querySelectorAll(".pixel")[11]
let pixel13 = document.querySelectorAll(".pixel")[12]
let pixel14 = document.querySelectorAll(".pixel")[13]
let pixel15 = document.querySelectorAll(".pixel")[14]
let pixel16 = document.querySelectorAll(".pixel")[15]
let pixel17 = document.querySelectorAll(".pixel")[16]
let pixel18 = document.querySelectorAll(".pixel")[17]
let pixel19 = document.querySelectorAll(".pixel")[18]
let pixel20 = document.querySelectorAll(".pixel")[19]
let pixel21 = document.querySelectorAll(".pixel")[20]
let pixel22 = document.querySelectorAll(".pixel")[21]
let pixel23 = document.querySelectorAll(".pixel")[22]
let pixel24 = document.querySelectorAll(".pixel")[23]
let pixel25 = document.querySelectorAll(".pixel")[24]

pixel1.addEventListener("click", paintPixel)
pixel2.addEventListener("click", paintPixel)
pixel3.addEventListener("click", paintPixel)
pixel3.addEventListener("click", paintPixel)
pixel4.addEventListener("click", paintPixel)
pixel5.addEventListener("click", paintPixel)
pixel6.addEventListener("click", paintPixel)
pixel7.addEventListener("click", paintPixel)
pixel8.addEventListener("click", paintPixel)
pixel9.addEventListener("click", paintPixel)
pixel10.addEventListener("click", paintPixel)
pixel11.addEventListener("click", paintPixel)
pixel12.addEventListener("click", paintPixel)
pixel13.addEventListener("click", paintPixel)
pixel14.addEventListener("click", paintPixel)
pixel15.addEventListener("click", paintPixel)
pixel16.addEventListener("click", paintPixel)
pixel17.addEventListener("click", paintPixel)
pixel18.addEventListener("click", paintPixel)
pixel19.addEventListener("click", paintPixel)
pixel20.addEventListener("click", paintPixel)
pixel21.addEventListener("click", paintPixel)
pixel22.addEventListener("click", paintPixel)
pixel23.addEventListener("click", paintPixel)
pixel24.addEventListener("click", paintPixel)
pixel25.addEventListener("click", paintPixel)


