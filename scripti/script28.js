var modal = document.getElementById('myModal28');
var img = document.getElementById('myImg28');
var modalImg = document.getElementById("img28");
var captionText = document.getElementById("caption28");

img.onclick = function(){
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;	
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function(){
	modal.style.display = "none";
}