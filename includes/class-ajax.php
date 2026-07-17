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

		add_action(
			'wp_ajax_tpu_create_products',
			array( $this, 'create_products' )
		);

	}

	/**
	 * Return WooCommerce Categories
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

	/**
	 * Create Multiple Products
	 */
	public function create_products() {

		check_ajax_referer( 'tpu_nonce', 'nonce' );

		if ( ! current_user_can( 'manage_woocommerce' ) ) {

			wp_send_json_error(
				array(
					'message' => 'Permission denied.'
				)
			);

		}

		if ( empty( $_POST['products'] ) ) {

			wp_send_json_error(
				array(
					'message' => 'No products received.'
				)
			);

		}

		$products = json_decode(
			stripslashes( $_POST['products'] ),
			true
		);

		$created = array();

		$errors = array();

		foreach ( $products as $index => $product ) {

			$product_id = TPU_Product::create( $product );

			if ( is_wp_error( $product_id ) ) {

				$errors[] = array(
					'product' => $index + 1,
					'error'   => $product_id->get_error_message()
				);

			} else {

				$created[] = $product_id;

			}

		}

		wp_send_json_success(
			array(
				'created' => $created,
				'errors'  => $errors
			)
		);

	}

}
