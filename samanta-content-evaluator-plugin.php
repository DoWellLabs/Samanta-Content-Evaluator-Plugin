<?php
/**
 * Plugin Name:       Samanta Content Evaluator
 * Description:       It checks AI base texts and contents
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Dowell, Tewodros Abebe
 * License:           GPL-2.0-or-later
 */

 add_action( 'admin_menu', 'samantacontentevaluator_init_menu' );

/**
 * Init Admin Menu.
 *
 * @return void
 */
function samantacontentevaluator_init_menu() {
    add_menu_page( __( 'Samanta Content Evaluator', 'samantacontentevaluator'), __( 'Samanta Content Evaluator', 'samantacontentevaluator'), 'manage_options', 'samantacontentevaluator', 'samantacontentevaluator_admin_page', 'dashicons-admin-post', '2.1' );
}

/**
 * Init Admin Page.
 *
 * @return void
 */
function samantacontentevaluator_admin_page() {
    require_once plugin_dir_path( __FILE__ ) . 'templates/app.php';
}

add_action( 'admin_enqueue_scripts', 'samantacontentevaluator_admin_enqueue_scripts' );

/**
 * Enqueue scripts and styles.
 *
 * @return void
 */
function samantacontentevaluator_admin_enqueue_scripts() {
    wp_enqueue_style( 'samantacontentevaluator-style', plugin_dir_url( __FILE__ ) . 'build/index.css' );
    wp_enqueue_script( 'samantacontentevaluator-script', plugin_dir_url( __FILE__ ) . 'build/index.js', array( 'wp-element' ), '1.0.0', true );
}