<?php

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) exit;

/**
* Main page Model
*/
class MXMTZC_Main_Page_Model extends MXMTZC_Model
{

	/*
	* Observe function
	*/
	public static function mxmtzc_wp_ajax()
	{

		add_action( 'wp_ajax_mxmtzc_update', array( 'MXMTZC_Main_Page_Model', 'prepare_update_database_column' ), 10, 1 );

	}

	/*
	* Prepare for data updates
	*/
	public static function prepare_update_database_column()
	{
		
		// Checked POST nonce is not empty
		if( empty( $_POST['nonce'] ) ) wp_die( '0' );

		// Checked or nonce match
		if( wp_verify_nonce( $_POST['nonce'], 'mxmtzc_nonce_request' ) ){

			// Update data
			self::mxmtzc_timezone_clock_update_option( $_POST['mxmtzc_some_string'] );		

		}

		wp_die();

	}

		// Update data
		public static function mxmtzc_timezone_clock_update_option( $string )
		{

			

		}
	
	// get options
	public function mxmtzc_get_time_zone_option()
	{

		$data = maybe_unserialize( get_option( 'mxmtzc_time_zone_default_options' ) );

		return $data;

	}
}