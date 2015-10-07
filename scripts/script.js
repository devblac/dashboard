

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
    
    /* Intento fallido de mover y resizear divs. 

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
    $('#span-close-1').click(function(){
        $('#li1').hide();
    });
    $('#span-close-2').click(function(){
        $('#li2').hide();
    });
    $('#span-close-3').click(function(){
        $('#li3').hide();
    });
    $('#span-close-4').click(function(){
        $('#li4').hide();
    });
    $('#span-close-5').click(function(){
        $('#li5').hide();
    });
    $('#span-close-6').click(function(){
        $('#li6').hide();
    });
    $('#span-close-7').click(function(){
        $('#li7').hide();
    });
    $('#span-close-8').click(function(){
        $('#li8').hide();
    });
    $('#span-close-9').click(function(){
        $('#li9').hide();
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
});



/*
'#'+this.id
crearDivs();
*/