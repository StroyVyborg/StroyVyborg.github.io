var modal = document.getElementById('myModal25');
var img = document.getElementById('myImg25');
var modalImg = document.getElementById("img25");
var captionText = document.getElementById("caption25");

img.onclick = function(){
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;	
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function(){
	modal.style.display = "none";
}