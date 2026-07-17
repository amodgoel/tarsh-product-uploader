window.TPUAjax = (function () {

    async function uploadProducts(products) {

        const formData = new FormData();

        formData.append("action", "tpu_create_products");
        formData.append("nonce", TPU.nonce);
        formData.append("products", JSON.stringify(products));

        const response = await fetch(TPU.ajax_url, {
            method: "POST",
            body: formData
        });

        return await response.json();
    }

    return {
        uploadProducts
    };

})();
