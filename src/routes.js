const express = require("express");
const routes = express.Router();

const produto = require("./controllers/produtoController");
const fornecedor = require("./controllers/fornecedorController");
const associacao = require("./controllers/associacaoController");

// Produtos
routes.post("/produtos", produto.criar);
routes.get("/produtos", produto.listar);
routes.put("/produtos/:id", produto.atualizar);
routes.delete("/produtos/:id", produto.deletar);

// Fornecedores
routes.post("/fornecedores", fornecedor.criar);
routes.get("/fornecedores", fornecedor.listar);
routes.put("/fornecedores/:id", fornecedor.atualizar);
routes.delete("/fornecedores/:id", fornecedor.deletar);

// Associação
routes.post("/associar", associacao.associar);
routes.post("/desassociar", associacao.desassociar);

routes.get("/produto/:id/fornecedores", associacao.fornecedoresDoProduto);
routes.get("/fornecedor/:id/produtos", associacao.produtosDoFornecedor);

module.exports = routes;
