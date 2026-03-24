const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Simulación de "Base de Datos" en memoria para empezar
const usuarios = []; 
const pagos = [];

// RUTA 1: Registro de usuario
app.post('/api/register', async (req, res) => {
    const { email, password } = req.body;
    // Aquí Javier debe usar bcrypt para encriptar la clave
    usuarios.push({ email, password }); 
    res.json({ message: "Usuario registrado con éxito" });
});

// RUTA 2: Login
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    // Javier debe validar si el usuario existe
    res.json({ token: "token-de-seguridad-123", user: email });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor de pagos corriendo en puerto ${PORT}`));