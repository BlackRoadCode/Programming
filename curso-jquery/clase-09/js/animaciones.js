(function () {

    let $cajaRoja = $('.cajaRoja');

    function mover(dir) {
        $cajaRoja.clearQueue();

        switch (dir) {
            case 'up':
                $cajaRoja.animate({
                    top: "-=50px"
                }, 200);

                break;
            case 'down':
                $cajaRoja.animate({
                    top: "+=50px"
                }, 200);

                break;
            case 'left':
                $cajaRoja.animate({
                    left: "-=50px"
                },200);

                break;
            case 'right':
                $cajaRoja.animate({
                    left: "+=50px"
                },200);

                break;
            default:
                $cajaRoja.animate({
                    top: '0',
                    left: '0'
                }, 500);

                break;
        }
    }

    $(document).on('keypress', function(event){
        let keyCode = event.keyCode;

        switch (keyCode) {
            // W
            case 119:
            mover('up')
                break;
            // A    
            case 115:
            mover('down')    
                break;
            // S
            case 97:
            mover('left')    
                break;
            // D
            case 100:
            mover('right')    
                break;
        
            default:
            mover('reset')
                break;
        }
    });

    $('button').on('click', function () {
        let dir = $(this).data('dir');
        mover(dir);
    });

})();