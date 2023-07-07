const express = require('express');
const conexion = require('./database/database.js');
const EmpleadosRoute = require('./Routes/Empleado.route.js');
const EmpresaRoute = require("./Routes/Empresa.route.js");
const ConversacionRoute = require("./Routes/Conversacion.route.js");
const {router, verifyToken} = require('./middlewares/auth.js'); // Asegúrate de actualizar esta ruta con la ruta correcta a tu archivo de autenticación
require('./models/associatios.js');


const app = express();

// verificacndo conexion bd
(async () => {
    try {
        await conexion.authenticate();
        await conexion.sync({force:false});
        console.log("Conectados a la base de datos");
    } catch (error) {
        throw new Error(error);
    }
})();


//Midlewaree
app.use(express.json());

//routes
// Midleware para ver si las peticiones tienen autorizacion
app.use(verifyToken);

app.use('/empleados', EmpleadosRoute)
app.use('/empresas', EmpresaRoute)
app.use('/conversacion', ConversacionRoute);

//rama dos


//configuracion servidor
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Servidor ejecutándose en el puerto ${port}`));