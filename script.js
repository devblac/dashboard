<script src="https://togetherjs.com/togetherjs-min.js"></script>

var crearDivs = function(){
	for (i=1;i<10;i++){
        console.log(i);
        
        var divElement = document.createElement("div");        // Create a <button> element
		var divTextElement = document.createTextNode(i);       // Create a text node
		divElement.appendChild(divTextElement);                                // Append the text to <button>
		document.body.appendChild(divElement);

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