const express = require('express');
const app = express();
const cors = require("cors");

//const sequelize = require('./database/db');
// const Product = require('./database/models/Product');
//const Usuarios = require('./database/models/Usuarios');

// Setting
const PORT = process.env.PORT || 5000;

//middleWare
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors());
app.use('/usuarios', require('./routes/usuarios'))
app.use('/productos', require('./routes/productos'))
//app.use('/usuarios', require('../src/paginas/auth/routes'))

const db = require("./models");

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`La app ha arrancado en puerto ${PORT}`);
  });
});



//const hostname = '127.0.0.1';
//const port = 5000;



// app.use('/api', require('./routes/productos'))
//app.use('/usuarios', require('./routes/usuarios'))

//app.listen(port, () => {

 //   try {
 //       console.log(`la api esta corriendo por el puerto ${port}`);
 //       sequelize.sync({ force: false }).then(() => {
//            console.log('nos hemos conectado a la base de datos');
//        });
//    } catch (error) {
 //       console.log('se ha producido un error', error);
 //   }



