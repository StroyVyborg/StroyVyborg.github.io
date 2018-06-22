var modal = document.getElementById('myModal6');
var img = document.getElementById('myImg6');
var modalImg = document.getElementById("img06");
var captionText = document.getElementById("caption6");

img.onclick = function(){
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;	
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function(){
	modal.style.display = "none";
}