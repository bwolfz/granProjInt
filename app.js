//const http = require('http');

//const server = http.createServer((req, res) => {

  //  res.writeHead(200, {'Content-Type': 'text/plain'});

    //res.end('Olá, Mundo!');

//});


//const PORT = 3000;

//server.listen(PORT, () => {

  //  console.log(`Servidor rodando em http://localhost:${PORT}/`);

//});
const express = require("express");
const app = express();
const routes = require("./src/routes");
const sequelize = require("./src/database");

require("./src/models/ProdutoFornecedor");

app.use(express.json());
app.use(routes);

// Sincronizar BD
sequelize.sync().then(() => {
    console.log("Banco sincronizado!");
    //app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
});
