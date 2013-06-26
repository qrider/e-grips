// setter-tips.js
        
        var setterTips = new Array();
        setterTips[0]= "Always forerun, forerun, forerun your problems, and don’t be afraid to make the necessary tweaks.  - Jamie Emerson";
        setterTips[1]= "When in doubt add extra feet.  You can do so without changing the nature of your route, while making it more friendly for climbers of all sizes. - Jamie Emerson";
        setterTips[2]= "Don’t shut people down on the first move.  Get people up high on your problem. <br/>- Jamie Emerson";
        setterTips[3]= "Brush down your tape with a wire brush.  It takes a couple of seconds and the tape will last longer.  - Jamie Emerson";
        setterTips[4] = "When setting with very large holds use an adjacent smaller hold to help support and prevent the larger hold from spinning. <br/>- General";
        setterTips[5] = "Lay out all your holds before you start, from smallest to biggest. It’s a small task that goes a long way to speed and efficiency. <br/>- Jamie Emerson";
        setterTips[6] = "Always use bolts with clean, fresh threads. Damaged threads will shorten the life of your T-Nuts and give you more work in the end. - Jamie Emerson";
        setterTips[7] = "Get to know your members and competitors. The routes are for them. Listen to what they have to say and use the info to make yourself a better setter. - Jamie Emerson";
        setterTips[8] = "In comp setting, try to make the movement sustained but increasingly difficult, rather than defined by a distinct crux. - Chris Danielson";
        setterTips[9] = "If you’re trying to force movements, avoid using match-able holds and make sure that moves cannot be skipped by long reaches. - Chris Danielson";
        setterTips[10] = "To crank up the difficulty of a move, look to the feet before the hands.  A small turn to a directional foot can make all the difference. - Chris Danielson";
        setterTips[11] = "Never leave the ground without bolts.  Never leave the ground without bolts.  Never leave the ground without bolts. - Chris Danielson";
        
                
        
        var stStyles = new Array();
        stStyles[0] = "text-decoration:none;";
        stStyles[1] = "font-weight:bold;";
        
        /* sets the text(innerHTML) of a given element(by ID) with a random setter-tip*/
        function proTips(setterID){
        
            if(document.getElementById)
            {
                var cDate = new Date();
	            var val = cDate.getSeconds() % setterTips.length;
	            
	            //add link and styles
	            var stTemp = "<a href='../protips.html' style='";
	            
	            for(i=0; i < stStyles.length; i++)
	            {
	                stTemp = stTemp + stStyles[i];
	            }
	            
	            stTemp = stTemp + "'>" + setterTips[val] + "</a>";
	            
                var stObject = document.getElementById(setterID);
                
                stObject.innerHTML = stTemp;            
            }            
        }
        
        /*returns a setter tip at the given index*/
        function getSetterTip(tipIndex)
        {   
            if( (tipIndex <= setterTips.length) && (tipIndex > -1) ){
                return setterTips[tipIndex];
            }else
            {
                return null;
            }       
        }
        
