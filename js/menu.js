$(document).ready(function(){
	var altura = $('.contenedormenu').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.contenedormenu').addClass('menu-fixed');
		} else {
			$('.contenedormenu').removeClass('menu-fixed');
		}
	});

});