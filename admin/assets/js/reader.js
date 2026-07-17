window.TPUReader = (function () {

    function readProduct(card) {

        return {

            featured_image:
                card.querySelector(".featured-image").files[0] || null,

            gallery_image:
                card.querySelector(".gallery-image").files[0] || null,

            name:
                card.querySelector(".tpu-name").value.trim(),

            short_description:
                card.querySelector(".tpu-short-description").value.trim(),

            description:
                card.querySelector(".tpu-description").value.trim(),

            regular_price:
                card.querySelector(".tpu-regular-price").value,

            sale_price:
                card.querySelector(".tpu-sale-price").value,

            weight:
                card.querySelector(".tpu-weight").value,

            sku:
                card.querySelector(".tpu-sku").value.trim(),

            category:
                card.querySelector(".tpu-category").value,

            tags:
                card.querySelector(".tpu-tags").value.trim(),

            status:
                card.querySelector(".tpu-status:checked").value

        };

    }

    function readAllProducts() {

        const products = [];

        document.querySelectorAll(".tpu-card").forEach(function (card) {

            products.push(

                readProduct(card)

            );

        });

        return products;

    }

    return {

        readProduct,

        readAllProducts

    };

})();
