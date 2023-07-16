<?php
/**
 * Plugin Name:       Samanta Content Evalautor
 * Description:       AI base text evalautor
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Dowell
 * License:           GPL-2.0-or-later
 */

add_action( 'admin_menu', 'samanta_content_evaluator_init_menu' );

/**
 * Init Admin Menu.
 *
 * @return void
 */
function samanta_content_evaluator_init_menu() {
    add_menu_page( __( 'Samanta Content Evalautor', 'samanta_content_evaluator'), __( ' Samanta Content Evalautor', 'samanta_content_evaluator'), 'manage_options', 'samanta_content_evaluator', 'samanta_content_evaluator_admin_page', 'dashicons-admin-post', '2.1' );
}

/**
 * Init Admin Page.
 *
 * @return void
 */
function samanta_content_evaluator_admin_page() {
    require_once plugin_dir_path( __FILE__ ) . 'templates/app.php';
}

add_action( 'admin_enqueue_scripts', 'samanta_content_evaluator_admin_enqueue_scripts' );

/**
 * Enqueue scripts and styles.
 *
 * @return void
 */
function samanta_content_evaluator_admin_enqueue_scripts() {
    wp_enqueue_style( 'samanta_content_evaluator-style', plugin_dir_url( __FILE__ ) . 'build/index.css' );
    wp_enqueue_script( 'samanta_content_evaluator-script', plugin_dir_url( __FILE__ ) . 'build/index.js', array( 'wp-element' ), '1.0.0', true );
}