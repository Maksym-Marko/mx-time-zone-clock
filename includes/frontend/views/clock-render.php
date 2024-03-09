<?php

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) exit;


echo '<pre>';
var_dump($data);

echo '</pre>';


$clean_str = str_replace( '/', '-', $time_zone );
$class_of_clock = 'mx-clock-' . strtolower( $clean_str ) . rand( 0, 1000 );

echo $class_of_clock;