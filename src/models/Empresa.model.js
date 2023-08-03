import { Sequelize, DataTypes, Model } from 'sequelize';
import {conexion} from '../database/database.js'

class Empresa extends Model {}

Empresa.init({
  nombre: {
    type: DataTypes.STRING,
  },
  cantidad_empledos: {
    type: DataTypes.INTEGER,
  },
  rut:{
    type: DataTypes.INTEGER,
  },
  estado_suscripcion: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  prompt: {
    type: DataTypes.TEXT
  },
  tokens_totales:{
    type: DataTypes.INTEGER,
  },
  conversaciones_iniciadas:{
    type: DataTypes.INTEGER,
  }
}, {
  sequelize:  conexion,
  modelName: 'Empresa'
});

export default Empresa;

