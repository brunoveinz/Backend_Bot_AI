const Conversacion = require("../models/Conversacion.model")

const crearConversacion = async (req, res) => {
    const {titulo, categoria, total_tokens, EmpleadoId} = req.body;

    try {
        const conversacion = await Conversacion.create({
            titulo: titulo,
            categoria: categoria,
            total_tokens: total_tokens,
            EmpleadoId: EmpleadoId,
        })
        res.json(`Conversacion Guardada Exitosamente ${conversacion}`)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Hubo un error al guardar la Conversacion"})
    }
};

module.exports = {crearConversacion}