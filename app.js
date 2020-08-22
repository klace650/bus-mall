'use strict'

var imageArray = [];
var imgElOne = document.getElementById("image-one")
var imgElTwo = document.getElementById("image-two")
var imgElThree = document.getElementById("image-three")

function Image(name, src){
  this.viewed = 0;
  this.clicked = 0;
  this.src= src;
  this.name = name;

  imageArray.push(this)
}

new Image('bag','./images/bag.jpg');
new Image('banana','./images/banana.jpg');
new Image('bathroom','./images/bathroom.jpg');
new Image('boots','./images/boots.jpg');
new Image('breakfast','./images/breakfast.jpg');
new Image('bubblegum','./images/bubblegum.jpg');
new Image('chair','./images/chair.jpg');
new Image('cthulhu','./images/cthulhu.jpg');
new Image('dog-duck','./images/dog-duck.jpg');
new Image('dragon','./images/dragon.jpg');
new Image('pen','./images/pen.jpg');
new Image('pet-sweep','./images/pet-sweep.jpg');
new Image('scissors','./images/scissors.jpg');
new Image('shark','./images/shark.jpg');
new Image('sweep','./images/sweep.jpg');
new Image('tauntaun','./images/tauntaun.jpg');
new Image('unicorn','./images/unicorn.jpg');
new Image('usb','./images/usb.jpg');
new Image('water-can','./images/water-can.jpg');
new Image('wine-glass','./images/wine-glass.jpg');
console.log(imageArray);

function postImages (){
  imgElOne.src = imageArray[0].src;
  imgElTwo.src = imageArray[1].src;
  imgElThree.src = imageArray[2].src;
}