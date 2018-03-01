/*
var myHeading = document.querySelector('header');
myHeading.textContent = "Welcome to my site"

var myh1 = document.querySelector('h1');
myh1.textContent = "This is a test"

document.querySelector('header').onclick = function() {
alert('Welcome to my site');
}

var myPar = document.querySelector('p').onclick = function() {
var  
}

myPar.textContent = "Kentucky";

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === './Fayette.png') {
      myImage.setAttribute ('src','./Kentucky.jpg');
    } else {
      myImage.setAttribute ('src','./Fayette.png');
    }
}
*/
function myFunction() {
    var person = prompt("Please enter your name");
    if (person != null) {
        document.getElementById("demo").innerHTML =
        "Hello " + person + "! How are you today?";
    }
}