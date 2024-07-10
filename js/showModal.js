// JavaScript Document
function showModal(el){
// Get the modal
	var modal = document.getElementById("imgModal");
	
	// Get the image and insert it inside the modal - use its "alt" text as a caption
	//var img = document.getElementById(el.id);
	var img = el.firstElementChild;
	var modalImg = document.getElementById("img01");
	var captionText = document.getElementById("imgModalCaption");
	
  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("imgModalClose")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
var modal = document.getElementById("imgModal");	
  modal.style.display = "none";
}