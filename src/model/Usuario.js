const { Model, DataTypes } = require('sequelize')

class Usuario extends Model {
    static init (sequelize) {
        super.init({
            usuario: DataTypes.STRING,
            senha: DataTypes.STRING
        }, {
            sequelize,
            tableName: "Usuarios"
        })
    }
} 

module.exports = Usuario