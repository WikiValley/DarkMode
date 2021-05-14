$( function () {
	$( '#pt-darkmode-link a' ).on( 'click', function ( e ) {
		e.preventDefault();

		if ( mw.cookie.get( 'darkmode' ) ) {
			document.body.classList.remove( 'client-dark-mode' );
			mw.cookie.set( 'darkmode', null );
			$( e.target ).text( mw.msg( 'darkmode-link' ) );
		} else {
			document.body.classList.add( 'client-dark-mode' );
			mw.cookie.set( 'darkmode', 1 );
			$( e.target ).text( mw.msg( 'darkmode-default-link' ) );
		}

	} );
} );
