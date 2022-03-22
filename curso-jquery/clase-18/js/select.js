( function(){

    $('document').ready(function(){

        $.ajax({
			type: 'GET',
			url : 'php/servicios/get.alumnos.php',
			dataType: 'json',
		})
		.done(function( data ){
			console.log("Correcto!");
            console.log(data);
		})
		.fail(function(err){
			const myJSON = JSON.stringify(err);
			console.log( "Error: " + myJSON );
		});

    });

})();