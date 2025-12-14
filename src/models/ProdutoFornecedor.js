const Produto = require("./Produto");
const Fornecedor = require("./Fornecedor");
const sequelize = require("../database");

const ProdutoFornecedor = sequelize.define("ProdutoFornecedor", {}, { timestamps: false });

Produto.belongsToMany(Fornecedor, { through: ProdutoFornecedor });
Fornecedor.belongsToMany(Produto, { through: ProdutoFornecedor });

module.exports = ProdutoFornecedor;
