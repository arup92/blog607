( function($) {
	$('.js-marquee').marquee();

	$( '.zoom' ).on( {
		mouseover: function () {
			$( this ).find( 'img' ).addClass( 'zoom-in' ).removeClass( 'zoom-out' );
		},

		mouseleave: function() {
			$( this ).find( 'img' ).addClass( 'zoom-out' ).removeClass( 'zoom-in' );
		}
	} );

} )( jQuery );