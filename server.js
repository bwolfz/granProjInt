const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());

// Rotas do backend
const routes = require('./src/routes');

app.use(express.json());
app.use('/api', routes);

// Servir o frontend (React buildado)
app.use(express.static(path.join(__dirname, "frontend", "build")));

app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "frontend", "build", "index.html")
  );
});

//  Porta dinâmica 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor fullstack rodando");
}); 
