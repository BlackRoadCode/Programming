(function () {

    let $cajaRoja = $('.cajaRoja');
    let $cajaAzul = $('.cajaAzul');

    function mover(dir) {
        $cajaRoja.clearQueue();

        let timeline = new TimelineMax();

        switch (dir) {
            case 'up':
                $cajaRoja.animate({
                    top: "-=50px"
                }, 450);

                timeline.to( $cajaAzul, 0.45, { y:'-=50' });

                break;
            case 'down':
                $cajaRoja.animate({
                    top: "+=50px"
                }, 450);

                timeline.to( $cajaAzul, 0.45, { y:'+=50' });

                break;
            case 'left':
                $cajaRoja.animate({
                    left: "-=50px"
                },450);

                timeline.to( $cajaAzul, 0.45, { x:'-=50' });

                break;
            case 'right':
                $cajaRoja.animate({
                    left: "+=50px"
                },450);

                timeline.to( $cajaAzul, 0.45, { x:'+=50' });

                break;
            case 'reset':
                $cajaRoja.animate({
                    top: '0',
                    left: '0',
                    width:'50px',
                    height:'50px',
                }, 450);

                timeline.to( $cajaAzul, 0.45, { 
                    x:'0', 
                    y:'0',
                    width:'50px',
                    height:'50px',
                    backgroundColor:'blue'
                 });

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

    $('#btnAncho').on('click', function(){
        let $cajaRoja = $('.cajaRoja');
        $cajaRoja.clearQueue();
        let $cajaAzul = $('.cajaAzul');
        let timeline = new TimelineMax();

        $cajaRoja.animate({
            width:'+=150px',
            height:'+=150px',
        }, 500);

        timeline.to( $cajaAzul, 0.5, { 
            width:'+=150px',
            height:'+=150px',
         }).to( $cajaAzul, 2, { backgroundColor:'green' } )
    });

    $('button').on('click', function () {
        let dir = $(this).data('dir');
        mover(dir);
    });

})();