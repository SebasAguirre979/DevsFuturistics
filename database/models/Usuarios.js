const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Usuarios extends Model { }
Usuarios.init({
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cedula: DataTypes.STRING,
    email: DataTypes.STRING,
    pass: DataTypes.STRING,
    rol: DataTypes.STRING,
    
}, {
    sequelize,
    modelName: "usuarios"
});

module.exports = Usuarios;