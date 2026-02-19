document.addEventListener("click", (e) => {
    const cartIcon = e.target.closest(".icon-cart"); // clase del icono del header
    const drawer = document.getElementById("cart-drawer");
    const overlay = document.getElementById("cart-overlay");
    const closeBtn = document.getElementById("cart-close");

    if (cartIcon) {
        drawer.classList.add("active");
    overlay.classList.add("active");
    drawer.classList.remove("hidden");
    overlay.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    }

    if (e.target === overlay || e.target === closeBtn) {
        drawer.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
        setTimeout(() => {
        drawer.classList.add("hidden");
    overlay.classList.add("hidden");
        }, 300);
    }
});
