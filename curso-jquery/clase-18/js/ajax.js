(function(){

	$('#frm-data').on('submit', function(event){

		event.preventDefault();

		let formulario = $(this);
		let dataSerializada = formulario.serialize();
		
		$.ajax({
			type: 'POST',
			url : 'php/servicios/post.alumnos.php',
			dataType: 'json',
			data:dataSerializada
		})
		.done(function( data ){
			console.log(data);
		})
		.fail(function(err){
			const myJSON = JSON.stringify(err);
			console.log( "Error: " + myJSON );
		});
	})



})();