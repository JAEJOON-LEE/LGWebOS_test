import $ from 'jquery';

$.getJSON('https://api.adviceslip.com/advice'
			,function(data){
        var $advice = data.slip.advice;
		$('.advice').append($advice);	
	});

// $.getJSON('https://api.adviceslip.com/advice'
// 			,function(data){
//         var $advice = data.slip.advice;
// 		$('.advice2').append($advice);	
// 	});

// $.getJSON('https://api.adviceslip.com/advice'
// 			,function(data){
//         var $advice = data.slip.advice;
// 		$('.advice3').append($advice);	
// 	});