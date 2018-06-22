var modal = document.getElementById('myModal9');
var img = document.getElementById('myImg9');
var modalImg = document.getElementById("img09");
var captionText = document.getElementById("caption9");

img.onclick = function(){
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;	
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function(){
	modal.style.display = "none";
}