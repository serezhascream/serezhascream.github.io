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
			$('.mainpage-slide-navigation').append('<a class="nav-link" data-index="' + ind + '" href="#">' + navname + '</a>');
		});
	});
	$('.mainpage-slide-big').on('click', '.nav-link', function (e) {
		e.preventDefault();
		var ind = $(this).data('index');
		var to = $('[data-ind="'+ind+'"]').height() * ind;
		$('.mainpage-slide-big').animate({'scrollTop': to}, 400);
		console.log($(this).text(), to);
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

	//$('.mainpage-slide-big').customScrollbar();
	ymaps.ready(init);
    var myMap,
        myPlacemark;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [55.76, 37.64],
            zoom: 12
        });

        myPlacemark = new ymaps.Placemark([55.76, 37.64], { 
            hintContent: 'Москва!', 
            balloonContent: 'Столица России' 
        });

        myMap.geoObjects.add(myPlacemark);
    }

});