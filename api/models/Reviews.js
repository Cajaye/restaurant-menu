const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Please provide name']
    },
    content: {
        type: String,
        trim: true,
        required: [true, 'Please provide content']
    }
})

module.exports = mongoose.model('Review', ReviewSchema)