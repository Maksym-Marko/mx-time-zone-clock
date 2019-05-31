<div class="mx-main-page-text-wrap">
	
	<h1><?php echo __( 'Settings Page', 'mxmtzc-domain' ); ?></h1>

	<div class="mx-block_wrap">

		<?php

			//var_dump( $data ); 

			$array_of_clock_disign = array( 'clock-face1.png','clock-face2.png','clock-face4.png','clock-face5.png','clock-face6.png','clock-face7.png','clock-face8.jpg','clock-face9.jpg','clock-face10.png','clock-face11.png','clock-face12.png','clock-face13.jpg','clock-face14.jpg','clock-face15.jpg','clock-face16.png','clock-face17.jpg','clock-face18.png','clock-face19.png','clock-face20.jpg','clock-face21.png','clock-face22.jpg' );

		?>

		<h3><?php echo __( 'Available design of clock', 'mxmtzc-domain' ); ?></h3>

		<p><?php echo __( 'You should click on the clock, the design you like.', 'mxmtzc-domain' ); ?></p>

		<div class="mx-time-zone-design-list">

			<?php foreach ( $array_of_clock_disign as $key => $value ) : ?>

				<div class="mx-time-zone-design-item">
					<img src="<?php echo MXMTZC_PLUGIN_URL; ?>includes/admin/assets/img/<?php echo $value; ?>" alt="">
				</div>

			<?php endforeach; ?>
			
		</div>

	</div>

	<!-- time zone -->
	<div class="mx-block_wrap">

		<h3><?php echo __( 'Set Time Zone', 'mxmtzc-domain' ); ?></h3>

		<p>
			<?php echo __( 'Here you can find all time zones:', 'mxmtzc-domain' ); ?>
			<a href="https://timezonedb.com/time-zones" target="_blank">timezonedb.com/</a>	
		</p>

		<p>
			<?php echo __( 'If you want set time zone, fill it below.', 'mxmtzc-domain' ); ?>
		</p>

		<p>
			<input type="text" id="mxmtzc_time_zone_name" placeholder="<?php echo __( 'Australia/Sydney', 'mxmtzc-domain' ); ?>" />
		</p>

	</div>

	<!-- city name -->
	<div class="mx-block_wrap">

		<h3><?php echo __( 'Set name of city', 'mxmtzc-domain' ); ?></h3>

		<p>
			<?php echo __( 'If you want set name of the city, fill it below.', 'mxmtzc-domain' ); ?>
		</p>

		<p>
			<input type="text" id="mxmtzc_city_name" placeholder="<?php echo __( 'Wilton', 'mxmtzc-domain' ); ?>" />
		</p>

	</div>

	<!-- format of date -->
	<div class="mx-block_wrap">

		<h3><?php echo __( 'Set the time format', 'mxmtzc-domain' ); ?></h3>

		<p>
			<?php echo __( 'Select one option', 'mxmtzc-domain' ); ?>
		</p>

		<p class="mxmtzc_time_format_wrap">
			
			<input type="radio" id="mxmtzc_time_format1" value="12" name="mxmtzc_time_format" checked="checked" />
			<label for="mxmtzc_time_format1"><?php echo __( '12-Hour Time Format', 'mxmtzc-domain' ); ?></label>

		</p>

		<p class="mxmtzc_time_format_wrap">
			
			<input type="radio" id="mxmtzc_time_format2" value="24" name="mxmtzc_time_format" />
			<label for="mxmtzc_time_format2"><?php echo __( '24-Hour Time Format', 'mxmtzc-domain' ); ?></label>

		</p>

	</div>

	<!-- display clock -->
	<div class="mx-block_wrap">

		<h3><?php echo __( 'How to display the clock', 'mxmtzc-domain' ); ?></h3>

		<p>
			<?php echo __( 'Choose a way to display the clock', 'mxmtzc-domain' ); ?>
		</p>

		<p class="mxmtzc_display_clock_wrap">
			
			<input type="radio" id="mxmtzc_display_clock1" value="false" name="mxmtzc_display_clock" checked="checked" />
			<label for="mxmtzc_display_clock1"><?php echo __( 'Digital clock', 'mxmtzc-domain' ); ?></label>

		</p>

		<p class="mxmtzc_display_clock_wrap">
			
			<input type="radio" id="mxmtzc_display_clock2" value="true" name="mxmtzc_display_clock" />
			<label for="mxmtzc_display_clock2"><?php echo __( 'Clock with arrows', 'mxmtzc-domain' ); ?></label>

		</p>

	</div>

	<!-- shortcode -->
	<div class="mx-block_wrap">		

		<div class="mx-time-zone-shortcode">

			<span><?php echo __( 'Your shortcode:', 'mxmtzc-domain' ); ?></span>
			<span>[mxmtzc_time_zone_clocks time_zone="<?php echo $data['time_zone']; ?>" city_name="<?php echo $data['city_name']; ?>" time_format="<?php echo $data['time_format']; ?>" digital_clock="<?php echo $data['digital_clock']; ?>" lang="<?php echo $data['lang']; ?>" clock_type="<?php echo $data['clock_type']; ?>"]</span>

		</div>
		
	</div>

</div>

<!-- save notice -->
<div class="mxmtzc_save_notice">
	<p>
		<?php echo __( 'Your shortcode has been updated. You can copy it below.', 'mxmtzc-domain' ); ?>
	</p>
	<i class="icon-arrow-down"></i>
</div>