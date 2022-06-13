const { Sequelize } = require("sequelize");
const database = require("../database/bd");


const Unhas = database.sequelize.define(
    "Unhas",
    {
        id: {
            type:Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        nome:{
            type: Sequelize.STRING ,
            allowNull: false,
        },

        descricao: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        imagem:{
            type: Sequelize.STRING,
          allowNull: false,
        },
    },
{
    freezeTableName: true,
    timestamp: false,
    createdAt: false,
    updatedAt: false,
}

);


module.exports = Unhas; //exportar o Unhas