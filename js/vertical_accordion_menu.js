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

//Highlight & Expand Current Item Menu
function loadCurrent_item() {
	var acc_item = document.querySelectorAll("a.accordionItem");	//ITEM WITH HYPERLINK
	var url = window.location.pathname;
	var filename = url.substring(url.lastIndexOf('/')+1);
	//alert(filename);
	var ahref, ahref_filename, curr_li;


	ahref = acc_item[0].getAttribute("href");
	
	document.getElementById("no_of_ahref").innerHTML = acc_item.length;		
	document.getElementById("filename").innerHTML = filename;	
	document.getElementById("ahref").innerHTML = ahref;

	// Loop through all accordion items list, and highlight current item
	for (var i = 0; i < acc_item.length; i++) {
		ahref = acc_item[i].getAttribute("href");
		if (ahref.includes('/') == true)
		{
			ahref_filename = ahref.substring(ahref.lastIndexOf('/')+1);
		}
		else
		{
			ahref_filename = ahref;
		}
		if (ahref_filename == filename)
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
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
	
	//var acc = document.getElementsByClassName("accordion");
	//Reset the menu
    setClass(acc, 'active', 'remove');
    setClass(panel, 'show', 'remove');
	resetListItem(li);
		
	var upperItem, curr_panel;

	var match_li = [];
	var notmatch_li = [];
	

	
	if (filter.length > 0){
		// Loop through all list items, and hide those who don't match the search query
		for (i = 0; i < li.length; i++) {
			a = li[i].getElementsByTagName("a")[0];		//the text of list item

			if (a.innerHTML.toUpperCase().indexOf(filter) > -1 ) {
				//---------match
				match_li.push(i);
				// li[i].style.display = "";					
			} else {
				//not match					
			  	notmatch_li.push(i);
				li[i].style.display = 'none';
			}
		}	
	}

	document.getElementById("searchwords").innerHTML = filter;
	document.getElementById("match_li").innerHTML = match_li;			
	document.getElementById("notmatch_li").innerHTML = notmatch_li;
		
	if (match_li.length > 0)
	{
/*		for (i = 0; i < match_li.length; i++)
		{
			displayResult(li[match_li.pop()]);		
			document.getElementById("match_li_check").innerHTML =  document.getElementById("match_li_lenght").innerHTML + "</br>" + match_li.length;			
		}			
*/		
		for (i = match_li.length-1 ; i >= 0 ; i--)
		{
			document.getElementById("match_li_check").innerHTML = document.getElementById("match_li_check").innerHTML + "</br>" + "counter:" + i + " ==> li" + match_li[i] + " " + li[match_li[i]].innerHTML ;
			displayResult(li[match_li[i]]);		
			
			//document.getElementById("match_li_check").innerHTML =  i  + " ==> " + match_li[i]  + li[match_li[i]].innerHTML +  "</br>" + document.getElementById("match_li_check").innerHTML; 
		}			
	}
	

}

function displayResult(el){	//matched list item
	var initalnode = document.getElementById("myUL");		//Initial <UL> node
	var curr_panel = el.parentNode;				//Current Panel of list item
	
	if (!curr_panel.isSameNode(initalnode)){
		var upperItem = curr_panel.previousElementSibling;	//Accordion List item <li> of current panel

		document.getElementById("match_li_check").innerHTML = document.getElementById("match_li_check").innerHTML  + "-->" + upperItem.innerHTML ;
		
		if (!upperItem.classList.contains('active')){
			upperItem.style.display = 'block';	
			upperItem.classList.toggle('active');
			curr_panel.classList.toggle('show');
		}
		
		displayResult(upperItem);		
	}
}

/*function displayResult(el){
	var upperItem = el.parentElement.previousElementSibling;	//Upper level List item <li>
	var curr_panel = el.parentNode;				//Current Pannel 
	startnode = document.getElementById("myUL");		
	if (!curr_panel.isSameNode(startnode)){
		if (!upperItem.classList.contains('active')){
			//upperItem.classList.toggle('active');
			upperItem.style.display = 'block';	
			curr_panel.classList.toggle('show');
			displayResult(upperItem);
		}
	}
}*/

function showPanel(el){
	var next_panel = el.nextElementSibling;	//The following panel
	var item_of_next_panel = next_panel.children;	//Collection of Item in next panel
	next_panel.classList.toggle('show');
    for (i = 0; i < item_of_next_panel.length; i++) {
		if (item_of_next_panel[i].tagName == "LI"){
			item_of_next_panel[i].style.display = 'block';	
		}
    }
	//if 
	//el.nextElementSibling.classList.toggle("show");
}

function showParent(el){
	var upperItem = el.parentElement.previousElementSibling;	//Upper level item
	var curr_panel = el.parentNode;				//Current Pannel 
	startnode = document.getElementById("myUL");	//theStardnode
	if (!curr_panel.isSameNode(startnode)){
		upperItem.classList.toggle('active');	
		curr_panel.classList.toggle('show');
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
		els[i].style.display = 'block';
    }
}