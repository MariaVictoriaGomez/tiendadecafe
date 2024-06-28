function validarFormulario() {
    var nombre = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var validatePassword = document.getElementById('validate-password').value;
    var userdni = document.getElementById('userdni').value;
    var checkbox = document.getElementById('checkbox');
    var birthdate = document.getElementById('birthdate').value;



    if (nombre.trim() === '') {
        alert('Por favor, ingresa tu nombre.');
        return false;
    }

    if (userdni.trim() === '') {
        alert('Por favor, ingresa tu DNI.');
        return false;
    }

    else if (userdni.length < 8) {
        alert('El DNI debe tener al menos 8 caracteres.');
        return false;
    }

    else if (!/^\d+$/.test(userdni)) { 
        alert('El DNI solo puede contener números.');
        return false;
    }


    if (email.trim() === '') {
        alert('Por favor, ingresa tu correo electrónico.');
        return false;

    } else if (!validarEmail(email)) { 
        alert('Por favor, ingresa un correo electrónico válido.');
        return false;
    }

    if (birthdate.trim() === ''){
        alert('Por favor, ingresá tu fecha de nacimiento.');
        return false;
    }

    if (password.trim() === '') {
        alert('Por favor, ingresa tu contraseña.');
        return false;
    }
else if (password.length < 6) {
    alert('La contraseña tiene que tener al menos 6 caracteres.');
    return false;
}


    if (validatePassword.trim() === '') { 
        alert('Por favor, confirmá tu contraseña.');
        return false;
    }

    if (password !== validatePassword) {
        alert('Las contraseñas no coinciden.');
        return false;
     
    }

    if (!checkbox.checked) {
        alert('Tenés que aceptar los términos y condiciones legales.');
        return false;
    }
    document.body.innerHTML = `<div class="body-style"> <div class="card-container">
    <div class="card">
        <h2>¡Gracias por completar el formulario!</h2>
        <p>Nos pondremos en contacto.</p>
        </div>
    </div>
    <div class="directory">
    <a href="../index.html">Inicio </a>  
    <p>/FORMULARIO</p>
</div>
    </div>`; 

    return false; 
}

function validarEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
