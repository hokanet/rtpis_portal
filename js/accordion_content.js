// JavaScript Document
var acc_content_header = document.getElementsByClassName("acc_content_header");
var i;

for (i = 0; i < acc_content_header.length; i++) {
  acc_content_header[i].onclick = function() {
    this.classList.toggle("active");
  
    var acc_content = this.nextElementSibling;
    if (acc_content.style.maxHeight){
      acc_content.style.maxHeight = null;
    } else {
      acc_content.style.maxHeight = acc_content.scrollHeight + "px";
    } 
  }
}

function openTab(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab_content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab_links");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

