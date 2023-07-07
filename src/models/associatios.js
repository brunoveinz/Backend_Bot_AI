// En este archivo se manenjan las llaves foraneas

const Empleado = require('./Empleado.model');
const Empresa = require('./Empresa.model');
const Conversaciones = require('./Conversacion.model');
const Tareas = require('./Tareas.model');

// Relacion empresa tiene muchos empleados 
Empresa.hasMany(Empleado);
Empleado.belongsTo(Empresa);


// Relacion Empleado tiene muchas conversaciones
Empleado.hasMany(Conversaciones);
Conversaciones.belongsTo(Empleado);


// Relacion Empleado tiene Tareas
Empleado.hasMany(Tareas);
Tareas.belongsTo(Empleado);

