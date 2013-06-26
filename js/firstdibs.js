
function FirstDibs(){}


FirstDibs.prototype.toggleFirstDibs = function(id){
	
	var kids = document.getElementById("firstDibDescriptions").childNodes;
	
	for(var i=0; i<kids.length; i++){
		var element = kids[i];
		var elClass = element.className;		
		if(elClass == "show"){
			element.className = "hide";
			document.getElementById(element.id+"Img").className = "hide";			
		}	
	}

	document.getElementById(id).className = "show";
	document.getElementById(id+"Img").className = "show";	

}
var FirstDibs = new FirstDibs();