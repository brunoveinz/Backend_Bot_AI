const jwt = require('jsonwebtoken');
const express = require('express');
require('dotenv').config();

const router = express.Router();

function generateToken(payload) {
    return jwt.sign(payload, 'tu_clave_secreta');
}

router.post('/tokeniz', (req, res) => {
    const { nombre, password } = req.body;

    if (nombre == process.env.NOMBRE && password == process.env.PASSWORD) {
        const payload = { /* información del usuario o de la aplicación */ };
        const token = generateToken(payload);
        res.json({ token });
    } else {
        const user = process.env.NOMBRE;
        const contraseña = process.env.PASSWORD;       
        res.status(401).send(`credenciales invalidad ${user} ${password} ${nombre} ${contraseña}`);
    }
});


module.exports = router;
