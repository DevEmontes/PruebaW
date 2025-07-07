document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMessage = document.getElementById("errorMessage");

  if (!email || !password) {
    errorMessage.textContent = "Todos los campos son obligatorios.";
    errorMessage.style.display = "block";
    return;
  }

  // Simular autenticación (aquí va tu lógica real)
  if (email === "admin@demo.com" && password === "123456") {
    alert("Inicio de sesión exitoso");
    // Redireccionar o continuar
  } else {
    errorMessage.textContent = "Credenciales incorrectas.";
    errorMessage.style.display = "block";
  }
});
