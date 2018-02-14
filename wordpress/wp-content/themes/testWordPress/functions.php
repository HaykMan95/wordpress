<?php

function add_menuclass($ulclass) {
  return preg_replace('/<a/', '<a class="nav-link"', $ulclass, -1);
}
add_filter('wp_nav_menu','add_menuclass');

function learningWordPress_resources() {
  wp_enqueue_style('style', get_stylesheet_uri());

  wp_deregister_script('jquery');
  wp_enqueue_script( 'jquery', get_stylesheet_directory_uri() . '/vendor/jquery/jquery.min.js', array(), null, true );
  wp_enqueue_script( 'jquery-bootstrap', get_theme_file_uri( '/vendor/bootstrap/js/bootstrap.bundle.min.js' ), array( 'jquery' ) );
  wp_enqueue_script( 'jquery-easing', get_theme_file_uri( '/vendor/jquery-easing/jquery.easing.min.js' ), array( 'jquery' ) );
  wp_enqueue_script( 'jquery-scrolling-nav', get_theme_file_uri( '/scrolling-nav.js' ), array( 'jquery' ), '1.0', true );
  wp_enqueue_script( 'jquery-scrollme', get_theme_file_uri( '/scrollme.js' ), array( 'jquery' ), '2.1.2', true );
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


