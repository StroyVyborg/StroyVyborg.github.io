var modal = document.getElementById('myModal2');
var img = document.getElementById('myImg2');
var modalImg = document.getElementById("img02");
var captionText = document.getElementById("caption2");

img.onclick = function(){
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;	
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function(){
	modal.style.display = "none";
}