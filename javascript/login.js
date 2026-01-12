document.getElementById("login-comprador").addEventListener("click", () => {
  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("userType", "comprador");

  window.location.href = "../../pages/index.html";
});

document.getElementById("login-disenador").addEventListener("click", () => {
  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("userType", "disenador");

  window.location.href = "../../pages/index.html";
});