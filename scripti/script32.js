var modal = document.getElementById('myModal32');
var img = document.getElementById('myImg32');
var modalImg = document.getElementById("img32");
var captionText = document.getElementById("caption32");

img.onclick = function(){
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;	
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function(){
	modal.style.display = "none";
}