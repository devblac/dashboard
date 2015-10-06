/*
var crearDivs = function(){
	for (i=1;i<10;i++){
        console.log(i);
        
        var divElement = document.createElement("div");        
		var divTextElement = document.createTextNode(i);       
		divElement.appendChild(divTextElement);                
		document.body.appendChild(divElement);
		
        
	};
};
*/
$(document).ready(function() {
    /*
    var divsArray = [1,2,3,4,5,6,7,8,9]
    for (i=0;i<divsArray.length;i++){
        $('div #i').draggable();
    	$('div #i').resizable();
    };	*/	
    	
    $('#1, #2, #3, #4, #5, #6, #7, #8, #9').draggable(function(){
        
    });
    $('#1, #2, #3, #4, #5, #6, #7, #8, #9').resizable(function(){
        
    });

    
    $('div').mouseenter(function() { 
        $('div #').fadeTo('fast','0.8');
    });
    
    $('#container').mouseleave(function() { 
        $('div').show();
        $('div').fadeTo('fast','1');
    });
    
});

/*
crearDivs();
*/