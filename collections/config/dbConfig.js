module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "yourPassword",
  DB: "collections_db",
  dialect: "mysql",
  pool: {
    max: 3,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
