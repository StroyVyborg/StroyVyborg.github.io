var modal = document.getElementById('myModal10');
var img = document.getElementById('myImg10');
var modalImg = document.getElementById("img10");
var captionText = document.getElementById("caption10");

img.onclick = function(){
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;	
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function(){
	modal.style.display = "none";
}