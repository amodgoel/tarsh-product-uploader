document.addEventListener("DOMContentLoaded", function () {

    const createButton = document.getElementById("tpu-create-products");

    const countInput = document.getElementById("tpu-product-count");

    const container = document.getElementById("tpu-products-container");

    createButton.addEventListener("click", function (e) {

        e.preventDefault();

        container.innerHTML = "";

        let total = parseInt(countInput.value);

        if (isNaN(total) || total < 1) {

            total = 1;

        }

        if (total > 20) {

            total = 20;

        }

        for (let i = 1; i <= total; i++) {

            container.appendChild(createProductCard(i));

        }

    });

});

function createProductCard(index) {

    const card = document.createElement("div");

    card.className = "tpu-card";

    card.innerHTML = `
<div class="tpu-card-header">
<h2>Product #${index}</h2>
<button type="button"

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

                        accept="image/*"

                        class="featured-image">
</label>
</div>
<div class="tpu-image-box">
<label class="tpu-image-preview">
<span>Gallery Image</span>
<input

                        type="file"

                        accept="image/*"

                        class="gallery-image">
</label>
</div>
</div>
<table class="form-table">
<tr>
<th>Product Name</th>
<td>
<input

                        type="text"

                        class="regular-text"

                        style="width:100%;">
</td>
</tr>
<tr>
<th>Short Description</th>
<td>
<textarea

                        rows="2"

                        style="width:100%;"></textarea>
</td>
</tr>
<tr>
<th>Long Description</th>
<td>
<textarea

                        rows="5"

                        style="width:100%;"></textarea>
</td>
</tr>
<tr>
<th>Regular Price</th>
<td>
<input

                        type="number">
</td>
</tr>
<tr>
<th>Sale Price</th>
<td>
<input

                        type="number">
</td>
</tr>
<tr>
<th>Weight (grams)</th>
<td>
<input

                        type="number"

                        step="0.01">
</td>
</tr>
<tr>
<th>SKU</th>
<td>
<input

                        type="text">
</td>
</tr>
<tr>
<th>Category</th>
<td>
<select>
<option>Rings</option>
<option>Earrings</option>
<option>Pendant</option>
<option>Necklace</option>
<option>Bracelet</option>
<option>Kada</option>
<option>Anklet</option>
</select>
</td>
</tr>
<tr>
<th>Tags</th>
<td>
<input

                        type="text"

                        placeholder="Comma separated tags"

                        style="width:100%;">
</td>
</tr>
<tr>
<th>Status</th>
<td>
<label>
<input

                            type="radio"

                            name="status${index}"

                            checked>

                        Draft
</label>
&nbsp;&nbsp;
<label>
<input

                            type="radio"

                            name="status${index}">

                        Publish
</label>
</td>
</tr>
</table>

    `;

    card.querySelector(".tpu-remove").addEventListener("click", function () {

        card.remove();

    });

    initializeImagePreview(card);

    return card;

}

function initializeImagePreview(card) {

    const inputs = card.querySelectorAll("input[type=file]");

    inputs.forEach(function (input) {

        input.addEventListener("change", function () {

            if (!input.files.length) {

                return;

            }

            const reader = new FileReader();

            reader.onload = function (e) {

                const preview = input.parentElement;

                preview.innerHTML =

                    "<img src='" + e.target.result + "'>";

                preview.appendChild(input);

            };

            reader.readAsDataURL(input.files[0]);

        });

    });

}
 
