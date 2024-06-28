const form = document.getElementById('contact_form');

form.addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    });

    if (response.ok) {
        form.reset();
        // En lugar de mostrar una alerta, puedes agregar un mensaje en el DOM
        const successMessage = document.createElement('p');
        successMessage.textContent = 'Gracias por contactarnos, te escribiremos pronto :)';
        form.appendChild(successMessage);
    } else {
        // Maneja el error específico aquí (por ejemplo, muestra un mensaje de error en el DOM)
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo más tarde.';
        form.appendChild(errorMessage);
    }
});
