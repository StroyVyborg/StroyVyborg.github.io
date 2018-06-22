var modal = document.getElementById('myModal30');
var img = document.getElementById('myImg30');
var modalImg = document.getElementById("img30");
var captionText = document.getElementById("caption30");

img.onclick = function(){
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;	
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function(){
	modal.style.display = "none";
}