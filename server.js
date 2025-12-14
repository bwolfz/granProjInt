const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());

// 🔹 Rotas do backend
const produtoRoutes = require("./routes/produtoRoutes");
const fornecedorRoutes = require("./routes/fornecedorRoutes");
const associacaoRoutes = require("./routes/associacaoRoutes");

app.use("/api/produtos", produtoRoutes);
app.use("/api/fornecedores", fornecedorRoutes);
app.use("/api/associacoes", associacaoRoutes);

// 🔹 Servir o frontend (React buildado)
app.use(express.static(path.join(__dirname, "frontend", "build")));

app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "frontend", "build", "index.html")
  );
});

// 🔹 Porta dinâmica (Replit exige isso)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor fullstack rodando");
});
