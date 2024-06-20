require('dotenv').config()
/*
module.exports = {
  HOST: "gcc-canary-sqlserver.database.windows.net",
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  
  DB: "gcc-canary-sqldatabase",
  dialect: "mssql",
  dialectOptions: {
    options: {
      encrypt: true,
    },
  },
};
*/

module.exports = {
  HOST: "gcc-canary-sqlserver.database.windows.net",
  USER: "adminuser",
  PASSWORD: "Ohmygodthisisbad123",
  
  DB: "gcc-canary-sqldatabase",
  dialect: "mssql",
  dialectOptions: {
    options: {
      encrypt: true,
    },
  },
};