document.addEventListener("DOMContentLoaded", function () {

    console.log("Tarsh Product Uploader Started");

    const createButton = document.getElementById("tpu-create-products");

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

});
