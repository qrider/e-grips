// calendar functions

function Calendar(){
    this.MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
}

// returns the name of the month as a string based upon the index (0-11)
Calendar.prototype.getMonth = function(index){
    return this.MONTHS[index];
};

//returns the index(0-11) of the month based upon the name 
Calendar.prototype.getMonthIndex = function(m_name){
    
    for(i = 0; i < this.MONTHS.length; i++){
        if(m_name == this.MONTHS[i])
            return i;        
    }
};

