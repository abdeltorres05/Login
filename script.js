document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm")
  
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault()
  
      const email = document.getElementById("email").value
      const password = document.getElementById("password").value
  
      // Aquí normalmente enviarías los datos a un servidor para autenticación
      // Por ahora, solo mostraremos los datos en la consola
      console.log("Intento de inicio de sesión con:", { email, password })
  
      // Simulación de inicio de sesión exitoso
      alert("Inicio de sesión exitoso!")
  
      // Aquí podrías redirigir al usuario a la página de inicio
      window.location.href = 'home.html';
    })
  })
  
  