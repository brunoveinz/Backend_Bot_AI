const jwt = require('jsonwebtoken');
const express = require('express');
require('dotenv').config();

const router = express.Router();

function generateToken(payload) {
    return jwt.sign(payload, process.env.APIKEY);
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


function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        jwt.verify(bearerToken, process.env.APIKEY, (err, data) => {
            if (err) {
                res.sendStatus(403);
            } else {
                req.userData = data;
                next();
            }
        });
    } else {
        res.status(403).send("Token no Enviado"); // Enviar respuesta personalizada cuando no se envía un token.
    }
}


module.exports = {router, verifyToken};
