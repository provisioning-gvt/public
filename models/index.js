const dbConfig = require("../db.config.js");
const Sequelize = require("sequelize");
const db = {};
try {
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  dialectOptions: dbConfig.dialectOptions,
});


db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = require("./product.model.js")(sequelize, Sequelize);
} catch (error) {
  console.error("An error occurred during setup: ", error);
}
module.exports = db;
