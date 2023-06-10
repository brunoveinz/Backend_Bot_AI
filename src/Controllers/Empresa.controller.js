const Empresa = require("../models/Empresa.model.js");

const getEmpresa = async (req,res) => {
    const empresas = await Empresa.findAll();
    res.send(empresas)
};

const getEmpresaById = async (req, res) => {
    const empresa = await Empresa.findById(req.params.id);
    res.send(empresa);
};

//Arreglar controladores empresa
const createEmpresa = async (req, res) => {
    const {nombre, cantidadEmpleados,rut,activo} = req.body;

    try {
        const empresa = await Empresa.create({
            nombre: nombre,
            cantdadEmpleados: cantidadEmpleados,
            rut: rut,
            activo: activo
        })
        res.json(`empresa creada exitosamente ${empresa}`)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Hubo un error al crear una empresa"})
    }
};

const updateEmpresa = async (req, res) => {
    const { nombre, cantidadEmpleados, rut } = req.body;
    
    const empresa = await Empresa.findByPk(req.params.id);
    
    if(!empresa){
        return res.status(404).json({message: "Empresa no encontrada"});
    }

    empresa.nombre = nombre;
    empresa.cantidadEmpleados = cantidadEmpleados;
    empresa.rut = rut;

    await empresa.save();

    res.json(empresa);
};

const deleteEmpresa = async (req, res) => {
    const empresa = await Empresa.findByPk(req.params.id);
    
    if(!empresa){
        return res.status(404).json({message: "Empresa no encontrada"});
    }

    await empresa.destroy();

    res.json({message: "Empresa eliminada"});
};

module.exports = {
    getEmpresa,
    getEmpresaById,
    createEmpresa,
    deleteEmpresa,
    updateEmpresa,
};