var modal = document.getElementById('myModal14');
var img = document.getElementById('myImg14');
var modalImg = document.getElementById("img14");
var captionText = document.getElementById("caption14");

img.onclick = function(){
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;	
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function(){
	modal.style.display = "none";
}