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

	<!-- Bootstrap core CSS -->
    <link href="http://localhost:10080/tutorials/wordpress/wp-content/uploads/2018/02/bootstrap.min_.css" rel="stylesheet">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>


	

    <div>
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
			<div class="container">
				<div class="logo">
					<img class="alignnone size-full wp-image-166" src="http://localhost:10080/tutorials/wordpress/wp-content/uploads/2018/02/logoNav.png"/>
				</div>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
		          <span class="navbar-toggler-icon"></span>
		        </button>
				<?php
					wp_nav_menu( array(
				       'menu'              => 'primary',
				       'menu_class' 	   => 'navbar-nav ml-auto',
				       'theme_location'    => 'primary',
				       'depth'             => 2,
				       'container'         => 'div',
				       'container_class'   => 'collapse navbar-collapse',
				       'container_id'      => 'navbarResponsive',
				       'fallback_cb'       => 'wp_bootstrap_navwalker::fallback',
				       'walker'            => new wp_bootstrap_navwalker())
				   		);
				 ?>
			</div>
			
		</nav>
	</div>




