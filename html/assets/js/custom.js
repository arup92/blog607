( function($) {


	/**
	 * Mobile menu
	 */

	$('.dropdown-toggle').on('click', function(){
		$(this).toggleClass('toggled');
	 	$(this).next().slideToggle();
	});

	// Function to show the menu
	function show_menu() {
		$('.nav-parent').addClass('mobile-menu-open');
		$('.mobile-menu-overlay').addClass('mobile-menu-active');
	}

	// Function to hide the menu
	function hide_menu(){
		$('.nav-parent').removeClass('mobile-menu-open');
		$('.mobile-menu-overlay').removeClass('mobile-menu-active');
	}

	$('.menubar-right').on('click', show_menu);
	$('.mobile-menu-overlay').on('click', hide_menu);
	$('.menubar-close').on('click', hide_menu);

	/**
	 * Waypoints
	 */
	window.onload = function() {
		$animate_fade		= $( '.animate-fade' );
		$animate_fade_up	= $( '.animate-fadeup' );
		$animate_fade_left	= $( '.animate-fadeleft' );
		$animate_fade_right	= $( '.animate-faderight' );
		$skill_animate		= $( '.skill-animate' );

		$animate_fade.waypoint( function() {
			$( this.element ).addClass( 'fade' );
		}, { offset: '65%' } );

		$animate_fade_up.waypoint( function() {
			$( this.element ).addClass( 'fadeup' );
		}, { offset: '65%' } );

		$animate_fade_left.waypoint( function() {
			$( this.element ).addClass( 'fadeleft' );
		}, { offset: '65%' } );

		$animate_fade_right.waypoint( function() {
			$( this.element ).addClass( 'faderight' );
		}, { offset: '65%' } );

		// Skill animate waypoint
		$skill_animate.waypoint( function() {
			$skill_data_val		= $( this.element ).attr('data-skill-value');
			$( this.element ).css( 'width', $skill_data_val + '%' );
		}, { offset: '95%' } );
	}

	/**
	 * Slick slider functions
	 */

	$( document ).ready( function(){
	  $('.slick-slider').slick( {
	  	autoplay: true,
	  	autoplaySpeed: 3000,
	  	arrows: false,
	  	fade: true,
	  } );
	} );

	$( '.slide-prev' ).click( function(){
		$( '.slick-slider' ).slick( 'slickPrev' );
	} );

	$( '.slide-next' ).click( function() {
		$( '.slick-slider' ).slick( 'slickNext' );
	} );

	/**
	 * Testimonial slider
	 */

	$( document ).ready( function(){
		$(".regular").slick({
			infinite: true,
			slidesToShow: 3,
			arrows: false,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						dots: true,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 1,
						dots: true,
					}
				}
			]
		});
	});

	/**
	 * Partners slider
	 */

	$( document ).ready( function(){
		$(".trusted").slick({
			infinite: true,
			slidesToShow: 5,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 2000,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 2
					}
				}
			]
		});
	});

	/**
	 * Counter Up
	 */
	
	$('.counter').counterUp({
		time: 1000
	});

	/**
	 * Flipbox responsive
	 */

	$( '.flip-front' ).each( function() {
		$height = $( this ).height();
		$( this ).parent().parent().css( 'min-height', $height + 'px' );
	} );

	$( window ).on( 'resize', function() {
		$( '.flip-front' ).each( function() {
			$height = $( this ).height();
			$( this ).parent().parent().css( 'min-height', $height + 'px' );
		} );
	} );

} )( jQuery );

/**
 * Load Google Map Style
 */

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 11,

		gestureHandling: 'greedy',

		scrollwheel: false,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(40.671218,-73.9957626), // New York

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#656565"}]},{"featureType":"administrative.province","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"lightness":"0"},{"saturation":"0"},{"color":"#f5f5f2"},{"gamma":"1"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"lightness":"-3"},{"gamma":"1.00"}]},{"featureType":"landscape.natural.terrain","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#bae5ce"},{"visibility":"on"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45},{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"visibility":"simplified"},{"color":"#ffb536"}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"color":"#253659"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#656565"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"transit.station.airport","elementType":"labels.icon","stylers":[{"hue":"#ffa100"},{"saturation":"-77"},{"gamma":"0.57"},{"lightness":"0"}]},{"featureType":"transit.station.rail","elementType":"labels.text.fill","stylers":[{"color":"#ffb536"}]},{"featureType":"transit.station.rail","elementType":"labels.icon","stylers":[{"hue":"#ffa100"},{"lightness":"4"},{"gamma":"0.75"},{"saturation":"-68"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"hue":"#ff0000"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#029bbf"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"lightness":"-49"},{"saturation":"-53"},{"gamma":"0.79"},{"color":"#ffffff"}]}]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.671218,-73.9957626),
        map: map,
        icon: 'img/marker.png',
        title: 'StartUp!'
    });
}