// JavaScript Documentvar

acc = document.getElementsByClassName("accordion_list");
var i;
var last;
var alwaysOneOpen = true;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
	  
	// If the same accordion was clicked, toggle it
    if (last === this && alwaysOneOpen) {
      toggleAccordion(last);
	  
    } else {
      // If another accordion was open, close it
      if (last) {
        closeAccordion(last);
      }
      // Open clicked accordion
      last = this;
      openAccordion(last);
    }
  };
}

var closeAccordion = function(acc) {
  acc.classList.remove("active");
  var panel = acc.nextElementSibling;
    panel.classList.remove("active");
  panel.style.maxHeight = null;
}

var openAccordion = function(acc) {
  acc.classList.add("active");
  var panel = acc.nextElementSibling;
    panel.classList.add("active");
  panel.style.maxHeight = panel.scrollHeight + "px";
}

var toggleAccordion = function(acc) {
  last.classList.toggle("active");
  var panel = last.nextElementSibling;
  panel.classList.toggle("active");
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
};

last = acc[-0];
toggleAccordion(last);