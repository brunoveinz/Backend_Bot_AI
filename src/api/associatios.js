// associations.js

const Empleado = require('../api/empleado/model/Empleado.model');
const Empresa = require('../api/empresa/model/Empresa.model');

// Define las relaciones
Empresa.hasMany(Empleado);
Empleado.belongsTo(Empresa);