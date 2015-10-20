$(document).ready(function() {
    /*  Que moveable de manera caótica:
    $('li').mouseenter(function() { 
        $(this).draggable();
    });
    */
    // Modificar tamaño libremente:
    $('li').mouseenter(function() { 
        $(this).resizable();
    });
    
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

