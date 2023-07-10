import { Sequelize, DataTypes, Model } from 'sequelize';
import {conexion} from '../database/database.js'


class Tarea extends Model {}

Tarea.init({
  hora: {
    type: DataTypes.TIME
  },
  nota:{
    type: DataTypes.STRING,
  },
  dia:{
    type: DataTypes.DATEONLY
  },
  estado:{
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}
 ,{
  sequelize: conexion,
  modelName: 'Tarea'
});

export default Tarea;