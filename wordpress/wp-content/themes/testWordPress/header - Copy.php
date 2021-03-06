<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<!--[if lt IE 9]>
	<script src="<?php echo esc_url( get_template_directory_uri() ); ?>/js/html5.js"></script>
	<![endif]-->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>


	<div class="blog-masthead">
		<div class="container-fluid navbar-container">
			<?php if ( has_nav_menu( 'primary' ) ) : ?>
				<nav class="navbar navbar-default navbar-fixed-top navbar-custom">
					<div class="container">
						<?php
							wp_nav_menu( array(
	               'menu'              => 'primary',
	               'theme_location'    => 'primary',
	               'depth'             => 2,
	               'container'         => 'div',
	               'container_class'   => 'collapse navbar-collapse',
	               'container_id'      => 'bs-example-navbar-collapse-1',
	               'menu_class'        => 'nav navbar-nav menu-style',
	               'fallback_cb'       => 'wp_bootstrap_navwalker::fallback',
	               'walker'            => new wp_bootstrap_navwalker())
	           );
					 ?>
					</div>

				</nav>
			<?php endif; ?>
		</div><!-- .site-header-menu -->
	</div>
