document.addEventListener("DOMContentLoaded", () => {

    const filters = {};
    const products = document.querySelectorAll(".product-card");
    const searchInput = document.getElementById("searchInput");

    // Desplegables
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

    // Selección de filtros
    document.querySelectorAll(".filter-content span").forEach(option => {
        option.addEventListener("click", () => {
            const group = option.parentElement.dataset.filter;
            const value = option.dataset.value;

            option.classList.toggle("active");
            filters[group] = value;

            applyFilters();
        });
    });

    // Búsqueda por texto
    searchInput.addEventListener("input", applyFilters);

    function applyFilters() {
        const text = searchInput.value.toLowerCase();

        products.forEach(product => {
            let visible = true;

            if (text && !product.dataset.name.includes(text)) {
                visible = false;
            }

            for (let key in filters) {
                if (product.dataset[key] !== filters[key]) {
                    visible = false;
                }
            }

            product.style.display = visible ? "block" : "none";
        });
    }
});
