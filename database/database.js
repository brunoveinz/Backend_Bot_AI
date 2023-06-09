const { Sequelize } = require('sequelize');

const conexion = new Sequelize('sistema', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = conexion;