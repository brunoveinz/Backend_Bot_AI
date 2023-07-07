const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/database');

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
  sequelize,
  modelName: 'Conversacion'
});
module.exports = Conversacion;