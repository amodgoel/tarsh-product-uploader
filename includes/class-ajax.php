<?php

if ( ! defined( 'ABSPATH' ) ) {

	exit;

}

class TPU_Ajax {

	public function __construct() {

		add_action(

			'wp_ajax_tpu_get_categories',

			array( $this, 'get_categories' )

		);

	}

	/**

	 * Return WooCommerce Product Categories

	 */

	public function get_categories() {

		check_ajax_referer( 'tpu_nonce', 'nonce' );

		if ( ! current_user_can( 'manage_woocommerce' ) ) {

			wp_send_json_error(

				array(

					'message' => 'Permission denied.'

				)

			);

		}

		$terms = get_terms(

			array(

				'taxonomy'   => 'product_cat',

				'hide_empty' => false,

				'orderby'    => 'name'

			)

		);

		$categories = array();

		foreach ( $terms as $term ) {

			$categories[] = array(

				'id'   => $term->term_id,

				'name' => $term->name

			);

		}

		wp_send_json_success( $categories );

	}

}
 
