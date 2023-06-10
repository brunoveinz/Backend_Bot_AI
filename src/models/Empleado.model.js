const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/database.js');

class Empleado extends Model {}

Empleado.init({
  nombre: {
    type: DataTypes.STRING,
  },
  telefono: {
    type: DataTypes.BIGINT(25),
    unique: true
  },
  activo: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  sequelize,
  modelName: 'Empleado'
});


module.exports = Empleado;