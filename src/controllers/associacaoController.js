const Produto = require("../models/Produto");
const Fornecedor = require("../models/Fornecedor");

module.exports = {
    async associar(req, res) {
        const { produtoId, fornecedorId } = req.body;

        const produto = await Produto.findByPk(produtoId);
        const fornecedor = await Fornecedor.findByPk(fornecedorId);

        if (!produto || !fornecedor) {
            return res.status(404).json({ mensagem: "Produto ou fornecedor não existe." });
        }

        await produto.addFornecedor(fornecedor);
        return res.json({ mensagem: "Associação criada!" });
    },

    async desassociar(req, res) {
        const { produtoId, fornecedorId } = req.body;

        const produto = await Produto.findByPk(produtoId);
        const fornecedor = await Fornecedor.findByPk(fornecedorId);

        if (!produto || !fornecedor) {
            return res.status(404).json({ mensagem: "Produto ou fornecedor não existe." });
        }

        await produto.removeFornecedor(fornecedor);
        return res.json({ mensagem: "Associação removida!" });
    },

    async fornecedoresDoProduto(req, res) {
        const { id } = req.params;
        const produto = await Produto.findByPk(id, { include: Fornecedor });
        return res.json(produto);
    },

    async produtosDoFornecedor(req, res) {
        const { id } = req.params;
        const fornecedor = await Fornecedor.findByPk(id, { include: Produto });
        return res.json(fornecedor);
    }
};
