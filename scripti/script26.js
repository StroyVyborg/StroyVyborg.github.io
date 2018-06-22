var modal = document.getElementById('myModal26');
var img = document.getElementById('myImg26');
var modalImg = document.getElementById("img26");
var captionText = document.getElementById("caption26");

img.onclick = function(){
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;	
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function(){
	modal.style.display = "none";
}