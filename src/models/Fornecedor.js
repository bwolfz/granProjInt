const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Fornecedor = sequelize.define("Fornecedor", {
    nome: DataTypes.STRING,
    cnpj: DataTypes.STRING,
    endereco: DataTypes.STRING,
    contato: DataTypes.STRING
});

module.exports = Fornecedor;
