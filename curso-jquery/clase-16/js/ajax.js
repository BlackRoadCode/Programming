(function(){

    // url:'/assets/json/registros.json',
    $.ajax({
        type:'GET',
        url:'http://www.json-generator.com/api/json/get/bUJTvxyUfC',
        dataType:'json',

    }).done( function(data){
        $('#photo').attr( 'src', data.picture );
        $('#name').val( data.name );
        $('#direction').val( data.address );
        $('#telephone').val( data.phone );
        $('#gender').val( data.gender );

    }).fail( function(){
        console.log('falló la petición');
    }).always( function(){
        console.log('Siempre se ejecuta');
    });

})();