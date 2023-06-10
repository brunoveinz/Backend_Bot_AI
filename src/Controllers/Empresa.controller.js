const Empresa = require("../models/Empresa.model.js");

const getEmpresa = async (req,res) => {
    const empresas = await Empresa.findAll();
    res.send(empresas)
};

const getEmpresaById = async (req, res) => {
    const empresa = await Empresa.findById(req.params.id);
    res.send(empresa);
};

const createEmpresa = async (req, res) => {
    const {nombre, cantidadEmpleados,rut} = req.body;

    res.json({
        nombre: nombre,
        cantidadEmpleados: cantidadEmpleados,
        rut: rut
    });
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