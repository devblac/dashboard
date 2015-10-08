$(document).ready(function() {
    
    /* Intento cero de mover y resizear divs. 
    var divsArray = [1,2,3,4,5,6,7,8,9];
    for (i=0;i<divsArray.length;i++){
        $('div #i').draggable();
    	$('div #i').resizable();
    };  */	
    
    /* Primer intento (satisfactorio) de mover y resizear divs:
    $('#1, #2, #3, #4, #5, #6, #7, #8, #9').draggable();
    $('#1, #2, #3, #4, #5, #6, #7, #8, #9').resizable();
    */
    

    /* Método optimizado para mover y resizear los divs:
    for (i=0;i<10;i++){
        $('#'+i+'').draggable();
        $('#'+i+'').resizable();  
    };  */
    /*  Que se puedan mover uno encima de otro, de manera caótica:
    $('li').mouseenter(function() { 
        $(this).draggable();
    });
    */
    // Modificar tamaño libremente:
    $('li').mouseenter(function() { 
        $(this).resizable();
    });
    
    /* QUITAR COMMENT
    $('li').mouseenter(function() { 
        $(this).fadeTo('fast','0.6');
    });
    */

    /* $('#'+i+'').resizable(); */

    // Ocultar boxes:
    $('div.box').click(function(){
        $(this).hide();
        $(this).parent('li').hide();
    });


    // Hacer fades a los boxes al pasar, el fadeOut verifica si es visible ó no:
    $('li').mouseenter(function() { 
        $(this).fadeTo('fast','0.6');
    });
    
    $('li').mouseleave(function() { 
        if($(this).is(":visible")){
            $(this).fadeTo('fast','1');
        }
    });

    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
    $( "#sortable" ).selectable();
});

