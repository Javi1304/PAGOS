function procesarPago() {
    let destinatario = document.getElementById("destinatario").value;
    let monto = document.getElementById("monto").value;

    if (destinatario === "" || monto === "") {
        alert("Por favor completa todos los campos");
        return;
    }

    // Simulación de pago
    setTimeout(() => {
        document.getElementById("mensaje").style.display = "block";
    }, 500);
}