const openCart = () => {
    const drawer = document.getElementById("cart-drawer");
    const overlay = document.getElementById("cart-overlay");

    drawer.classList.remove("hidden");
    overlay.classList.remove("hidden");

    requestAnimationFrame(() => {
        drawer.classList.add("active");
        overlay.classList.add("active");
    });

    document.body.style.overflow = "hidden";
};

const closeCart = () => {
    const drawer = document.getElementById("cart-drawer");
    const overlay = document.getElementById("cart-overlay");

    drawer.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";

    setTimeout(() => {
        drawer.classList.add("hidden");
        overlay.classList.add("hidden");
    }, 350);
};

document.addEventListener("click", (e) => {
    if (e.target.closest(".icon-cart")) openCart();
    if (e.target.id === "cart-overlay" || e.target.id === "cart-close") closeCart();
});