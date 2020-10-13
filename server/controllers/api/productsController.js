const productsController = require('express').Router();

const db = require('../../models');
const { JWTVerifier } = require('../../lib/passport');
const jwt = require('jsonwebtoken');

productsController.get('/', (req, res) => {
    db.Products.find({})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            console.log(err);
            res.json(err)
        })
})

productsController.post('/', (req, res) => {
    db.Products.create({
        category: req.body.category,
        name: req.body.name,
        price: req.body.price,
        image: req.body.image,
        description: req.body.description
    }).then(data => {
        res.json(data)
    }).catch(err => {
        console.log(err);
        res.json(err)
    })
})

module.exports = productsController;