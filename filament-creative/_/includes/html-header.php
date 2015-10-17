<!DOCTYPE HTML>
<html class="no-js" lang="en">
	<head>
		<title><?php bloginfo( 'name' ); ?><?php wp_title( '|' ); ?></title>
		<meta charset="<?php bloginfo( 'charset' ); ?>" />
	  	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<script src="<?php bloginfo('template_directory'); ?>/_/js/vendor/modernizr.js"></script>
		<?php wp_head(); ?>
	</head>
	<body <?php body_class(); ?>>
