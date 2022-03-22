(function(){

    $.smallBox = function( options ){

        options = $.extend({
            name:'Pepe Sosa',
            position:'Facebook SEO',
            icon:'bi-chat-left-dots',
            // img: '/assets/img/avatar.jpg',
            color:'#89c7a0',
            timeout:3000
        }, options);

        let photoCode = '<img src="'+ options.img +'" alt="">';

        if( options.img == undefined || options.img == '' ){
            // options.img = '/assets/img/nophoto.jpg';
            photoCode = '';
        }

        let html = '';
            html += '<div style="background-color: '+ options.color +';" class="smallBoxContainerHW">';
            html += '<div class="smallBoxPhotoHW">';
            html += photoCode;
            html += '<span class="smallBoxNameHW">'+ options.name +'</span>';
            html += '<span class="smallBoxIconHW"><i class="bi '+ options.icon +'"></i></span>';
            html += '<span class="smallBoxPositionHW">'+ options.position +'</span>';
            html += '</div>';
            html += '</div>';

            $('#contentSmallBox').append( html );

            animateEntrance();

            setTimeout( function(){

                animateExit();

            }, options.timeout );
    };

    function animateEntrance(){
        $smallBox = $('.smallBoxContainerHW');
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