function validarFormulario() {
    var nombre = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (nombre.trim() === '') {
        alert('Por favor, ingresa tu nombre.');
        return false;
    }

    if (email.trim() === '') {
        alert('Por favor, ingresa tu correo electrónico.');
        return false;
    } else if (!validarEmail(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return false;
    }

    if (password.trim() === '') {
        alert('Por favor, ingresa tu contraseña.');
        return false;
    }

    // Si todas las validaciones pasan, el formulario se enviará
    return true;
}

function validarEmail(email) {
    // Expresión regular para validar el formato del correo electrónico
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}