var modal = document.getElementById('myModal16');
var img = document.getElementById('myImg16');
var modalImg = document.getElementById("img16");
var captionText = document.getElementById("caption16");

img.onclick = function(){
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;	
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function(){
	modal.style.display = "none";
}