module.exports = {
  HOST: "ep-rough-snowflake-72708740-pooler.us-east-1.postgres.vercel-storage.com",
  USER: "default",
  PASSWORD: "YIWz7py5AcrD",
  DB: "test-1",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  dialectOptions: {
     ssl: {
         require: true,
         rejectUnauthorized: false,
     },
    useUTC: false,
},
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


