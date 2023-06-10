const express = require('express');
const conexion = require('./database/database.js');
const EmpleadosRoute = require('./Routes/Empleado.route.js');
const EmpresaRoute = require("./Routes/Empleado.route.js");
const authRouter = require('./middlewares/auth.js'); // Asegúrate de actualizar esta ruta con la ruta correcta a tu archivo de autenticación
require('./Controllers/associatios.js');


const app = express();

// verificacndo conexion bd
(async () => {
    try {
        await conexion.authenticate();
        await conexion.sync({alter: true,});
        console.log("Conectados a la base de datos");
    } catch (error) {
        throw new Error(error);
    }
})();


//Midleware
app.use(express.json());



//routes
app.use('/a', authRouter);
app.use('/empleados', EmpleadosRoute)
app.use('/empresas', EmpresaRoute)

//rama dos


//configuracion servidor
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Servidor ejecutándose en el puerto ${port}`));