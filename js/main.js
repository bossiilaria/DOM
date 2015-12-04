var myStart;

function myFunction() {
    myVar = setInterval(alertFunc, 3000);
}

function alertFunc() {
    alert("Hello!");
}

//Use clearInterval to stop

function stopMyFunction() {
	clearInterval(myVar);
}
//Practice body.innerHTML: Make the whole content disappear
/*
	document.body.innerHTML = "";
*/

//Change the size of the 3 avatars
var avatarEls = document.getElementsByTagName("img");

for(var i = 0; i < avatarEls.length; i++) {
	avatarEls[i].height = 160;
}


var namePink = document.getElementById("pink");
namePink.innerHTML="Winston";

var nameGreen = document.getElementById("green");
nameGreen.innerHTML="Watson";

var nameOrange = document.getElementById("orange");
nameOrange.innerHTML="Watsup";


var headingEl = document.querySelector("#heading");
headingEl.style.color = "green";
headingEl.style.backgroundColor = "pink";
headingEl.style.textAlign = "center";
