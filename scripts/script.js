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

    /*
    $("div").height("100px");
    $("div").width("50px");
    $("div").css("background-color","#008800");
    
    $p = $('p');
    $p = $("<p>I'm a new paragraph!</p>")

    $(".info").append("<p>Stuff!</p>");
    $(".info").prepend("<p>Stuff!</p>");
    $('<p>Stuff!</p>').appendTo('.info');
    .prependTo()
    $('target').after('<tag>To add</tag>');

    var $paragraph = $("p"); // existing element
    $("div").after($paragraph); // Move it!
    // Same as:
    $("div").after($("p"));
    
    .remove()
    .empty() // Deletes all its decendants.

    $('selector').addClass('className');
    $('selector').removeClass('className');

    .toggleClass()

    */

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

