var modal = document.getElementById('myModal11');
var img = document.getElementById('myImg11');
var modalImg = document.getElementById("img11");
var captionText = document.getElementById("caption11");

img.onclick = function(){
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;	
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function(){
	modal.style.display = "none";
}