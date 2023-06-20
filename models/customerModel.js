const mongoose = require('mongoose');
const customerSchema = new mongoose.Schema({
    customerName: {
        type: String,
        require: true
    },
    customerUsername:{
        type: String,
        require: true
    },
    customerPassword:{
        type: String,
        require: true
    }
})
