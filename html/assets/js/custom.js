( function($) {

	$('.marquee').marquee({
		//speed in milliseconds of the marquee in milliseconds
		duration: 30000,
		//gap in pixels between the tickers
		gap: 0,
		//time in milliseconds before the marquee will start animating
		delayBeforeStart: 0,
		//'left' or 'right'
		direction: 'left',
		//true or false - should the marquee be duplicated to show an effect of continues flow
		duplicated: true,
		pauseOnHover: true,
		startVisible: true
	});

	$( '.zoom' ).on( {
		mouseover: function () {
			$( this ).find( 'img' ).addClass( 'zoom-in' ).removeClass( 'zoom-out' );
		},

		mouseleave: function() {
			$( this ).find( 'img' ).addClass( 'zoom-out' ).removeClass( 'zoom-in' );
		}
	} );

} )( jQuery );