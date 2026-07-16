<?php

/**

 * Plugin Name: Tarsh Product Uploader

 * Plugin URI: https://github.com/amodgoel/tarsh-product-uploader

 * Description: Bulk upload WooCommerce products with featured image, gallery image and manual product details.

 * Version: 1.0.1

 * Author: Amod Goel

 * License: GPL v2 or later

 * Text Domain: tarsh-product-uploader

 */

if ( ! defined( 'ABSPATH' ) ) {

	exit;

}

/*

|--------------------------------------------------------------------------

| Plugin Constants

|--------------------------------------------------------------------------

*/

define( 'TPU_VERSION', '1.0.1' );

define( 'TPU_PLUGIN_FILE', __FILE__ );

define( 'TPU_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );

define( 'TPU_PLUGIN_URL', plugin_dir_url( __FILE__ ) );

/*

|--------------------------------------------------------------------------

| Load Required Files

|--------------------------------------------------------------------------

*/

require_once TPU_PLUGIN_DIR . 'admin/class-admin.php';

require_once TPU_PLUGIN_DIR . 'includes/class-ajax.php';

require_once TPU_PLUGIN_DIR . 'includes/class-product.php';

/*

|--------------------------------------------------------------------------

| Initialize Plugin

|--------------------------------------------------------------------------

*/

function tpu_init() {

	new TPU_Admin();

	new TPU_Ajax();

}

add_action( 'plugins_loaded', 'tpu_init' );
