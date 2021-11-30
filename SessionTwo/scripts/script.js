let animate;
function moveLeft(){
    let img = $('#drive')
    right = parseInt(img.css('right'), 10);

    if (10 >= right) {
        img.css('right') = (right + 5) + 'px';

        animate = setTimeout(function(){moveLeft();},20); // call moveRight in 20msec

        //stopanimate = setTimeout(moveLeft,20);
    } else {
        stop();
    }
}

function stop(){
   clearTimeout(animate);
}