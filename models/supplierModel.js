const mongoose = require('mongoose');
const Product = require('./productModel');
const catalogProducts = require('./productModel');

const supplierSchema = new mongoose.Schema({
    supplierName: {
        type: String,
        require: true
    },
    supplierCatalog: {
        type: [String],
        require: true,
        enum: ['gloves', 'protectors', 'bags']
    },
    supplierProducts: {
        type: [catalogProducts],
    }
})

const Supplier = mongoose.model('suppliers', supplierSchema);
module.exports = Supplier;