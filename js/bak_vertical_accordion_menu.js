// JavaScript Document
var acc = document.getElementsByClassName("accordion");
var panel = document.getElementsByClassName('panel');

for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
    	var setClasses = !this.classList.contains('active');
        setClass(acc, 'active', 'remove');
        setClass(panel, 'show', 'remove');
		if (setClasses) {
            this.classList.toggle("active");
            //this.nextElementSibling.classList.toggle("show");
			showPanel(this);
			showParent(this);
        }else{
			showParent(this);
		}
    }
}


//FOR SEARCH CHECKING
var ahref = document.getElementsByTagName("a");
document.getElementById("no_of_a").innerHTML = ahref.length;

//FOR FRAMESET MENU USE
//for (var i =0; i < ahref.length; i++){
//	ahref[i].onclick = function(){
//    	var setClasses = !this.classList.contains('active');
//        setClass(ahref, 'active', 'remove');
//		if (setClasses) {
//			this.classList.toggle("active");
//		}
//	}
//}

//Load menu style
function loadCurrent_item() {
	var acc_item = document.querySelectorAll("a.accordionItem");	//ITEM WITH HYPERLINK
	var url = window.location.pathname;
	var filename = url.substring(url.lastIndexOf('/')+1);
	//alert(filename);
	var ahref, curr_li;


	ahref = acc_item[0].getAttribute("href");
	//document.getElementById("no_of_a").innerHTML = ahref;
	//document.getElementById("filename").innerHTML = filename;	

	for (var i = 0; i < 6; i++) {
		ahref = acc_item[i].getAttribute("href");
		if (ahref.includes(filename) == true)
		{
			curr_li = acc_item[i].parentElement;	
			curr_li.classList.toggle("current");
			displayResult(curr_li);
		}
	}
}

//Accordion Search
function accordionSearch() {
    // Declare variables

    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
	
	var match_li = [];
	var upperItem, curr_panel;
	var acc = document.getElementsByClassName("accordion");
	
    setClass(acc, 'active', 'remove');
    setClass(panel, 'show', 'remove');
	resetListItem(li);
	
	document.getElementById("searchwords").innerHTML = document.getElementById("searchwords").innerHTML + ","+ filter;
	document.getElementById("notmatch_li").innerHTML = "";
	
		if (filter.length > 0){
			// Loop through all list items, and hide those who don't match the search query
			for (i = 0; i < li.length; i++) {
				a = li[i].getElementsByTagName("a")[0];
		
				if (a.innerHTML.toUpperCase().indexOf(filter) > -1 ) {
					//---------match
					match_li.push(i);
					//li[i].style.display = ""; 
				} else {
					//not match
					document.getElementById("notmatch_li").innerHTML = document.getElementById("notmatch_li").innerHTML + "," + i;
					li[i].style.display = "none";
				}
			}	
		}
		
		if (match_li.length > 0)
		{
			document.getElementById("match_li").innerHTML = match_li;		//FOR SEARCH CHECKING
			for (i = 0; i < match_li.length; i++)
			{
				displayResult(li[match_li.pop()]);		
			}			
		}

}

function displayResult(el){
	var upperItem = el.parentElement.previousElementSibling;	//Upper level List item <li>
	var curr_panel = el.parentNode;				//Current Pannel 
	startnode = document.getElementById("myUL");		
	if (!curr_panel.isSameNode(startnode)){
		if (!upperItem.classList.contains('active')){
			//upperItem.classList.toggle("active");
			upperItem.style.display = "block";	
			curr_panel.classList.toggle("show");
			displayResult(upperItem);
		}
	}
}

function showPanel(el){
	var next_panel = el.nextElementSibling;	//The following panel
	var item_of_next_panel = next_panel.children;	//Collection of Item in next panel
	next_panel.classList.toggle("show");
    for (i = 0; i < item_of_next_panel.length; i++) {
		if (item_of_next_panel[i].tagName == "LI"){
			item_of_next_panel[i].style.display = "block";	
		}      
    }	
	//if 
	//el.nextElementSibling.classList.toggle("show");
}

function showParent(el){
	var upperItem = el.parentElement.previousElementSibling;	//Upper level item
	var curr_panel = el.parentNode;				//Current Pannel 
	startnode = document.getElementById("myUL");	
	if (!curr_panel.isSameNode(startnode)){
		upperItem.classList.toggle("active");	
		curr_panel.classList.toggle("show");
		showParent(upperItem);
	}
}

function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
        els[i].classList[fnName](className);
    }
}

function resetListItem(els) {
    for (var i = 0; i < els.length; i++) {
		els[i].style.display = "block";
    }
}