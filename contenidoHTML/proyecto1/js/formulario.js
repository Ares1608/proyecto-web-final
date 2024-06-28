document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact_form");
    const nombreInput = document.getElementById("nombre");
    const apellidosInput = document.getElementById("apellidos");
    const correoInput = document.getElementById("correo");
    const celularInput = document.getElementById("celular");

    const nombresRX = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/;
    const apellidosRX = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/;
    const emailRX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const celularRX = /^\d{10}$/;

    function validateInput(input, regex) {
        if (regex.test(input.value)) {
            input.classList.remove("invalid");
            input.classList.add("valid");
            return true;
        } else {
            input.classList.remove("valid");
            input.classList.add("invalid");
            return false;
        }
    }

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const isNombreValid = validateInput(nombreInput, nombresRX);
        const isApellidosValid = validateInput(apellidosInput, apellidosRX);
        const isCorreoValid = validateInput(correoInput, emailRX);
        const isCelularValid = validateInput(celularInput, celularRX);

        if (isNombreValid && isApellidosValid && isCorreoValid && isCelularValid) {
            // Si todos los campos son válidos, se puede enviar el formulario
            alert("Formulario enviado con éxito");
            form.submit();
        } else {
            alert("Por favor, corrija los campos en rojo.");
        }
    });

    nombreInput.addEventListener("input", function() {
        validateInput(nombreInput, nombresRX);
    });

    apellidosInput.addEventListener("input", function() {
        validateInput(apellidosInput, apellidosRX);
    });

    correoInput.addEventListener("input", function() {
        validateInput(correoInput, emailRX);
    });

    celularInput.addEventListener("input", function() {
        validateInput(celularInput, celularRX);
    });
});
