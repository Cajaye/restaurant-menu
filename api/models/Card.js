const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
    title: String,
    price: String,
    desciption: String,
    image: String,
    amount: {
        type: Number,
        min: 1,
        max: [20, 'You have reached the mximum amount of items']
    },
})

module.exports = mongoose.model('Card', CardSchema)