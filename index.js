import express from 'express';
import {conexion} from './src/database/database.js';
import router from './src/Routes/routes.js';
import {verifyToken} from './src/middlewares/auth.js'; // Asegúrate de actualizar esta ruta con la ruta correcta a tu archivo de autenticación
import { PORT } from './config.js';
import { Empleado, Empresa, Conversaciones, Tareas } from './src/models/associatios.js';

import dotenv from 'dotenv';

dotenv.config();

const app = express();

// verificacndo conexion bd
(async () => {
    try {
        await conexion.authenticate();
        await conexion.sync({force: false, alter: true});
        console.log("Conectados a la base de datos");
    } catch (error) {
        console.log("conexion a la base de datos fallida")
        throw new Error(error);
    }
})();

//Midlewaree
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//routes
// Midleware para ver si las peticiones tienen autorizacion
app.use(verifyToken); 
app.use('/app/', router) 



//configuracion servidor
const port = process.env.PORT || PORT;
app.listen(port, () => console.log(`Servidor ejecutándose en el puerto ${port}`));