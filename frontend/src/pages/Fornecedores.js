import { useEffect, useState } from "react";
import api from "../services/api";

function Fornecedores() {
  const [fornecedores, setFornecedores] = useState([]);
  const [nome, setNome] = useState("");

  async function carregarFornecedores() {
    const response = await api.get("/fornecedores");
    setFornecedores(response.data);
  }

  async function criarFornecedor(e) {
    e.preventDefault();
    await api.post("/fornecedores", { nome });
    setNome("");
    carregarFornecedores();
  }

  async function deletarFornecedor(id) {
    await api.delete(`/fornecedores/${id}`);
    carregarFornecedores();
  }

  useEffect(() => {
    carregarFornecedores();
  }, []);

  return (
    <div>
      <h2>Fornecedores</h2>

      <form onSubmit={criarFornecedor}>
        <input
          placeholder="Nome do fornecedor"
          value={nome}
          onChange={e => setNome(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </form>

      <ul>
        {fornecedores.map(f => (
          <li key={f.id}>
            {f.nome}
            <button onClick={() => deletarFornecedor(f.id)}>
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Fornecedores;
