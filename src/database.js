//const { Sequelize } = require("sequelize");
//const path = require('path');

//const sequelize = new Sequelize({
    //dialect: "sqlite",
    //storage: path.join(__dirname, "..", "database.sqlite"),
    //logging: false
//});

//module.exports = sequelize;

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: ":memory:"
});

module.exports = sequelize;
