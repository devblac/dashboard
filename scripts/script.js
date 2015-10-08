

/* Intento fallido para crear los divs desde JS
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
    
    /* Intento cero de mover y resizear divs. 

    var divsArray = [1,2,3,4,5,6,7,8,9];
    for (i=0;i<divsArray.length;i++){
        $('div #i').draggable();
    	$('div #i').resizable();
    };	*/	
    

    	/* Primer intento (satisfactorio) de mover y resizear divs:
    $('#1, #2, #3, #4, #5, #6, #7, #8, #9').draggable();
    $('#1, #2, #3, #4, #5, #6, #7, #8, #9').resizable();
        */
    

        /* Método optimizado para mover y resizear los divs:
    for (i=0;i<10;i++){
        $('#'+i+'').draggable();
        $('#'+i+'').resizable();  
    };  */
    /*
    $('li').mouseenter(function() { 
        $(this).draggable();
    });
    */
    $('li').mouseenter(function() { 
        $(this).resizable();
    });
    /* QUITAR COMMENT
    $('li').mouseenter(function() { 
        $(this).fadeTo('fast','0.6');
    });
    */
    /* $('#'+i+'').resizable(); */


    $('div.box').click(function(){
        $(this).hide();
        $(this).parent('li').hide();
    });

    /*
    $('li').mouseenter(function() { 
        $(this).fadeTo('fast','0.6');
    });
        
    $('li').mouseleave(function() { 
        $(this).fadeTo('fast','1');
    });
    */
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
    $( "#sortable" ).selectable();
});



/*
'#'+this.id
crearDivs();
*/