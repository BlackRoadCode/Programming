(function () {

    let $cajaRoja = $('.cajaRoja');

    $('#btn-tamano').on('click', function(){
        $cajaRoja.animate({
            width:'+=50px',
            height:'+=50px',
        }).animate({
            top:'-=25px',

        }, function(){
            this.remove();
        });
    });

})();