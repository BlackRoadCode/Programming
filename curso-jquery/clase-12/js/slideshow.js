(function () {

    let actual = 0;
    let ancho = 600;

    let $slideshow = $('.slideshow ul');
    let slides = $slideshow.find('li').length;

    var intervalo = setInterval( function(){
        mover('sig');
    }, 1500);

    function mover( dir, click ){

        if( click ){
            clearInterval( intervalo );
        }

        ( dir === 'sig') ? actual-- : actual++;

        if ( actual > 0) {
            actual = (slides -1) * -1;
        } else if( actual <= (slides *- 1) ){
            actual = 0;
        }

        let margen = actual * ancho;

        // Animación con TweenMax
        let timeline = new TimelineMax();

        // timeline.to($slideshow, 1, { marginLeft:margen, ease:elastic.out(1,0.3) });
        timeline.to($slideshow, {duration:1.5, ease: 'elastic.out(1,0.3)', marginLeft:margen });

        // Animación con jQuery puro
        // $slideshow.animate({
        //     marginLeft:margen,
        // }, 450);

    }

    $('.btnSlide').on('click', function(){
        let dir = $(this).data('mov');
        mover( dir, true );
    });

    

})();