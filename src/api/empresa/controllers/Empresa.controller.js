const Empresa = require("../model/Empresa.model.js");

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

module.exports = {
    getEmpresa,
    getEmpresaById,
    createEmpresa,
};