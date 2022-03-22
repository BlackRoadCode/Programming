(function(){

    $.smallBox = function( options ){

        options = $.extend({
            title:'',
            subtitle:'',
            message:'',
            icon:'bi-hand-thumbs-up',
            img: '',
            timeout:3000
        }, options);

        let html = '';
            html += '<div class="smallBoxContainer">';
            html += '<div class="smallBoxPhoto">';
            html += '<img src="'+ options.img +'" alt="">';
            html += '</div>';
            html += '<div class="smallBoxContent" align="center">';
            html += '<div class="smallBoxTxtContainer" align="left">';
            html += '<span class="smallBoxTitle">'+ options.title +'</span>';
            html += '<span class="smallBoxSubtitle">'+ options.subtitle +'</span>';
            html += '</div>';
            html += '<div class="smallBoxPeak"></div>';
            html += '<div class="smallBoxColorBox">';
            html += '<div class="smallBoxColorText">';
            html += '<i class="bi bi-bell"></i> '+ options.message +'';
            html += '</div>';
            html += '<div class="smallBoxColorIcon"><i class="bi '+ options.icon +'"></i></div>';
            html += '</div>';
            html += '<div class="smallBoxShadow"></div>';
            html += '</div>';
            html += '</div>';

            $('body').append( html );

            animateEntrance();

            setTimeout( function(){

                animateExit();

            }, options.timeout );
    };

    function animateEntrance(){
        $smallBox = $('.smallBoxContainer');
        let tl = new TimelineMax();

        tl.from( $smallBox, { duration:1.3, opacity:0, x:"+=350px" })
    }

    function animateExit(){
        
        let tl = new TimelineMax();
        tl.to( $smallBox, { duration:1, opacity:0, x:"+=350px", onComplete:removeSmallBox })
    }
    
    function removeSmallBox(){
        $smallBox = $('.smallBoxContainer');
        $smallBox.remove();
    }

})();