var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/x264.png') {
      myImage.setAttribute ('src','images/Egg%20Yolk%20Ravioli.jpg');
    } else {
      myImage.setAttribute ('src','images/x264.png');
    }
};

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  // alert("Name changed")
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

myButton.onclick = function() {
  setUserName();
};

if(!localStorage.getItem('name')) {
  // setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}