const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Produto = sequelize.define("Produto", {
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    preco: DataTypes.FLOAT,
    codigo_barra: DataTypes.STRING
});

module.exports = Produto;
