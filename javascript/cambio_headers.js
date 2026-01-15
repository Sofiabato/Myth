function cargarHeaderSegunUsuario() {
  const userType = localStorage.getItem("userType");

  const headers = {
    publico: document.getElementById("header-publico"),
    comprador: document.getElementById("header-comprador"),
    disenador: document.getElementById("header-disenador"),
  };

  Object.values(headers).forEach(h => h.hidden = true);

  if (userType && headers[userType]) {
    headers[userType].hidden = false;
  } else {
    headers.publico.hidden = false;
  }
}

function logout() {
  localStorage.removeItem("userType");
  window.location.href = "../pages/index.html";
}