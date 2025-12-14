import { useEffect, useState } from "react";
import api from "../services/api";

function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");

  // LISTAR
  async function carregarProdutos() {
    const response = await api.get("/produtos");
    setProdutos(response.data);
  }

  // CRIAR
  async function criarProduto(e) {
    e.preventDefault();
    await api.post("/produtos", {
      nome,
      preco
    });
    setNome("");
    setPreco("");
    carregarProdutos();
  }

  // DELETAR
  async function deletarProduto(id) {
    await api.delete(`/produtos/${id}`);
    carregarProdutos();
  }

  useEffect(() => {
    carregarProdutos();
  }, []);

  return (
    <div>
      <h2>Produtos</h2>

      <form onSubmit={criarProduto}>
        <input
          placeholder="Nome"
          value={nome}
          onChange={e => setNome(e.target.value)}
        />
        <input
          placeholder="Preço"
          value={preco}
          onChange={e => setPreco(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </form>

      <ul>
        {produtos.map(produto => (
          <li key={produto.id}>
            {produto.nome} - R$ {produto.preco}
            <button onClick={() => deletarProduto(produto.id)}>
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Produtos;
