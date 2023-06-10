const express = require('express');
const router = express.Router();
const empresaController = require("../controllers/Empresa.controller.js");


router.get('/',empresaController.getEmpresa);
router.get('/:id',empresaController.getEmpresaById);
router.post('/',empresaController.createEmpresa);

module.exports = router;