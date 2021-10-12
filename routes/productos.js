const express = require('express');
const router = express.Router();
const Product = require('../database/models/Product');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


// // CREATE
router.post('/', (req, res) => {
    console.log('req', req.body);
    Product.create(
        req.body
    ).then(product => {
        res.json(product);
    })
});


 // INDEX /api/productos
 router.get('/getByName/:name', (req, res) => {
    Product.findAll({
        where: {
          //name: req.params.name

          name: {
            [Op.like]: `%${req.params.name}%`
          }

        }
      }).then(productos => {
        res.json(productos);
    });
})


 // INDEX /api/productos
 router.get('/', (req, res) => {
     Product.findAll().then(productos => {
         res.json(productos);
     })
 })

 router.get('/prueba', (req, res) => {
     const vehiculos=[
         {nombre:"camilo",marca:"toyota",modelo:"2021"},
         {nombre:"hola",marca:"toyota",modelo:"2021"},
         {nombre:"camilo",marca:"toyota",modelo:"2021"},
     ];
     res.send(vehiculos);
 });


// READ /api/posts/:id
router.get('/:id', (req, res) => {
    Product.findByPk(req.params.id).then(productos => {
        res.json(productos);
    })
});




// // UPDATE /api/posts/:id
router.patch('/:id', (req, res) => {

     Product.update({
         name: req.body.name
     }, {
         where: {
             id: req.params.id
         }
     }).then(result => {
         res.json(result);
     });

 });


// DELETE /api/producto/:id
router.delete('/:id', (req, res) => {
    Product.destroy({
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    })
});

module.exports = router;
