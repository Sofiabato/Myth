document.addEventListener("DOMContentLoaded", () => {

    const filters = {};
    const products = document.querySelectorAll(".designer-card");
    const searchInput = document.getElementById("searchInput");
    const noResults = document.getElementById("noResults");

    const priceMin = document.getElementById("priceMin");
    const priceMax = document.getElementById("priceMax");
    const minValue = document.getElementById("minValue");
    const maxValue = document.getElementById("maxValue");

    /* ===================== */
    /* DESPLEGABLES */
    /* ===================== */
    document.querySelectorAll(".filter-header").forEach(header => {
        header.addEventListener("click", () => {
            const filter = header.parentElement;
            const icon = header.querySelector("i");

            filter.classList.toggle("open");
            icon.style.transform = filter.classList.contains("open")
                ? "rotate(180deg)"
                : "rotate(0deg)";
        });
    });

    /* ===================== */
    /* FILTROS TIPO TAG */
    /* ===================== */
    document.querySelectorAll("[data-filter] span").forEach(option => {

        option.addEventListener("click", () => {

            const group = option.parentElement.dataset.filter;
            const value = option.dataset.value;

            if (!group || !value) return;

            // Quitar activos del mismo grupo
            option.parentElement
                .querySelectorAll("span")
                .forEach(el => el.classList.remove("active"));

            option.classList.add("active");

            filters[group] = value;

            applyFilters();
        });

    });
    /* ===================== */
    /* LIMPIAR COLORES */
    /* ===================== */
    const clearColorsBtn = document.querySelector(".clear-colors");
    if (clearColorsBtn) {
        clearColorsBtn.addEventListener("click", () => {
            delete filters.color;
            document
                .querySelectorAll(".color-option")
                .forEach(c => c.classList.remove("active"));
            applyFilters();
        });
    }

    /* ===================== */
    /* FILTRO PRECIO */
    /* ===================== */
    if (priceMin && priceMax) {
        const updatePrice = () => {
            filters.priceMin = parseInt(priceMin.value);
            filters.priceMax = parseInt(priceMax.value);

            minValue.textContent = filters.priceMin + "€";
            maxValue.textContent = filters.priceMax + "€";

            applyFilters();
        };

        priceMin.addEventListener("input", updatePrice);
        priceMax.addEventListener("input", updatePrice);
    }

    /* ===================== */
    /* BÚSQUEDA TEXTO */
    /* ===================== */
    searchInput.addEventListener("input", applyFilters);

    /* ===================== */
    /* APLICAR FILTROS */
    /* ===================== */
    function applyFilters() {
        const text = searchInput.value.toLowerCase();
        let visibleCount = 0;

        products.forEach(product => {
            let visible = true;

            // Texto
            if (text && !product.dataset.name.toLowerCase().includes(text)) {
                visible = false;
            }

            // Resto de filtros
            for (let key in filters) {
                if (key === "priceMin" || key === "priceMax") {
                    const price = parseInt(product.dataset.price);
                    if (price < filters.priceMin || price > filters.priceMax) {
                        visible = false;
                    }
                } else {
                    if (product.dataset[key] !== filters[key]) {
                        visible = false;
                    }
                }
            }

            product.style.display = visible ? "block" : "none";
            if (visible) visibleCount++;
        });

        // Mensaje sin resultados
        if (noResults) {
            noResults.style.display = visibleCount === 0 ? "block" : "none";
        }
    }
});
