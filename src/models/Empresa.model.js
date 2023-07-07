const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/database.js');

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
  sequelize,
  modelName: 'Empresa'
});
module.exports = Empresa;

