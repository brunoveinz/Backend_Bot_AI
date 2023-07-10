import { Sequelize, DataTypes, Model } from 'sequelize';
import {conexion} from '../database/database.js'


class Conversacion extends Model {}

Conversacion.init({
  titulo: {
    type: DataTypes.STRING,
  },
  categoria: {
    type: DataTypes.STRING
  },
  total_tokens:{
    type: DataTypes.INTEGER,
  }
}
 ,{
  sequelize: conexion,
  modelName: 'Conversacion'
});
export default Conversacion;