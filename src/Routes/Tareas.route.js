const express = require('express');
const router = express.Router();
const TareasController = require("../Controllers/Tareas.controller.js");

// crear una tarea
router.post('/', TareasController.crearTarea);
router.get('/:id',TareasController.getTarea);
router.get('/estado/:estado',TareasController.getTareaByEstado);
router.put('/estado/:id', TareasController.actualizarEstadoTarea); 
router.get('/dia/:id', TareasController.getTareasDelDiaById);

module.exports = router;