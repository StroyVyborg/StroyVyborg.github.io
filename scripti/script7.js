var modal = document.getElementById('myModal7');
var img = document.getElementById('myImg7');
var modalImg = document.getElementById("img07");
var captionText = document.getElementById("caption7");

img.onclick = function(){
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;	
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function(){
	modal.style.display = "none";
}