const Empleado = require('../models/Empleado.model');
const Empresa = require('../models/Empresa.model'); // Requerir el modelo de Empresa

const getEmpleados = async (req, res) => {
  const empleados = await Empleado.findAll();
  res.send(empleados);
};

const getEmpleadoById = async (req, res) => {
  const empleado = await Empleado.findByPk(req.params.id);
  res.send(empleado);
};

const createEmpleado = async (req, res) => {
    const {nombre, EmpresaId, telefono,activo} = req.body; // Utiliza empresaId en lugar de empresa

    //validaciones
    if (!nombre || !EmpresaId || !telefono || !activo) {
      return res.status(400).json({
        error: "uno o más campos vacíos",
      });
    }

    // Verificar si la empresa existe
    const empresa = await Empresa.findByPk(EmpresaId);
    if (!empresa) {
      return res.status(404).json({
        error: "Empresa no encontrada",
      });
    }

    const empleado = await Empleado.create({nombre, EmpresaId: EmpresaId, telefono}); // Usar EmpresaId
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
  const { nombre, empresaId, telefono } = req.body; // Usar empresaId
  
  const empleado = await Empleado.findByPk(req.params.id);
  
  if(!empleado){
      return res.status(404).json({message: "Empleado no encontrado"});
  }

  // Verificar si la empresa existe
  const empresa = await Empresa.findByPk(empresaId);
  if (!empresa) {
    return res.status(404).json({
      error: "Empresa no encontrada",
    });
  }

  empleado.nombre = nombre;
  empleado.EmpresaId = empresaId; // Usar EmpresaId
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
