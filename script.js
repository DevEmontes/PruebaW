document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMessage = document.getElementById("errorMessage");

  if (!email || !password) {
    errorMessage.textContent = "Completa todos los campos.";
    errorMessage.style.display = "block";
    return;
  }

  if (email === "admin@luxapp.com" && password === "123456") {
    errorMessage.style.display = "none";
    alert("✨ Bienvenido, acceso concedido.");
    // window.location.href = "/dashboard";
  } else {
    errorMessage.textContent = "Correo o contraseña incorrectos.";
    errorMessage.style.display = "block";
  }
});
