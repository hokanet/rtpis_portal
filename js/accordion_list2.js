// JavaScript Document



var acc = document.getElementsByClassName("accordion_list2");
var i;

function click_action(){
  $('.accordion').removeClass('active');
  $('.panel').removeClass('show');

  this.classList.toggle("active");
  this.nextElementSibling.classList.toggle("show");
}

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = click_action;
}