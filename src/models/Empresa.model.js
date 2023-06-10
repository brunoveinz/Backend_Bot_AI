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
  activo: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  sequelize,
  modelName: 'Empresa'
});
module.exports = Empresa;

