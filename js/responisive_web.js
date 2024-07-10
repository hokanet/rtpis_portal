// JavaScript Document
//Responsive Navigation Bar
function opentopNav() {
	var x = document.getElementById("topNav");
	if (x.className === "topNav") {
	//	closesideNav();
		x.className += " responsive";
	} else {
		x.className = "topNav";
	}
}
//Sidenav Push
var sideNav = document.getElementById("sideNav");
var container = document.getElementById("container");

function opensideNav() {
//	opentopNav();
	sideNav.className += " responsive";		
	container.className += " responsive";
}

function closesideNav() {
	sideNav.className = "sideNav";
	container.className = "container";
}