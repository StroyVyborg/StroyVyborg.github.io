var modal = document.getElementById('myModal24');
var img = document.getElementById('myImg24');
var modalImg = document.getElementById("img24");
var captionText = document.getElementById("caption24");

img.onclick = function(){
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;	
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function(){
	modal.style.display = "none";
}