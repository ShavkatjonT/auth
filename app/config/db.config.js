module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "1",
  DB: "testdb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};


// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize("testdb", "postgres", "1", {
//   host: "localhost",
//   dialect: "postgres",
//   pool: {
//     max: 5,
//     min: 1,
//     acquire: 3000,
//     idle: 1000
//   }
// });

// module.exports = sequelize;


