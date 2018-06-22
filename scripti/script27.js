var modal = document.getElementById('myModal27');
var img = document.getElementById('myImg27');
var modalImg = document.getElementById("img27");
var captionText = document.getElementById("caption27");

img.onclick = function(){
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;	
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function(){
	modal.style.display = "none";
}