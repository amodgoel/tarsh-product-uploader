<?php

if ( ! defined( 'ABSPATH' ) ) {

	exit;

}

class TPU_Admin {

	public function __construct() {

		add_action( 'admin_menu', array( $this, 'register_menu' ) );

		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_assets' ) );

	}

	/**

	 * Register Admin Menu

	 */

	public function register_menu() {

		add_menu_page(

			'Tarsh Product Uploader',

			'Tarsh Uploader',

			'manage_woocommerce',

			'tarsh-product-uploader',

			array( $this, 'render_page' ),

			'dashicons-products',

			56

		);

	}

	/**

	 * Load CSS & JS only on plugin page

	 */

	public function enqueue_assets( $hook ) {

		if ( $hook !== 'toplevel_page_tarsh-product-uploader' ) {

			return;

		}

		wp_enqueue_style(

			'tpu-admin',

			TPU_PLUGIN_URL . 'admin/admin.css',

			array(),

			TPU_VERSION

		);

		wp_enqueue_script(
    'tpu-admin',
    TPU_PLUGIN_URL . 'admin/assets/js/admin.js',
    array( 'tpu-ui','tpu-images','tpu-reader' ),
    TPU_VERSION,
    true
);

		wp_enqueue_script(
    'tpu-ui',
    TPU_PLUGIN_URL . 'admin/assets/js/ui.js',
    array(),
    TPU_VERSION,
    true
);
		wp_enqueue_script(
    'tpu-images',
    TPU_PLUGIN_URL . 'admin/assets/js/images.js',
    array(),
    TPU_VERSION,
    true
);
		wp_enqueue_script(
    'tpu-reader',
    TPU_PLUGIN_URL . 'admin/assets/js/reader.js',
    array(),
    TPU_VERSION,
    true
);

	}

	/**

	 * Render Upload Page

	 */

	public function render_page() {

		require TPU_PLUGIN_DIR . 'admin/page-upload.php';

	}

}
