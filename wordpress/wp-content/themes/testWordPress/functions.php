<?php

function learningWordPress_resources() {
  wp_enqueue_style('style', get_stylesheet_uri());
  wp_enqueue_script( 'twentysixteen-script', get_template_directory_uri() . '/scrollme.js', array( 'jquery' ), '20160816', true );
  wp_enqueue_script( 'twentysixteen-script', get_template_directory_uri() . '/scrollto.js', array( 'jquery' ), '20160816', true );
  wp_enqueue_script( 'twentysixteen-script', get_template_directory_uri() . '/menu.js', array( 'jquery' ), '20160816', true );
}



add_action('wp_enqueue_scripts', 'learningWordPress_resources');

function wpb_hidetitle_class($classes) {
  if ( is_single() || is_page() ) :
    $classes[] = 'hidetitle';
    return $classes;
  endif;
  return $classes;
}
add_filter('post_class', 'wpb_hidetitle_class');


// Register Custom Navigation Walker
require_once('wp-bootstrap-navwalker.php');
// Theme Setup
function wpbasics_theme_setup(){
    // Nav Menus
    register_nav_menus( array(
        'primary' => __( 'Primary Menu'),
    ) );
}
add_action('after_setup_theme', 'wpbasics_theme_setup');
