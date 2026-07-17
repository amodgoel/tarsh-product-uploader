window.TPUImages = (function () {

    function initialize(card) {

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

    return {

        initialize

    };

})();
