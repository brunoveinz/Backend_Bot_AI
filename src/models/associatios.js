import Empleado from './Empleado.model.js';
import Empresa from './Empresa.model.js';
import Conversaciones from './Conversacion.model.js';
import Tareas from './Tareas.model.js';

// Relacion empresa tiene muchos empleados 
Empresa.hasMany(Empleado);
Empleado.belongsTo(Empresa);

// Relacion Empleado tiene muchas conversaciones
Empleado.hasMany(Conversaciones);
Conversaciones.belongsTo(Empleado);

// Relacion Empleado tiene Tareas
Empleado.hasMany(Tareas);
Tareas.belongsTo(Empleado);

export { Empleado, Empresa, Conversaciones, Tareas };