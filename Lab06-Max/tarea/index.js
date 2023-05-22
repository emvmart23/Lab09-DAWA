const validación = (f) => {
    f.preventDefault();
    const nombreUsuario = document.getElementById('usuario');
    const direccionEmail = document.getElementById('email');
    if (nombreUsuario.value === "") { 
        alert("Por favor, escribe tu nombre de usuario."); 
        usuario.focus();
    return false;
    }
    if (email.value === "") {
        alert("Por favor, ingrese su correo electrónico");
        email.focus();
        return false;
    }
    return true;
}
