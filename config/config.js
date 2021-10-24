require('dotenv').config();


module.exports = {
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "root",
    database: process.env.DB_DATABASE || "devsfuturistics",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: process.env.DB_DIALECT || "mysql",
    /* define: {
      timestamps: false,

      // Genera claves foraneas de este tipo user_id en vez de userId
      underscored: true
    }  */
  }




/* {
  "development": {
    "username": "sql10446405",
    "password": "QPYbM5iHFK",
    "database": "sql10446405",
    "host": "sql10.freesqldatabase.com",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "root",
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": "root",
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
} */
