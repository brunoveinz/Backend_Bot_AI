import { Sequelize } from 'sequelize';
import {
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_PORT,
    DB_NAME
} from '../../config.js'

// conexion Local
export const conexion = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'mysql'
});

// conexion Produccion
// const conexion = new Sequelize('a153861_sistema', 'a153861_bruno', 'C1f2t3b4b5.', {
//     host: 'localhost',
//     dialect: 'mysql'
// });