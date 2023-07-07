const express = require('express');
const router = express.Router();
const ConversacionController = require('../Controllers/Conversacion.controller.js');

router.post('/', ConversacionController.crearConversacion);

// Aquí puedes añadir más rutas según sea necesario

module.exports = router;