(function () {

    $.bigBox = function( options, callback ){

        options = $.extend({
            icon:'bi-hand-thumbs-up',
            title:'',
            text:'',
            textButton:''

            
        }, options);

        let content = '';
        content = '<div class="bigBoxBackground"></div>';

        content += '<div class="bigBoxContainer" align="center">';
        content += '<div class="bigBoxClose"><i class="bi bi-x-lg"></i></div>';
        content += '<div class="bigBoxCircle"><i class="bi '+ options.icon +'"></i></div>';
        content += '<div class="bigBoxContent">';
        content += '<span class="bigBoxTitle">'+ options.title +'</span>';
        content += '<span class="bigBoxText">'+ options.text +'</span>';
        content += '</div>';
        content += '<button class="bigBoxButton">'+ options.textButton +'</button>';
        content += '</div>';
        
        $('#insertContent').append(content);

        animateEntrance();

        // Botón cerrar
        $('.bigBoxClose').on('click', function(){
            animateExit();

            if( typeof callback == 'function' ){
                callback('btnClose');
            }
        });
        
        // Botón principal
        $('.bigBoxButton').on('click', function(){

            animateExit();

            if( typeof callback == 'function' ){
                callback('btnPrincipal');
            }
        });
        
        function animateEntrance(){
            let $bigBoxBkg = $('.bigBoxBackground');
            let $bigBoxCnt = $('.bigBoxContainer');
            // $bigBoxBkg.fadeIn(300);

            // Ancho
            let screenWidth = $(window).width();
            let bigBoxWidth = $($bigBoxCnt).width();
            
            // Alto
            let screenHeight = $(window).height();
            let bigBoxHeight = $($bigBoxCnt).height();

            $bigBoxCnt.css({
                top: (screenHeight/2) - (bigBoxHeight/2),
                left: (screenWidth/2) - (bigBoxWidth/2)
            });

            $bigBoxBkg.show();
            $bigBoxCnt.show();

            let tl = new TimelineMax();
            tl.to($bigBoxBkg,{duration:0.5, opacity:0.7 })
            .to( $bigBoxCnt, {duration:0.5, opacity:1 }, '-=0.5' )
            .from( $bigBoxCnt, {duration:0.5, y:'-=100' }, '-=0.5');
        }

        function animateExit(){
            let $bigBoxBkg = $('.bigBoxBackground');
            let $bigBoxCnt = $('.bigBoxContainer');
            
            let tl = new TimelineMax();
            tl.to($bigBoxBkg,{duration:0.5, opacity:0 })
            .to( $bigBoxCnt, {duration:0.5, opacity:0, onComplete:removeBigBox } , '-=0.5' );
        }
        
        function removeBigBox(){
            let $bigBoxBkg = $('.bigBoxBackground');
            let $bigBoxCnt = $('.bigBoxContainer');

            $bigBoxBkg.remove();
            $bigBoxCnt.remove();
        }

    };

})();