
/* const express = require("express");
const sequelize = require("./src/database");
const routes = require("./src/routes");

const app = express();

app.get('/', (req, res) => {
  res.send('API ONLINE');
});


app.use(express.json());
app.use("/api", routes);

sequelize.sync({ force: true })
  .then(() => {
    console.log("Banco recriado com sucesso");

    const PORT = process.env.PORT || 10000;
    app.listen(PORT, () => {
      console.log("Servidor rodando na porta", PORT);
    });
  })
  .catch(err => {
    console.error("Erro ao sincronizar banco:", err);
  });
 */

  const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('API ONLINE');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Servidor rodando na porta', PORT);
});
