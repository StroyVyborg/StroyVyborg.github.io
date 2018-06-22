var modal = document.getElementById('myModal3');
var img = document.getElementById('myImg3');
var modalImg = document.getElementById("img03");
var captionText = document.getElementById("caption3");

img.onclick = function(){
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;	
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function(){
	modal.style.display = "none";
}