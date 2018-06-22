var modal = document.getElementById('myModal22');
var img = document.getElementById('myImg22');
var modalImg = document.getElementById("img22");
var captionText = document.getElementById("caption22");

img.onclick = function(){
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;	
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function(){
	modal.style.display = "none";
}