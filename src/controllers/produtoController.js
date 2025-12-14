const Produto = require("../models/Produto");

module.exports = {
    async criar(req, res) {
        try {
    console.log(req.body);

    const produto = await Produto.create(req.body);
    res.status(201).json(produto);
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: err.message });
  }
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
