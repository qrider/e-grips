        
        var secondaryIDs = new Array()
        secondaryIDs[0]= "holds"
        secondaryIDs[1]= "access"
        secondaryIDs[2]= "tech"
        secondaryIDs[3]= "team"
        secondaryIDs[4]= "train"
        secondaryIDs[5]= "about"
        secondaryIDs[6]= "news"
        secondaryIDs[7]= "search"
    
        var holdsMenu = new Array()
        holdsMenu[0]='<a href="http://www.e-grips.com/all-climbing-holds/">All</a>'
        holdsMenu[1]='<a href="http://www.e-grips.com/first-dibs.html">First Dibs</a>'
        holdsMenu[2]='<a href="http://www.e-grips.com/signature/">Signature</a>'
        holdsMenu[3]='<a href="http://www.e-grips.com/new/">New</a>'
        holdsMenu[4]='<a href="http://www.e-grips.com/artistic/">Artistic</a>'
        holdsMenu[5]='<a href="http://www.e-grips.com/sandstone/">Sandstone</a>'
        holdsMenu[6]='<a href="http://www.e-grips.com/limestone/">Limestone</a>'
        holdsMenu[7]='<a href="http://www.e-grips.com/granite">Granite</a>'
        holdsMenu[8]='<a href="http://www.e-grips.com/pure">Pure</a>'
        holdsMenu[9]='<a href="http://www.e-grips.com/features">Features</a>'
        holdsMenu[10]='<a href="http://www.e-grips.com/woodscrew">Woodscrew</a>'
        holdsMenu[11]='<a href="http://www.e-grips.com/kids/">Kids</a>'
        //holdsMenu[10]='<a href="http://www.e-grips.com/first-dibs">Favorites</a>'
    
        var accessMenu = new Array()
        //accessMenu[0]='<a href="http://www.e-grips.com/index.html">Softgoods</a>'
        accessMenu[0]='<a href="http://www.e-grips.com/accessories/tools.html">Tools</a>'
        accessMenu[1]='<a href="http://www.e-grips.com/accessories/fasteners.html">Fasteners</a>'
        accessMenu[2]='<a href="http://www.e-grips.com/accessories/starters.html">Starters</a>'
        
        var techMenu = new Array()
        techMenu[0]='<a href="http://www.e-grips.com/tech.html">Hold Technology</a>'
        techMenu[1]='<a href="http://www.e-grips.com/index.html#hold-index">Hold Index</a>'
        techMenu[2]='<a href="http://www.e-grips.com/shipping.html">Shipping</a>'
        
        var teamMenu = new Array()
        teamMenu[0]='<a href="http://www.e-grips.com/setters/">Competition Routesetting Team</a>'
        teamMenu[1]='<a href="http://www.e-grips.com/featured-setters/">Profiled Routesetters</a>'
        teamMenu[2]='<a href="http://www.e-grips.com/protips.html">Pro Tips</a>'
        teamMenu[3]='<a href="http://www.e-grips.com/setters-letter.html">Letter to the Setter</a>'
        
        
        var trainMenu = new Array()
        trainMenu[0]='<a href="http://www.e-grips.com/training">Training System & Holds</a>'
        
        
        var aboutMenu = new Array()
        aboutMenu[0]='<a href="http://www.e-grips.com/history.html">History and Hold Shaping</a>'
        aboutMenu[1]='<a href="http://www.e-grips.com/our-friends.html">Our Friends</a>'
        aboutMenu[2]='<a href="http://www.e-grips.com/contact.html">Contact Us</a>'
        
        var defHead = new Array()
        defHead[0]=''
                                           
      
        function rolloverSecondHeader(primaryID, secondaryID){
             if (document.getElementById) 
             {  
                
                var pid = document.getElementById(primaryID);
                var sid = document.getElementById(secondaryID);
                
                //remove background images for all elements and change color of font back to normal
                var tempID;
                for(a=0;a<secondaryIDs.length;a++)
                {
                    tempID = document.getElementById(secondaryIDs[a]);
                    tempID.style.backgroundImage="none";
                    tempID.style.color="#85C1FE";
                }
                
                //style change for primary elements
                pid.style.backgroundRepeat="no-repeat";
                pid.style.color="#FFFF00";
                
                var tempString = '';
                var tempArray = new Array();
                                
                switch (primaryID)
                {
                    case "holds":
                        tempArray = holdsMenu;
                        tempString = '<ul style="width: 90%; text-align: right;">';
                        break;
                    case "access":
                        tempArray = accessMenu;
                        tempString = '<ul style="width: 50%; text-align: center;">';
                        break;
                    
                    case "tech":
                        tempArray = techMenu;
                        tempString = '<ul style="width: 85%; text-align: center;">';
                        break;
                    
                    case "team":
                        tempArray = teamMenu;
                        tempString = '<ul style="width: 95%; text-align: right;">';
                        break;
                        
                    case "train":
                        tempArray = trainMenu;
                        tempString = '<ul style="width: 65%;">';
                        break;
                    
                    case "about":                    
                        tempArray = aboutMenu;
                        tempString = '<ul style="width: 73%;">';
                        break;
                    
                    default: 
                        tempArray = defHead; //default;
                        tempString = '<ul style="width: 94%;">';
                }//switch
                
                for(b=0; b < tempArray.length; b++)
                {
                    tempString = tempString + '<li>' + tempArray[b] + '</li>';
                }
                tempArray = null;
                            
                tempString = tempString + '</ul>';
               
                sid.innerHTML = tempString;
                tempString = "";
                
             }//if
        }// end function
        
        function displayDiscountAdd(){
        	var loc = window.location + "";
        	
        	if(loc == "http://www.e-grips.com/" || loc == "http://www.e-grips.com/index.html"){
        		var el = document.getElementById("left-main");
        		discountCodeAd(el, 5, 5);        		
        	}else if(loc == "http://www.e-grips.com/new/" || 
        			loc == "http://www.e-grips.com/new/index.html" ||
        			loc == "http://www.e-grips.com/all-climbing-holds/" ||
        			loc == "http://www.e-grips.com/all-climbing-holds/index.html"
        	){
        		var el = document.getElementById("inner-main-top");
        		discountCodeAd(el, 260, 18);
        	}
       	
        }
        
        function discountCodeAd(el, xOffset, yOffset){
        	var xy = getXY(el);
        	var div = document.createElement("div");
        	div.className = "adBox";
        	div.innerHTML = "Enter <span>'Climb'</span> as the discount code and receive 10% off your order!"
        	document.body.appendChild(div);
        	
        	var x = (xOffset) ? xy.x + xOffset : xy.x;
        	var y = (yOffset) ? xy.y + yOffset : xy.y;
        	
        	div.style.left = x + "px";
        	div.style.top = y + "px";        	
        }
        
        function getXY(el){
        	var x = 0, y = 0;
   
        	while (el.offsetParent) {
        		x += el.offsetLeft;
        		y += el.offsetTop;
        		el = el.offsetParent;
        	}
        	
        	return { x: x, y: y };        	
        }
        
        
        function flash(){
        	document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="252" height="202">\n');
			document.write('<param name="movie" value="flash/bin-debug/egripsNews.swf">\n');
			document.write('<param name="quality" value="high" />\n');
			document.write('<embed src="flash/bin-debug/egripsNews.swf" quality="high"');
			document.write('width="252" height="202" wmode="transparent"');
			document.write('name="egripsNews" align="middle"');
			document.write('play="true"	loop="false" quality="high"');
			document.write('allowScriptAccess="sameDomain" type="application/x-shockwave-flash"');
			document.write('pluginspage="http://www.adobe.com/go/getflashplayer"');
			document.write('></embed>\n');
			document.write('</object>\n');
			alert("test");
        }
        
        //displayDiscountAdd();
