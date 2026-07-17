<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class TPU_Product {

	/**
	 * Create WooCommerce Product
	 *
	 * @param array $data
	 * @return int|WP_Error
	 */
	public static function create( $data ) {

		if ( ! class_exists( 'WC_Product_Simple' ) ) {

			return new WP_Error(
				'tpu_wc_missing',
				'WooCommerce is not installed or activated.'
			);

		}

		$product = new WC_Product_Simple();

		// Product Name
		$product->set_name(
			sanitize_text_field( $data['name'] )
		);

		// Descriptions
		$product->set_short_description(
			wp_kses_post( $data['short_description'] )
		);

		$product->set_description(
			wp_kses_post( $data['description'] )
		);

		// Prices
		$product->set_regular_price(
			wc_format_decimal( $data['regular_price'] )
		);

		if ( ! empty( $data['sale_price'] ) ) {

			$product->set_sale_price(
				wc_format_decimal( $data['sale_price'] )
			);

		}

		// Weight
		if ( ! empty( $data['weight'] ) ) {

			$product->set_weight(
				wc_format_decimal( $data['weight'] )
			);

		}

		// SKU
		if ( ! empty( $data['sku'] ) ) {

			$product->set_sku(
				sanitize_text_field( $data['sku'] )
			);

		}

		// Draft / Publish
		$product->set_status(
			$data['status']
		);

		// Save Product
		$product_id = $product->save();

		// Category
		if ( ! empty( $data['category'] ) ) {

			wp_set_object_terms(
				$product_id,
				array( $data['category'] ),
				'product_cat'
			);

		}

		// Tags
		if ( ! empty( $data['tags'] ) ) {

			$tags = array_map(
				'trim',
				explode(
					',',
					$data['tags']
				)
			);

			wp_set_object_terms(
				$product_id,
				$tags,
				'product_tag'
			);

		}

		return $product_id;

	}

}
