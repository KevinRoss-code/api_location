module.exports = {
  HOST: "localhost",
  USER: "root_test",
  PASSWORD: "123456",
  DB: "assurerplus",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
