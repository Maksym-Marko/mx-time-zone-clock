jQuery( document ).ready( function( $ ) {

	$( '#mxmtzc_form_update' ).on( 'submit', function( e ){

		e.preventDefault();

		var nonce = $( this ).find( '#mxmtzc_wpnonce' ).val();

		var someString = $( '#mxmtzc_some_string' ).val();

		var data = {

			'action': 'mxmtzc_update',
			'nonce': nonce,
			'mxmtzc_some_string': someString

		};

		jQuery.post( mxmlb_admin_localize.ajaxurl, data, function( response ){

			// console.log( response );
			alert( 'Value updated.' );

		} );

	} );

} );