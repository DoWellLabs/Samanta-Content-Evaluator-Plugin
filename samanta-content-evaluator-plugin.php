<?php
/**
 * Plugin Name:       Samanta Content Evaluator
 * Description:       Content Evaluator ,ade by React and WordPress.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Tewodros Abebe
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       samanta
 */ 

 add_action( 'admin_menu', 'jobplace_init_menu' );

/**
 * Init Admin Menu.
 *
 * @return void
 */
function jobplace_init_menu() {
    add_menu_page( __( 'Samanta Content Evaluator', 'samanta'), __( 'Samanta Content Evaluator', 'samanta'), 'manage_options', 'samanta', 'samanta_admin_page', 'dashicons-admin-post', '2.1' );
}

/**
 * Init Admin Page.
 *
 * @return void
 */
function samanta_admin_page() {
    require_once plugin_dir_path( __FILE__ ) . 'templates/app.php';
}


add_action( 'admin_enqueue_scripts', 'samanta_admin_enqueue_scripts' );

/**
 * Enqueue scripts and styles.
 *
 * @return void
 */
function samanta_admin_enqueue_scripts() {
    wp_enqueue_style( 'samanta-style', plugin_dir_url( __FILE__ ) . 'build/index.css' );
    wp_enqueue_script( 'samanta-script', plugin_dir_url( __FILE__ ) . 'build/index.js', array( 'wp-element' ), '1.0.0', true );
}