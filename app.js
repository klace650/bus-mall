'use strict';
var clicks = 0;
var allowedClicks = 25;
var imageArray = [];
var fullList = document.getElementById('list');

var imgElOne = document.getElementById("image-one");
var imgElTwo = document.getElementById("image-two");
var imgElThree = document.getElementById("image-three");



// Image inputs //
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
new Image('usb','./images/usb.gif');
new Image('water-can','./images/water-can.jpg');
new Image('wine-glass','./images/wine-glass.jpg');



// Image Constructor //
function Image(name, src){
  this.viewed = 0;
  this.clicked = 0;
  this.src= src;
  this.name = name;
  imageArray.push(this);
}

function getNumber(max){
  return Math.floor(Math.random() * max);
} 

function postImages (){
  var imgOne = imageArray[getNumber(imageArray.length)];
  var imgTwo = imageArray[getNumber(imageArray.length)];
  var imgThree = imageArray[getNumber(imageArray.length)];

  while (imgOne === imgTwo){
    imgTwo = imageArray[getNumber(imageArray.length)];
  }
  while (imgTwo === imgThree){
    imgThree = imageArray[getNumber(imageArray.length)];
  }
  while (imgThree === imgOne){
    imgOne = imageArray[getNumber(imageArray.length)];
  }

  imgElOne.src = imageArray[getNumber(imageArray.length)].src;
  imgElTwo.src = imageArray[getNumber(imageArray.length)].src;
  imgElThree.src = imageArray[getNumber(imageArray.length)].src;

 
  imgElOne.src = imgOne.src;
  imgElTwo.src = imgTwo.src;
  imgElThree.src = imgThree.src;
  
  imgElOne.alt = imgOne.name;
  imgElTwo.alt = imgTwo.name;
  imgElThree.alt = imgThree.name;
  
  imgOne.viewed++;
  imgTwo.viewed++;
  imgThree.viewed++;

}
postImages();
imgElOne.addEventListener('click', eventHandler);
imgElTwo.addEventListener('click', eventHandler);
imgElThree.addEventListener('click', eventHandler); 

function renderList(){
  for (var i = 0; i < imageArray.length; i++){
    var liEl = document.createElement('li');
    liEl.textContent = `${imageArray[i].name} Clicked: ${imageArray[i].clicked} Viewed: ${imageArray[i].viewed}`;
    fullList.appendChild(liEl);
  }
}

function eventHandler(e){
  clicks++;
  console.log(e.target.alt);
  for (var i = 0; i < imageArray.length; i++){
    if (imageArray[i].name === e.target.alt){
      imageArray[i].clicked++;
    }
  }
  postImages();
  if (clicks === allowedClicks){
    imgElOne.removeEventListener('click', eventHandler);
    imgElTwo.removeEventListener('click', eventHandler);
    imgElThree.removeEventListener('click', eventHandler); 
    renderList();
  }
}
// console.log(imageArray)