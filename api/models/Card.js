const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
    title: String,
    price: String,
    desciption: String,
    image: String,
    amount: {
        type: Number,
        default: 1,
        min: 1,
        max: [20, 'You have reached the mximum amount of items']
    },
    featured: {
        type: String,
        default: 'false'
    },
    rating: {
        type: Number,
        max: 5,
        min: 1
    }
})

module.exports = mongoose.model('Card', CardSchema)