import { Sequelize } from 'sequelize';
import {
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_PORT,
    DB_NAME
} from '../../config.js'

// conexion Local
// export const conexion = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {host: DB_HOST,port: DB_PORT, dialect: 'mysql'});

// conexion Produccion
export const conexion = new Sequelize('sistema', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});