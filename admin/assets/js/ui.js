window.TPUUI = (function () {

    function createProductCard(index) {

        const card = document.createElement("div");

        card.className = "tpu-card";

        card.innerHTML = `

<div class="tpu-card-header">

    <h2>Product #${index}</h2>

    <button
        type="button"
        class="button tpu-remove">

        Remove

    </button>

</div>

<div class="tpu-images">

    <div class="tpu-image-box">

        <label class="tpu-image-preview">

            <span>Featured Image</span>

            <input
                type="file"
                class="featured-image"
                accept="image/*">

        </label>

    </div>

    <div class="tpu-image-box">

        <label class="tpu-image-preview">

            <span>Gallery Image</span>

            <input
                type="file"
                class="gallery-image"
                accept="image/*">

        </label>

    </div>

</div>

<table class="form-table">

<tr>

<th>Product Name</th>

<td>

<input
type="text"
class="regular-text tpu-name"
style="width:100%;">

</td>

</tr>

<tr>

<th>Short Description</th>

<td>

<textarea
class="tpu-short-description"
rows="2"
style="width:100%;"></textarea>

</td>

</tr>

<tr>

<th>Long Description</th>

<td>

<textarea
class="tpu-description"
rows="5"
style="width:100%;"></textarea>

</td>

</tr>

<tr>

<th>Regular Price</th>

<td>

<input
type="number"
class="tpu-regular-price">

</td>

</tr>

<tr>

<th>Sale Price</th>

<td>

<input
type="number"
class="tpu-sale-price">

</td>

</tr>

<tr>

<th>Weight</th>

<td>

<input
type="number"
step="0.01"
class="tpu-weight">

</td>

</tr>

<tr>

<th>SKU</th>

<td>

<input
type="text"
class="tpu-sku">

</td>

</tr>

<tr>

<th>Category</th>

<td>

<select class="tpu-category">

<option>Loading...</option>

</select>

</td>

</tr>

<tr>

<th>Tags</th>

<td>

<input
type="text"
class="tpu-tags"
style="width:100%;">

</td>

</tr>

<tr>

<th>Status</th>

<td>

<label>

<input
type="radio"
class="tpu-status"
name="status${index}"
value="draft"
checked>

Draft

</label>

&nbsp;&nbsp;

<label>

<input
type="radio"
class="tpu-status"
name="status${index}"
value="publish">

Publish

</label>

</td>

</tr>

</table>

`;

        card.querySelector(".tpu-remove").addEventListener("click", function () {

            card.remove();

        });

        return card;

    }

    return {

        createProductCard

    };

})();
