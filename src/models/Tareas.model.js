const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/database.js');

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
  sequelize,
  modelName: 'Tarea'
});
module.exports = Tarea;