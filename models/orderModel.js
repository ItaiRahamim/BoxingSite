const mongoose = require('mogoose');
const Customer = require('./customerModel');
const Product = require('./productModel');

const orderSchema = new mongoose.Schema({
    orderCustomer: {
        type: Customer,
        require: true
    },
    orderDate: {
        type: Date,
        default: Date.now()
    },
    productsList: {
        type: Product[0]
    },
    orderAmount: {
        type: Number,
        require: true,
        min: 0
    }
})

const Supplier = mongoose.model('suppliers', supplierSchema);
module.exports = Supplier;