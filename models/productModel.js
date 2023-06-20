const mongoose = require('mongoose');
const Supplier = require('../models/supplierModel')

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        require: true
    },
    productPrice: {
        type: Number,
        require: true,
        min: 0
    },
    productCategory: {
        type: String,
        lowercase: true,
        enum: ['gloves', 'protectors', 'bags']
    },
    productImage: {
        type: String,
        require: true
    },
    productSupplier: {
        type: String,
        require: true
    }
})

const catalogProducts = new mongoose.Schema({
    productName:{
        type: String,
        require: true
    },
    productCategory:{
        type: String,
        lowercase: true,
    }
})

const Product = mongoose.model('products', productSchema);
module.exports = Product;
