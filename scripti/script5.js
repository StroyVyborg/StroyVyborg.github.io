var modal = document.getElementById('myModal5');
var img = document.getElementById('myImg5');
var modalImg = document.getElementById("img05");
var captionText = document.getElementById("caption5");

img.onclick = function(){
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;	
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function(){
	modal.style.display = "none";
}