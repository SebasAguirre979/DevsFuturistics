const express = require('express');
const router = express.Router();
const Usuarios = require('../models/Usuarios');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

router.get('/pruebausuarios', (req, res) => {
    const vehiculos=[
        {nombre:"camilo",marca:"camaro",modelo:"2021"},
        {nombre:"hola",marca:"camaro",modelo:"2021"},
        {nombre:"camilo",marca:"camaro",modelo:"2021"},
    ];
    res.send(vehiculos);
    console.log("Accedio a la base de datos desde front");
});


//Trae todos los usuarios
router.get('/allusers', (req, res) => {
    Usuarios.findAll().then(users => {
        res.json(users);
    })
})

//Actualiza por cedula
router.patch('/update/', (req, res) => {

    Usuarios.update({
        nombre: req.body.nombre,
        cedula: req.body.cedula,
        email: req.body.email,
        pass: req.body.pass,
        rol: req.body.rol
    }, {
        where: {
            cedula: req.body.cedulaB
            // id: req.params.id
        }
    }).then(result => {
        res.json(result);
    });

});


// // Crea un nuevo usuario
router.post('/newuser', (req, res) => {
    console.log('req', req.body);
    Usuarios.create(
        req.body
    ).then(product => {
        res.json(product);
    })
});

// Elimina un usuario por numero de cedula
router.delete('/deleteuser', (req, res) => {
    Usuarios.destroy({
        where: {
            // id: req.params.id
            cedula: req.body.cedulaB

        }
    }).then(result => {
        res.json(result);
    })
});

module.exports = router;