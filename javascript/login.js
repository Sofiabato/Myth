// Base de datos falsa de usuarios
const USERS = [
  {
    email: "comprador@prueba.com",
    password: "123456",
    role: "comprador",
  },
  {
    email: "disenador@prueba.com",
    password: "123456",
    role: "disenador",
  },
];

document.getElementById("login-btn")?.addEventListener("click", () => {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Validaciones básicas
  if (!email || !password) {
    alert("Rellena todos los campos");
    return;
  }

  // Buscar usuario
  const user = USERS.find(
    u => u.email === email && u.password === password
  );

  if (!user) {
    alert("Email o contraseña incorrectos");
    return;
  }

  // ✅ LOGIN CORRECTO
  localStorage.setItem("userType", user.role);
  localStorage.setItem("userEmail", user.email);

  // 👉 AQUÍ es donde navegas al index
  window.location.href = "../index.html";
});