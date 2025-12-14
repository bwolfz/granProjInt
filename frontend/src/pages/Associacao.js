import { useEffect, useState } from "react";
import api from "../services/api";

function Associacao() {
  const [produtos, setProdutos] = useState([]);
  const [fornecedores, setFornecedores] = useState([]);
  const [produtoId, setProdutoId] = useState("");
  const [fornecedorId, setFornecedorId] = useState("");

  useEffect(() => {
    async function carregarDados() {
      const prod = await api.get("/produtos");
      const forn = await api.get("/fornecedores");
      setProdutos(prod.data);
      setFornecedores(forn.data);
    }
    carregarDados();
  }, []);

  async function associar(e) {
    e.preventDefault();
    await api.post("/associar", {
      produtoId,
      fornecedorId
    });
    alert("Produto associado ao fornecedor!");
  }

  return (
    <div>
      <h2>Associação Produto / Fornecedor</h2>

      <form onSubmit={associar}>
        <select onChange={e => setProdutoId(e.target.value)}>
          <option>Selecione um produto</option>
          {produtos.map(p => (
            <option key={p.id} value={p.id}>
              {p.nome}
            </option>
          ))}
        </select>

        <select onChange={e => setFornecedorId(e.target.value)}>
          <option>Selecione um fornecedor</option>
          {fornecedores.map(f => (
            <option key={f.id} value={f.id}>
              {f.nome}
            </option>
          ))}
        </select>

        <button type="submit">Associar</button>
      </form>
    </div>
  );
}

export default Associacao;
