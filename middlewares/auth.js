const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

function generateToken(payload) {
    return jwt.sign(payload, 'tu_clave_secreta');
}

router.post('/generate-token', (req, res) => {
    const { username, password } = req.body;

    // Aquí necesitas verificar las credenciales proporcionadas
    if (username === process.env.USERNAME && password === procces.env.PASSWORD) {
        const payload = { /* información del usuario o de la aplicación */ };
        const token = generateToken(payload);
        res.json({ token });
    } else {
        res.status(401).send('Credenciales inválidas');
    }
});

module.export 