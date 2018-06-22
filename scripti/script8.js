var modal = document.getElementById('myModal8');
var img = document.getElementById('myImg8');
var modalImg = document.getElementById("img08");
var captionText = document.getElementById("caption8");

img.onclick = function(){
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;	
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function(){
	modal.style.display = "none";
}