

function showMenu(){
    $('#navegacion').show()
    $('.boton').css('background-color', 'red');
    $('.boton').text('Click here to read more');
}


function init() {
    
    $('#navegacion').hide();
}

window.onload = init;