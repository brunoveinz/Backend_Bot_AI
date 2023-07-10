import Tarea from "../models/Tareas.model.js"
import { Op, literal, fn, col } from 'sequelize';

export const crearTarea = async (req, res) => {
    const {hora, dia, nota, EmpleadoId} = req.body;

    try {
        const tarea = await Tarea.create({
            hora: hora,
            dia: dia,
            nota: nota,
            EmpleadoId: EmpleadoId,
        })
        res.json(`Tarea guardada exitosamente ${tarea}`)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Hubo un error al guardar la tarea"})
    }
};


export const getTarea = async (req, res) => {
    try {
      const tareas = await Tarea.findAll({
        where: { EmpleadoId: req.params.id },
      });
      res.send(tareas);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al obtener las tareas');
    }
  };

// FUNCION PARA PEDIR TAREAS POR ESTADO
export const getTareaByEstado = async (req, res) => {
    try {
      const tareas = await Tarea.findAll({where:{estado: req.params.estado}, include: 'Empleado'
      });
      res.send(tareas);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al obtener las tareas');
    }
};

export const actualizarEstadoTarea = async (req, res) => {
    const { id } = req.params;
    const { hora, nota, dia, EmpleadoId,estado} = req.body;
  
    try {
      let tarea = await Tarea.findOne({ where: { id } });
  
      if (!tarea) {
        return res.status(404).json({ message: "Tarea no encontrada" });
      }
  
      tarea.hora = hora;
      tarea.nota = nota;
      tarea.dia = dia;
      tarea.estado = estado;
      tarea.EmpleadoId = EmpleadoId;
  
      tarea = await tarea.save();
  
      res.json(tarea);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Error al actualizar tarea" });
    }
};

// crear funcion para obtener tareas del dia segun id
// funcion devuelve todas las tareas del dia el unico parametro que necesita es el id del empleado
export const getTareasDelDiaById = async (req, res) => {
  try {
    const today = new Date().toISOString().split('T')[0];

    const tareas = await Tarea.findAll({where:{EmpleadoId: req.params.id, dia: today}, include: 'Empleado'
    });
    res.send(tareas);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener las tareas');
  }
};
