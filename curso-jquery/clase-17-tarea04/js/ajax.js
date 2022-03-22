(function(){

	// var Latitude = 21.1597827;
	// var Longitude = -101.6727854;
	
	// León Gto
	var Latitude = 21.1597827;
	var Longitude = -101.6727854;

	//CDMX
	// var Latitude = 19.4120928;
	// var Longitude = -99.1843358;

	


	$.ajax({
		type: 'GET',
		url : 'http://api.openweathermap.org/data/2.5/weather?lat='+ Latitude +'&lon=' + Longitude + "&units=metric&appid=9f50a805aa0089a1edd1829a5db029f0",
		dataType: 'jsonp'
	})
	.done(function( data ){

		
		let dataWeather = data;
		// console.log(dataWeather);
		
		let html = '';
			html += '<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">';
			html += '<p><small text-muted>El tiempo en:</small></p>';
			html += '<div class="main-city-name fs-2">';
			html += '<p class="ps-3">'+ dataWeather.name +'</p>';
			html += '</div>';
			html += '<p class="fs-1 bg-primary ps-3 text-white">'+ dataWeather.main['temp'] +'° <img class="icon-weather" src="http://openweathermap.org/img/wn/'+ dataWeather.weather[0]['icon'] +'@2x.png" alt=""></p>';
			html += '</div>';
			html += '<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">';
			html += '<p><strong>Viento</strong></p>';
			html += '<ul class="lst-wind">';
			html += '<li>Velocidad: '+ dataWeather.wind['speed'] +'</li>';
			html += '<li>Dirección: '+ dataWeather.wind['deg'] +'</li>';
			html += '</ul>';
			html += '<p><strong>Porcentaje de nubes</strong></p>';
			html += '<ul class="lst-cloud">';
			html += '<li>'+dataWeather.clouds['all']+'%</li>';
			html += '</ul>';
			html += '</div>';

			$('#weather-container').append(html);

	})
	.fail(function(){
		console.log("Fallo!");
	})
	.always(function(){
		console.log("Completo!");
	});








})();