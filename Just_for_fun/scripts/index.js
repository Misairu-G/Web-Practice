const myImage = document.querySelector('img');

myImage.onclick = function() {
    const mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/x264.png') {
      myImage.setAttribute ('src','images/Egg%20Yolk%20Ravioli.jpg');
    } else {
      myImage.setAttribute ('src','images/x264.png');
    }
};

const myButton = document.querySelector('button');
const myHeading = document.querySelector('h1');

function setUserName() {
  const myName = prompt('Please enter your name.');
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
  const storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
