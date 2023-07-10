import Empleado from'../models/Empleado.model.js';
import Empresa from '../models/Empresa.model.js'; // Requerir el modelo de Empresa

export const getEmpleados = async (req, res) => {
  const empleados = await Empleado.findAll();
  res.send(empleados);
};

export const getEmpleadoById = async (req, res) => {
  const empleado = await Empleado.findByPk(req.params.id);
  res.send(empleado);
};

export const createEmpleado = async (req, res) => {
    const {nombre, rut, cargo, edad, profesion, empresaId, telefono,} = req.body; // Utiliza empresaId en lugar de empresa

    //validaciones
    if (!nombre || !empresaId || !telefono) {
      return res.status(400).json({
        error: "campos nombre, empresaId, telefono falta completar", nombre, telefono, empresaId
      });
    }

    // Verificar si la empresa existe
    const empresa = await Empresa.findByPk(empresaId);
    if (!empresa) {
      return res.status(404).json({
        error: "Empresa no encontrada",
      });
    }

    const empleado = await Empleado.create({nombre,telefono,rut,cargo,edad,profesion, EmpresaId: empresaId}); // Usar EmpresaId
    res.json(empleado);
};

export const getEmpleadoByTelefono = async (req, res) => {
  const { telefono } = req.params;
  const empleado = await Empleado.findOne({ where: { telefono },include: 'Empresa'});
  if (!empleado) {
    return res.status(404).json({ message: 'Empleado no encontrado' });
  }
  res.send(empleado);
};

export const updateEmpleado = async (req, res) => {
  const { id } = req.params;
  const { nombre,telefono, activo, primeraInteraccion} = req.body;

  try {
    let empleado = await Empleado.findOne({ where: { id } });

    if (!empleado) {
      return res.status(404).json({ message: "Empleado no encontrado" });
    }

    empleado.nombre = nombre;
    empleado.activo = activo;
    empleado.primeraInteraccion = primeraInteraccion;
    empleado.telefono = telefono;

    empleado = await empleado.save();

    res.json(empleado);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al actualizar el empleado" });
  }
};

export const deleteEmpleado = async (req, res) => {
  const empleado = await Empleado.findByPk(req.params.id);
  
  if(!empleado){
      return res.status(404).json({message: "Empleado no encontrado"});
  }

  await empleado.destroy();

  res.json({message: "Empleado eliminado"});
};

