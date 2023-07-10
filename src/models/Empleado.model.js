import { Sequelize, DataTypes, Model } from 'sequelize';
import {conexion} from '../database/database.js'


class Empleado extends Model {}

Empleado.init({
  nombre: {
    type: DataTypes.STRING,
  },
  apellidos: {
    type: DataTypes.STRING,
  },
  rut: {
    type: DataTypes.STRING,
  },
  cargo: {
    type: DataTypes.STRING,
  },
  edad:{
    type: DataTypes.INTEGER,
  },
  profesion:{
    type: DataTypes.STRING,
  },
  telefono: {
    type: DataTypes.BIGINT(25),
    unique: true
  },
  primeraInteraccion: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  sequelize: conexion,
  modelName: 'Empleado'
});


export default Empleado;