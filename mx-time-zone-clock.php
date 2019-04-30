<?php
/*
Plugin Name: MX Time Zone Clocks
Plugin URI: https://github.com/Maxim-us/mx-time-zone-clock
Description: Clocks for different time zones for your website.
Author: Marko Maksym
Version: 1.1
Author URI: https://github.com/Maxim-us
*/

// register scripts and styles
add_action( 'wp_enqueue_scripts', 'mxtzc_enqueue' );

function mxtzc_enqueue() {

	wp_enqueue_style( 'mxtzc_style', plugins_url( '/', __FILE__ ) . 'clock/style.css', array(), '25.04.19', 'all' );

	wp_enqueue_script( 'mxtzc_script', plugins_url( '/', __FILE__ ) . 'clock/jquery.canvasClock.js', array( 'jquery' ), '30.04.19', false );

}

// add shortcode
add_shortcode( 'mxtzc_time_zone_clock', function( $atts ) {

	$time_zone = $atts['time_zone'];

	$city_name = $atts['city_name'];

	$data_format = $atts['data_format'];

	if( $data_format == 12 ) {

		$data_format = 12;

	}

	$digital_clock = $atts['digital_clock'];

	// var_dump($digital_clock);

	$clean_str = str_replace( '/', '-', $time_zone );

	$class_of_clock = 'mx-clock-' . strtolower( $clean_str );

	ob_start(); ?>

		<div class="mx-localize-time">
		
			<div class='<?php echo $class_of_clock; ?>' data-bg-img-url='<?php echo plugins_url( '/', __FILE__ ); ?>clock/clock-face3_2.png'></div>

		</div>

		<script type="text/javascript">

			jQuery(document).ready(function(){

				jQuery(".<?php echo $class_of_clock; ?>").canvasClock({
					time_zone: "<?php echo $time_zone; ?>",
					city_name: "<?php echo $city_name; ?>",
					data_format: "<?php echo $data_format; ?>",
					digital_clock: "<?php echo $digital_clock; ?>"
				});

			} );

		</script>

	<?php return ob_get_clean();

} );