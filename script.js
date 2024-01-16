function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Verificar autenticación (solo para fines educativos, no usar en producción)
    if (email === 'admin' && password === '12345') {
        alert('¡Inicio de sesión exitoso!');
        redirigirDashboard();
    } else {
        alert('Correo o contraseña incorrectos');
    }
}

function redirigirDashboard() {
    // Redirigir a la página del dashboard
    window.location.href = 'dashboard.html';
}
