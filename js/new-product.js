// JScript File

function newProduct(coordinatesArray){
    
    i = 0;
    while(i<coordinatesArray.length){
        document.writeln('<div id="newtag" style="position: absolute; left: '+ coordinatesArray[i] +'px; top: '+ coordinatesArray[i+1] +'px; z-index: 50;"><img src="../images/new.png"></img></div>');
    i = i+2;
    }
}