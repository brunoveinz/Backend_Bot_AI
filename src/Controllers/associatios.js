// associations.js

const Empleado = require('../models/Empleado.model');
const Empresa = require('../models/Empresa.model');

// Define las relaciones
Empresa.hasMany(Empleado);
Empleado.belongsTo(Empresa);