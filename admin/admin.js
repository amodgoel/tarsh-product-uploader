document.addEventListener("DOMContentLoaded", function () {
   const createButton = document.getElementById("tpu-create-products");
   const countInput = document.getElementById("tpu-product-count");
   const container = document.getElementById("tpu-products-container");
   createButton.addEventListener("click", function () {
       container.innerHTML = "";
       const total = parseInt(countInput.value);
       for (let i = 1; i <= total; i++) {
           container.appendChild(createCard(i));
       }
   });
});

function createCard(index) {
   const card = document.createElement("div");
   card.className = "tpu-card";
   card.innerHTML = `
<h2>Product #${index}</h2>
<table class="form-table">
<tr>
<th>Featured Image</th>
<td>
<input type="file" accept="image/*">
</td>
</tr>
<tr>
<th>Gallery Image</th>
<td>
<input type="file" accept="image/*">
</td>
</tr>
<tr>
<th>Product Name</th>
<td>
<input type="text" class="regular-text">
</td>
</tr>
<tr>
<th>Short Description</th>
<td>
<textarea rows="2" style="width:100%;"></textarea>
</td>
</tr>
<tr>
<th>Long Description</th>
<td>
<textarea rows="5" style="width:100%;"></textarea>
</td>
</tr>
<tr>
<th>Regular Price</th>
<td>
<input type="number">
</td>
</tr>
<tr>
<th>Sale Price</th>
<td>
<input type="number">
</td>
</tr>
<tr>
<th>Weight (grams)</th>
<td>
<input type="number" step="0.01">
</td>
</tr>
<tr>
<th>SKU</th>
<td>
<input type="text">
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
<option>Kada</option>
<option>Bracelet</option>
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
<p>
<button
class="button button-secondary tpu-remove">
Remove Product
</button>
</p>
`;
   card.querySelector(".tpu-remove").addEventListener("click", function () {
       card.remove();
   });
   return card;
}
