document.addEventListener("DOMContentLoaded", function () {

    console.log("Tarsh Product Uploader Started");

    const createButton = document.getElementById("tpu-create-products");
    const uploadButton = document.getElementById("tpu-upload-all");
    const countInput = document.getElementById("tpu-product-count");
    const container = document.getElementById("tpu-products-container");

    createButton.addEventListener("click", function () {

        container.innerHTML = "";

        let total = parseInt(countInput.value);

        if (isNaN(total) || total < 1)
            total = 1;

        if (total > 20)
            total = 20;

        for (let i = 1; i <= total; i++) {

            container.appendChild(
                TPUUI.createProductCard(i)
            );

        }

    });

    uploadButton.addEventListener("click", async function () {

    const products = TPUReader.readAllProducts();

    uploadButton.disabled = true;
    uploadButton.textContent = "Uploading...";

    try {

        const response = await TPUAjax.uploadProducts(products);

        console.log(response);

        if (response.success) {

            alert(
                response.data.created.length +
                " products created successfully."
            );

        } else {

            alert(response.data.message);

        }

    } catch (error) {

        console.error(error);

        alert("Upload failed.");

    }

    uploadButton.disabled = false;
    uploadButton.textContent = "Upload All Products";

});

});
