import $ from 'jquery';

$.getJSON('http://api.openweathermap.org/data/2.5/forecast?q=daegu&APPID=b3f68cdf12579866f5a4b0f994d68def&units=metric'
			,function(data){
        var $nowTemp = data.list[0].main.temp;
		var $minTemp = data.list[0].main.temp_min;
		var $maxTemp = data.list[0].main.temp_max;
		var $humidity = data.list[0].main.humidity;
		var $type = data.list[0].weather[0].description;
		var $sky = data.list[0].weather[0].main;
		var $probability = data.list[0].clouds.all;
		
		if($type == "Clouds")
			$type = "구름";
		else if($type == "Rain")
			$type = "비";
		else
			$type = "맑음";
		
        $('.now').append($nowTemp + "°C");
		$('.clowtemp').append($minTemp + "°C");
		$('.chightemp').append($maxTemp + "°C");
		$('.chumidity').append($humidity + "%");
		$('.csky').append($sky);
		$('.ctype').append($type);
		$('.cprobability').append($probability + "%");	
	});