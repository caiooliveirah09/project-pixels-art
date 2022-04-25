const black = document.querySelectorAll('.color')[0];
const green = document.querySelectorAll('.color')[1];
const yellow = document.querySelectorAll('.color')[2];
const blue = document.querySelectorAll('.color')[3];
const pixels = document.querySelectorAll('.pixel');

function addRemoveSelectedClass(event) {
  let SelectedClass = document.querySelector('.selected');
  SelectedClass.classList.remove('selected');
  event.target.classList.add('selected');
}

black.addEventListener('click' , addRemoveSelectedClass);
green.addEventListener('click' , addRemoveSelectedClass);
yellow.addEventListener('click' , addRemoveSelectedClass);
blue.addEventListener('click' , addRemoveSelectedClass);

function paintPixel(event) {
  let selectedColor = document.querySelector('.selected');
  let color = window.getComputedStyle(selectedColor, null).getPropertyValue('background-color');
  event.target.style.backgroundColor = color;
}

const pixel1 = document.querySelectorAll('.pixel')[0];
const pixel2 = document.querySelectorAll('.pixel')[1];
const pixel3 = document.querySelectorAll('.pixel')[2];
const pixel4 = document.querySelectorAll('.pixel')[3];
const pixel5 = document.querySelectorAll('.pixel')[4];
const pixel6 = document.querySelectorAll('.pixel')[5];
const pixel7 = document.querySelectorAll('.pixel')[6];
const pixel8 = document.querySelectorAll('.pixel')[7];
const pixel9 = document.querySelectorAll('.pixel')[8];
const pixel10 = document.querySelectorAll('.pixel')[9];
const pixel11 = document.querySelectorAll('.pixel')[10];
const pixel12 = document.querySelectorAll('.pixel')[11];
const pixel13 = document.querySelectorAll('.pixel')[12];
const pixel14 = document.querySelectorAll('.pixel')[13];
const pixel15 = document.querySelectorAll('.pixel')[14];
const pixel16 = document.querySelectorAll('.pixel')[15];
const pixel17 = document.querySelectorAll('.pixel')[16];
const pixel18 = document.querySelectorAll('.pixel')[17];
const pixel19 = document.querySelectorAll('.pixel')[18];
const pixel20 = document.querySelectorAll('.pixel')[19];
const pixel21 = document.querySelectorAll('.pixel')[20];
const pixel22 = document.querySelectorAll('.pixel')[21];
const pixel23 = document.querySelectorAll('.pixel')[22];
const pixel24 = document.querySelectorAll('.pixel')[23];
const pixel25 = document.querySelectorAll('.pixel')[24];

pixel1.addEventListener('click' , paintPixel);
pixel2.addEventListener('click' , paintPixel);
pixel3.addEventListener('click' , paintPixel);
pixel4.addEventListener('click' , paintPixel);
pixel5.addEventListener('click' , paintPixel);
pixel6.addEventListener('click' , paintPixel);
pixel7.addEventListener('click' , paintPixel);
pixel8.addEventListener('click' , paintPixel);
pixel9.addEventListener('click' , paintPixel);
pixel10.addEventListener('click' , paintPixel);
pixel11.addEventListener('click' , paintPixel);
pixel12.addEventListener('click' , paintPixel);
pixel13.addEventListener('click' , paintPixel);
pixel14.addEventListener('click' , paintPixel);
pixel15.addEventListener('click' , paintPixel);
pixel16.addEventListener('click' , paintPixel);
pixel17.addEventListener('click' , paintPixel);
pixel18.addEventListener('click' , paintPixel);
pixel19.addEventListener('click' , paintPixel);
pixel20.addEventListener('click' , paintPixel);
pixel21.addEventListener('click' , paintPixel);
pixel22.addEventListener('click' , paintPixel);
pixel23.addEventListener('click' , paintPixel);
pixel24.addEventListener('click' , paintPixel);
pixel25.addEventListener('click' , paintPixel);

function clearPixels() {
   /* for (index in pixels){
   pixels[index].style.backgroundColor = 'white'
   } */ // Obs =  esse funcionou mas dava erro no cypress
  pixel1.style.backgroundColor = 'white';
  pixel2.style.backgroundColor = 'white';
  pixel3.style.backgroundColor = 'white';
  pixel3.style.backgroundColor = 'white';
  pixel4.style.backgroundColor = 'white';
  pixel5.style.backgroundColor = 'white';
  pixel6.style.backgroundColor = 'white';
  pixel7.style.backgroundColor = 'white';
  pixel8.style.backgroundColor = 'white';
  pixel9.style.backgroundColor = 'white';
  pixel10.style.backgroundColor = 'white';
  pixel11.style.backgroundColor = 'white';
  pixel12.style.backgroundColor = 'white';
  pixel13.style.backgroundColor = 'white';
  pixel14.style.backgroundColor = 'white';
  pixel15.style.backgroundColor = 'white';
  pixel16.style.backgroundColor = 'white';
  pixel17.style.backgroundColor = 'white';
  pixel18.style.backgroundColor = 'white';
  pixel19.style.backgroundColor = 'white';
  pixel20.style.backgroundColor = 'white';
  pixel21.style.backgroundColor = 'white';
  pixel22.style.backgroundColor = 'white';
  pixel23.style.backgroundColor = 'white';
  pixel24.style.backgroundColor = 'white';
  pixel25.style.backgroundColor = 'white';
}
