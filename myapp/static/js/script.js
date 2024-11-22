function abrirModal(nombreBoton) {
    const modal = document.getElementById('modal-taxi');
    modal.style.display = 'block';
    modal.setAttribute('data-nombre-boton', nombreBoton);
}

function cerrarModal() {
    const modal = document.getElementById('modal-taxi');
    modal.style.display = 'none';
    modal.removeAttribute('data-nombre-boton');
}


function redirigirWhatsApp(numero, event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del botón (enviar el formulario)

    // Obtener el formulario correspondiente al botón
    const form = event.target.closest('form');
    const formData = new FormData(form);

    // Enviar el formulario usando AJAX
    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value
        }
    })
    .then(response => {
        if (response.ok) {
            // Después de que el formulario se haya enviado correctamente, redirigir a WhatsApp
            window.location.href = `https://wa.me/+57${numero}`;
        } else {
            console.error('Error al enviar el formulario');
        }
    })
    .catch(error => {
        console.error('Error al enviar el formulario:', error);
    });
}
