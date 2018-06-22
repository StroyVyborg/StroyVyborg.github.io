var modal = document.getElementById('myModal29');
var img = document.getElementById('myImg29');
var modalImg = document.getElementById("img29");
var captionText = document.getElementById("caption29");

img.onclick = function(){
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;	
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function(){
	modal.style.display = "none";
}