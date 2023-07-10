import { getEmpresa, getEmpresaById, createEmpresa} from '../Controllers/Empresa.controller.js';
import { updateEmpleado,getEmpleados,getEmpleadoById,createEmpleado,getEmpleadoByTelefono} from '../Controllers/Empleado.controller.js'
import {crearConversacion} from '../Controllers/Conversacion.controller.js';
import express from 'express';
import {crearTarea, getTarea, getTareaByEstado, actualizarEstadoTarea, getTareasDelDiaById}from "../Controllers/Tareas.controller.js";

const router = express.Router();

// rutas de empresa
router.get('/empresa/',getEmpresa);
router.get('/empresa/:id',getEmpresaById);
router.post('/empresa/',createEmpresa);

// rutas de empleado
router.get('/empleado/', getEmpleados);
router.get('/empleado/:id', getEmpleadoById);
router.post('/empleado/', createEmpleado);
router.get('/empleado/telefono/:telefono',getEmpleadoByTelefono);
router.put('/empleado/:id', updateEmpleado);

//rutas de conversaciones
router.post('/conversaciones/', crearConversacion);


//rutas de tareas
router.post('/tareas/', crearTarea);
router.get('/tareas/:id',getTarea);
router.get('/tareas/estado/:estado',getTareaByEstado);
router.put('/tareas/estado/:id', actualizarEstadoTarea); 
router.get('/tareas/dia/:id', getTareasDelDiaById);


export default router;