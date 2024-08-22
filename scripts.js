document.getElementById('formulario-suscripcion').addEventListener('submit', function(event) {
    event.preventDefault();
    const correo = document.getElementById('correo').value;
    if (correo) {
        alert(`Gracias por suscribirte, ${correo}`);
    } else {
        alert('Por favor, ingresa un correo válido.');
    }
});



