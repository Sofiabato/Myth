const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // quitar activos
      tabs.forEach(t => t.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));

      // activar seleccionado
      tab.classList.add("active");
      document.getElementById(tab.dataset.tab).classList.add("active");
    });
  });