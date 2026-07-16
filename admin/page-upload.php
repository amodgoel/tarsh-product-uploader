<?php

if ( ! defined( 'ABSPATH' ) ) {

	exit;

}

?>
<div class="wrap">
<h1>Tarsh Product Uploader</h1>
<p>

		Bulk upload WooCommerce products with two images per product.
</p>
<hr>
<table class="form-table">
<tr>
<th scope="row">

				Number of Products
</th>
<td>
<input

					type="number"

					id="tpu-product-count"

					min="1"

					max="20"

					value="5">
<button

					type="button"

					class="button button-primary"

					id="tpu-create-products">

					Create Product Cards
</button>
&nbsp;
<button

					type="button"

					class="button"

					id="tpu-upload-all">

					Upload All Products
</button>
</td>
</tr>
</table>
<hr>
<div id="tpu-products-container">
<!-- Product cards will appear here -->
</div>
</div>
 
