const mongoose = require('mongoose');
const { string, number } = require('yup');
const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
    image: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

let Product = mongoose.model("Product", ProductsSchema);

module.exports = Product