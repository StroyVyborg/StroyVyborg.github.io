var modal = document.getElementById('myModal13');
var img = document.getElementById('myImg13');
var modalImg = document.getElementById("img13");
var captionText = document.getElementById("caption13");

img.onclick = function(){
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;	
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function(){
	modal.style.display = "none";
}