const dbConfig = require("../config/dbConfig.js");
const { Sequelize, DataTypes } = require("sequelize");
const {
  DB,
  USER,
  PASSWORD,
  HOST,
  dialect,
  pool: { min, max, idle, acquire },
} = dbConfig;
const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect: dialect,
  pool: {
    max,
    min,
    acquire,
    idle,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = require("./productModels.js")(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("Yes Synced Success!!!");
});

module.exports = db;
