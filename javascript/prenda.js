document.addEventListener("DOMContentLoaded", () => {

    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".content");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {

            const target = tab.dataset.tab;

            // Quitar active a todos los tabs
            tabs.forEach(t => t.classList.remove("active"));

            // Quitar active a todos los contenidos
            contents.forEach(c => c.classList.remove("active"));

            // Activar tab clicado
            tab.classList.add("active");

            // Activar contenido correspondiente
            const activeContent = document.getElementById(target);
            if (activeContent) {
                activeContent.classList.add("active");
            }

        });
    });

});