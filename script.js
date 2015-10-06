<script src="https://togetherjs.com/togetherjs-min.js"></script>

var crearDivs = function(){
	for (i=1;i<10;i++){
        console.log(i);
        var d = document.createElement("<div></div>");
	};
};

$(document).ready(function() { 
    $('#container').mouseenter(function() { 
        $('div').hide();
        $('div').fadeTo('fast','0.8');
    });
    $('#container').mouseleave(function() { 
        $('div').show();
        $('div').fadeTo('fast','1');
    });
    $('#main').draggable();
    $('#main').resizable();
});


crearDivs();