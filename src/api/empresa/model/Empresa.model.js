const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../../../../database/database.js');

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
}, {
  sequelize,
  modelName: 'Empresa',// si no deseas que Sequelize maneje automáticamente las columnas createdAt y updatedAt
});

module.exports = Empresa;