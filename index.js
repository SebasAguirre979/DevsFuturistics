const express = require('express');
const app = express();
const sequelize = require('./database/db');
// const Product = require('./database/models/Product');
const Usuarios = require('./database/models/Usuarios');

// const mongoose = require('mongoose');
// const url = 'mongodb://localhost/store'
// mongoose.connect(url, {

// }).then(() => console.log('conexion ok'))
//     .catch((e) => console.log(e))



const hostname = '127.0.0.1';
const port = 5000;

//middleWare
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// app.use('/api', require('./routes/productos'))
app.use('/usuarios', require('./routes/usuarios'))

app.listen(port, () => {

    try {
        console.log(`la api esta corriendo por el puerto ${port}`);
        sequelize.sync({ force: false }).then(() => {
            console.log('nos hemos conectado a la base de datos');
        });
    } catch (error) {
        console.log('se ha producido un error', error);
    }



})

// app.get('/vehiculos', (req, res) => {
//     const vehiculos = [
//         { nombre: "camilo", marca: "toyota", modelo: "2021" },
//         { nombre: "andres", marca: "toyota", modelo: "2021" },
//         { nombre: "acevedo", marca: "toyota", modelo: "2021" },
//     ];
//     res.send(vehiculos);
// });
// app.post('/vehiculos/nuevo', (req, res) => {
//     console.log("Vehiculo a crear",req.body);
//     // res.send("ok vehiculo creado mi rey");
//     const datosVehiculo=req.body;
//     if(Object.keys(datosVehiculo).includes('name')&&
//     Object.keys(datosVehiculo).includes('brand')&&
//     Object.keys(datosVehiculo).includes('model')){
//         res.sendStatus(200);
//     }else{
//         res.sendStatus(500);
//     }
// });

