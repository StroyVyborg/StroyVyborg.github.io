var modal = document.getElementById('myModal12');
var img = document.getElementById('myImg12');
var modalImg = document.getElementById("img12");
var captionText = document.getElementById("caption12");

img.onclick = function(){
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;	
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function(){
	modal.style.display = "none";
}