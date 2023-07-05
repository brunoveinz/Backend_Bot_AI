const express = require('express');
const router = express.Router();
const empleadoController = require('../Controllers/Empleado.controller.js');

router.get('/', empleadoController.getEmpleados);
router.get('/:id', empleadoController.getEmpleadoById);
router.post('/', empleadoController.createEmpleado);
router.get('/telefono/:telefono', empleadoController.getEmpleadoByTelefono);
router.put('/:id', empleadoController.updateEmpleado);


// Aquí puedes añadir más rutas según sea necesario

module.exports = router;