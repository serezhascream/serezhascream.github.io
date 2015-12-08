$(function(){
	for (var i = 1; i <= $('nav ul li a').length; i++) {
		if ($('nav ul li a').eq(i-1).data('counter')) {
			$('nav ul li a').eq(i-1).addClass('has-counter');
		}
	};

	$('.mainpage-slide-big').each(function () {
		$(this).children('.slider-row').each(function() {
			var navname = $(this).data('nav-name');
			var ind = $(this).index();
			$(this).attr('data-ind', ind);
			$('.mainpage-slide-navigation').append('<div class="nav-link"><a data-index="' + ind + '" href="#">' + navname + '</a></div>');
		});
	});
	$('.mainpage-slide-big').on('click', '.nav-link a', function (e) {
		e.preventDefault();
		var ind = $(this).data('index');
		var to = $('[data-ind="'+ind+'"]').height() * ind;
		$('.mainpage-slide-big').animate({'scrollTop': to}, 400);
	});
	
	// Опции слайдера
	var owl = $(".owl-carousel");

	$('.next-custom').click(function() {
	    owl.trigger('next.owl.carousel');
	})
	$('.prev-custom').click(function() {
	    owl.trigger('prev.owl.carousel', [300]);
	})

	owl.owlCarousel({
		items: 1,
		nav: true,
		callbacks: true,
		dots: false
	});

	$('.map-filter div').on('click', function () {
		$('.map-filter div').removeClass('active');
		$(this).addClass('active');
	});

});