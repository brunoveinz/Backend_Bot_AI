const express = require('express');
const conexion = require('../database/database.js');
const EmpleadosRoute = require('./api/empleado/routes/Empleado.route.js');
const empresaRoute = require("./api/empresa/routes/Empresa.route.js");

const app = express();

// verificacndo conexion bd
(async () => {
    try {
        await conexion.authenticate();
        await conexion.sync({alter: true});
        console.log("Conectados a la base de datos");
    } catch (error) {
        throw new Error(error);
    }
})();


//Midleware
app.use(express.json());



//routes
app.use('/empleados', EmpleadosRoute)



//configuracion servidor
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Servidor ejecutándose en el puerto ${port}`));