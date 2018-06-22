var modal = document.getElementById('myModal23');
var img = document.getElementById('myImg23');
var modalImg = document.getElementById("img23");
var captionText = document.getElementById("caption23");

img.onclick = function(){
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;	
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function(){
	modal.style.display = "none";
}