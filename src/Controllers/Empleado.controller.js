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
  const empleado = await Empleado.findOne({ where: { telefono },include: 'Empresa'});
  if (!empleado) {
    return res.status(404).json({ message: 'Empleado no encontrado' });
  }
  res.send(empleado);
};

const updateEmpleado = async (req, res) => {
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
module.exports = updateEmpleado;

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
