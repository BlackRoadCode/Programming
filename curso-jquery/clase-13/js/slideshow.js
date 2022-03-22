(function () {

    $.slideShow = function( options ){

        options = $.extend({

            divDestino:'.slideshow',
            intervalo: 1500,
            ancho:600,
            colorBotonesActive:'#58167f',
            colorBotonesInactive:'#a1a1a1',
            animationEase:'elastic.out(1,0.3)',
            animationDuration:1500,
            slides:[],

        }, options);

        if( options.slides.length == 0 ){
            alert("es necesario ingresar slides");
            return;
        }

        options.animationDuration = options.animationDuration / 1000;

        let actual = 0;
        let ancho = options.ancho;
        let slides = options.slides.length;

        //Crear slideshow
        let content = "";

        content += "<ul class='p-0'>"
        for (let i = 0; i < options.slides.length; i++) {
           content += "<li><img src='"+ options.slides[i] +"' alt=''></li>"
        }
        content += "</ul>"

        $(options.divDestino).append( content );

        let $slideshow = $(options.divDestino + ' ul');

        //Crear botones de slides
        let buttons = "";
        for (let i = 0 ; i < options.slides.length ; i++) {
            buttons += "<div class='ms-1 slideButton' data-idx='"+i+"'></div>";
        }

        let $puntos = $('.slideShowButtons');
        $puntos.append( buttons );
    
        $puntos.find("div").eq(0).css({
            backgroundColor: options.colorBotones
        });
    
        var intervalo = setInterval( function(){
            mover('sig');
        }, options.intervalo );
    
        function mover( dir, click ){
    
            ( dir === 'sig') ? actual-- : actual++;
    
            if ( actual > 0) {
                actual = (slides -1) * -1;
            } else if( actual <= (slides *- 1) ){
                actual = 0;
            }
    
            moverPorPunto( actual, click );
            
        }
        
        function moverPorPunto( actual, click ){
    
            if( click ){
                clearInterval( intervalo );
            }
    
            let margen = actual * ancho;
            let idx = actual * -1;
            let $puntoActual = $puntos.find('div').eq(idx);
            let $otrosPuntos = $puntos.find('div').not( $puntoActual );
        
            // Animación con TweenMax
            let timeline = new TimelineMax();
            timeline.to( $slideshow,{ duration:options.animationDuration, ease: options.animationEase, marginLeft:margen })
                    .to( $puntoActual, { duration:0.5, backgroundColor:options.colorBotonesActive }, ("-=" + options.animationDuration) )
                    .to( $otrosPuntos, { duration:0.5, backgroundColor:options.colorBotonesInactive }, ("-=" + options.animationDuration) )
        }
    
        $('.btnSlide').on('click', function(){
            let dir = $(this).data('mov');
            mover( dir, true );
        });
    
        $('.slideButton').on( 'click', function(){
            let idx = $(this).data('idx');
            idx = idx * -1;
    
            console.log(idx);
    
            moverPorPunto( idx, true );
        });    

    }

})();