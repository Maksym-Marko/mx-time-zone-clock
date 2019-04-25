<?php
/*
Plugin Name: MX Time Zone Clock
Plugin URI: https://github.com/Maxim-us/wp-plugin-skeleton
Description: Clocks in different countries
Author: Marko Maksym
Version: 1.0
Author URI: https://github.com/Maxim-us
*/

// register scripts and styles
add_action( 'wp_enqueue_scripts', 'mxtzc_enqueue' );

function mxtzc_enqueue() {

	wp_enqueue_style( 'mxtzc_style', plugins_url( '/', __FILE__ ) . 'clock/style.css', array(), '25.04.19', 'all' );

	wp_enqueue_script( 'mxtzc_script', plugins_url( '/', __FILE__ ) . 'clock/jquery.canvasClock.js', array( 'jquery' ), '25.04.19_2', false );

}

// add shortcode
add_shortcode( 'mxtzc_time_zone_clock', function( $atts ) {

	$time_zone = $atts['time_zone'];

	$clean_str = str_replace( '/', '-', $time_zone );

	$class_of_clock = 'mx-clock-' . strtolower( $clean_str );

	ob_start(); ?>

		<div class="mx-localize-time">
		
			<div class='<?php echo $class_of_clock; ?>' data-bg-img-url='<?php echo plugins_url( '/', __FILE__ ); ?>clock/clock-face3_2.png'></div>

		</div>

		<script type="text/javascript">

			jQuery(document).ready(function(){

				jQuery(".<?php echo $class_of_clock; ?>").canvasClock({time_zone:"<?php echo $time_zone; ?>"});

			} );

		</script>

	<?php return ob_get_clean();

} );