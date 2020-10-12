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
            console.log(err)
            res.json(err)
        })
})

productsController.post('/', (req, res) => {

})

module.exports = productsController;