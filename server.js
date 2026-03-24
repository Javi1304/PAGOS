<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Pasarela de Pago - Equipo Tilin</title>
    <script src="https://sdk.mercadopago.com/js/v2"></script>
    <style>
        body { font-family: Arial, sans-serif; display: flex; flex-direction: column; align-items: center; padding: 50px; }
        #paymentBrick_container { width: 100%; max-width: 500px; }
    </style>
</head>
<body>
    <h1>Pago de Proyecto (Prueba)</h1>
    <p>Monto a cobrar: <strong>$100 MXN</strong></p>

    <div id="paymentBrick_container"></div>

    <script>
        // Usamos la Public Key de la imagen de Javier
        const mp = new MercadoPago('TEST-b9e5c21f-9e42-4f29-8835-af1d7685d5d8');
        const bricksBuilder = mp.bricks();

        const renderPaymentBrick = async (bricksBuilder) => {
            const settings = {
                initialization: {
                    amount: 100, // Cantidad a cobrar
                    preferenceId: "<ID-QUE-GENERARA-JAZMIN>", 
                },
                customization: {
                    visual: { theme: "default" },
                    paymentMethods: {
                        bankTransfer: "all",
                        creditCard: "all",
                        debitCard: "all",
                        mercadoPago: "all",
                    },
                },
                callbacks: {
                    onReady: () => { console.log("Formulario de Javier listo"); },
                    onSubmit: ({ selectedPaymentMethod, formData }) => {
                        // Aquí Javier le manda los datos al servidor de Jazmín
                        return new Promise((resolve, reject) => {
                            fetch("/process_payment", {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify(formData),
                            })
                            .then((response) => response.json())
                            .then((result) => {
                                alert("Pago procesado! Revisar consola.");
                                resolve();
                            })
                            .catch((error) => {
                                console.error(error);
                                reject();
                            });
                        });
                    },
                    onError: (error) => { console.error("Error en Brick:", error); },
                },
            };
            window.paymentBrickController = await bricksBuilder.create(
                "payment",
                "paymentBrick_container",
                settings
            );
        };
        renderPaymentBrick(bricksBuilder);
    </script>
</body>
</html>