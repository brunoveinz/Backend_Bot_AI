const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/database.js');

class Tarea extends Model {}

Tarea.init({
  nombre: {
    type: DataTypes.STRING,
  },
  hora_recordar: {
    type: DataTypes.TIME
  },
  nota_recordatorio:{
    type: DataTypes.STRING,
  }
}
 ,{
  sequelize,
  modelName: 'Tarea'
});
module.exports = Tarea;