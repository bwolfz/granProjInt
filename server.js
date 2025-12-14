const express = require('express');
const app = express();

const routes = require('./src/routes');

const sequelize = require("./src/database");


app.use(express.json());
app.use('/api', routes);

sequelize.sync({ alter: true })
  .then(() => {
    console.log("Banco sincronizado");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
 })
  .catch(err => {
    console.error("Erro ao sincronizar banco:", err);
  });
