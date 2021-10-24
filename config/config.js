require('dotenv').config();


module.exports = {
    username: "sql10446405",
    password: "QPYbM5iHFK",
    database: "sql10446405",
    host: process.env.DB_HOST || "sql10.freesqldatabase.com",
    dialect: "mysql",
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
