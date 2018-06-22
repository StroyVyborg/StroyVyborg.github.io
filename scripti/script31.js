var modal = document.getElementById('myModal31');
var img = document.getElementById('myImg31');
var modalImg = document.getElementById("img31");
var captionText = document.getElementById("caption31");

img.onclick = function(){
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;	
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function(){
	modal.style.display = "none";
}