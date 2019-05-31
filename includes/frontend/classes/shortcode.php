<?php

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) exit;

class MXMTZC_Shortcode
{

	/*
	* MXMTZC_Shortcode
	*/
	public function __construct()
	{

	}

	/*
	* Registration of styles and scripts
	*/
	public function mxmtzc_register_shortcode()
	{

		// register scripts and styles
		add_action( 'wp_enqueue_scripts', array( $this, 'mxmtzc_enqueue' ) );

		// register shortcode
		add_shortcode( 'mxmtzc_time_zone_clocks', function( $atts ) {
			
			$time_zone = $atts['time_zone'];

			$city_name = $atts['city_name'];

			$time_format = $atts['time_format'];

			if( $time_format == 12 ) {

				$time_format = 12;

			}

			if( $atts['digital_clock'] !== 'false' ) {

				$digital_clock = $atts['digital_clock'];

			}			

			$lang = $atts['lang'] == NULL ? 'en-US' : $atts['lang'];

			$clean_str = str_replace( '/', '-', $time_zone );

			$class_of_clock = 'mx-clock-' . strtolower( $clean_str ) . rand( 0, 1000 );

			ob_start(); ?>

				<div class="mx-localize-time">
				
					<div class='<?php echo $class_of_clock; ?> mx-clock-live-el' data-bg-img-url='<?php echo MXMTZC_PLUGIN_URL; ?>includes/admin/assets/img/clock-face2.png'></div>

				</div>

				<script type="text/javascript">

					jQuery(document).ready(function(){

						jQuery(".<?php echo $class_of_clock; ?>").canvasClock({
							time_zone: "<?php echo $time_zone; ?>",
							city_name: "<?php echo $city_name; ?>",
							time_format: "<?php echo $time_format; ?>",
							digital_clock: "<?php echo $digital_clock; ?>",
							lang: "<?php echo $lang; ?>"
						});

					} );

				</script>

			<?php return ob_get_clean();

		} );

	}

		public function mxmtzc_enqueue()
		{

			wp_enqueue_style( 'mxmtzc_style', MXMTZC_PLUGIN_URL . 'includes/frontend/assets/css/style.css', array(), MXMTZC_PLUGIN_VERSION, 'all' );

			wp_enqueue_script( 'mxmtzc_script_frontend', MXMTZC_PLUGIN_URL . 'includes/frontend/assets/js/jquery.canvasClock.js', array( 'jquery' ), MXMTZC_PLUGIN_VERSION, false );
		
		}

}