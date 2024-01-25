const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: ['true', 'A name is required'],
        unique: true
    },
    duration: {
        type: Number,
        required: ['true', 'A duration is required']
    },
    maxGroupSize: {
        type: Number,
        required: ['true', 'A group size is required']
    },
    rating: {
        type: Number,
        default: 4.5
    },
    price: {
        type: Number,
        required: ['true', 'A price is required']
    },
});

const Tour = mongoose.model('Tour', tourSchema);
module.exports = Tour;