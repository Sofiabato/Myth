const headerContainer = document.getElementById("header");

// Leer estado
const isLoggedIn = localStorage.getItem("isLoggedIn");
const userType = localStorage.getItem("userType");

// Header por defecto (NO logueado)
let headerPath = "../componentes/header/header.html";

// Elegir header según estado
if (isLoggedIn === "true") {
  if (userType === "comprador") {
    headerPath = "../componentes/header/header_sesion.html";
  }

  if (userType === "disenador") {
    headerPath = "../componentes/header/header_diseñador.html";
  }
}

// Cargar el header correcto
fetch(headerPath)
  .then(res => res.text())
  .then(html => {
    headerContainer.innerHTML = html;
  });