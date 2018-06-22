var modal = document.getElementById('myModal15');
var img = document.getElementById('myImg15');
var modalImg = document.getElementById("img15");
var captionText = document.getElementById("caption15");

img.onclick = function(){
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;	
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function(){
	modal.style.display = "none";
}