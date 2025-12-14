const Produto = require("../models/Produto");

module.exports = {
    async criar(req, res) {
        const { nome, descricao, preco, codigo_barra } = req.body;
        const produto = await Produto.create({ nome, descricao, preco, codigo_barra });
        return res.json(produto);
    },

    async listar(req, res) {
        const produtos = await Produto.findAll();
        return res.json(produtos);
    },

    async atualizar(req, res) {
        const { id } = req.params;
        await Produto.update(req.body, { where: { id } });
        return res.json({ mensagem: "Produto atualizado!" });
    },

    async deletar(req, res) {
        const { id } = req.params;
        await Produto.destroy({ where: { id } });
        return res.json({ mensagem: "Produto deletado!" });
    }
};
