const Empleado = require('../models/Empleado.model');

const getEmpleados = async (req, res) => {
  const empleados = await Empleado.findAll();
  res.send(empleados);
};

const getEmpleadoById = async (req, res) => {
  const empleado = await Empleado.findByPk(req.params.id);
  res.send(empleado);
};

const createEmpleado = async (req, res) => {
    const {nombre,empresa,telefono} = req.body;

    //validaciones
    if (!nombre || !empresa || !telefono) {
      return res.status(400).json({
        error: "uno o mas campos vacios",
      });
    }

    const empleado = await Empleado.create({nombre,empresa,telefono});
    res.json(empleado);
};

const getEmpleadoByTelefono = async (req, res) => {
  const { telefono } = req.params;
  const empleado = await Empleado.findOne({ where: { telefono } });
  if (!empleado) {
    return res.status(404).json({ message: 'Empleado no encontrado' });
  }
  res.send(empleado);
};


const updateEmpleado = async (req, res) => {
  const { nombre, empresa, telefono } = req.body;
  
  const empleado = await Empleado.findByPk(req.params.id);
  
  if(!empleado){
      return res.status(404).json({message: "Empleado no encontrado"});
  }

  empleado.nombre = nombre;
  empleado.empresa = empresa;
  empleado.telefono = telefono;

  await empleado.save();

  res.json(empleado);
};

const deleteEmpleado = async (req, res) => {
  const empleado = await Empleado.findByPk(req.params.id);
  
  if(!empleado){
      return res.status(404).json({message: "Empleado no encontrado"});
  }

  await empleado.destroy();

  res.json({message: "Empleado eliminado"});
};


module.exports = {
  updateEmpleado,
  deleteEmpleado,
  getEmpleados,
  getEmpleadoById,
  createEmpleado,
  getEmpleadoByTelefono,  // Exportar otros controladores aquí
};