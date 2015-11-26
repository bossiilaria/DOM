var avatarEls = document.getElementsByTagName("img");

//change the size of the 3 avatars
for(var i = 0; i < avatarEls.length; i++) {
	avatarEls[i].height= 200;
}

var namePink = document.getElementById("pink");
namePink.innerHTML="Winston";

var nameGreen = document.getElementById("green");
nameGreen.innerHTML="Watson";

var nameOrange = document.getElementById("orange");
nameOrange.innerHTML="Watsup";
