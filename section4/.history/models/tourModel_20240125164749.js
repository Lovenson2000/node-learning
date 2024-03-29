const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: ['true', 'A name is required'],
        unique: true,
        trim: true
    },
    duration: {
        type: Number,
        required: ['true', 'A duration is required']
    },
    maxGroupSize: {
        type: Number,
        required: ['true', 'A group size is required']
    },
    difficulty: {
        type: String,
        required: ['true', 'A level of difficulty is required']
    },
    ratingsAverage: {
        type: Number,
        default: 4.5
    },
    ratingsQuantity: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        required: ['true', 'A price is required']
    },
    discount: {
        type: Number,
        required: ['true', 'A price is required']
    },
    priceDiscount: {
        type: Number
    },
    summary: {
        type: String,
        trim: true,
        required: ['true, A summary is required']
    },
    description: {
        type: String,
        trim: true
    },
    imageCover: {
        type: String,
        required: ['true', 'A tour image is required']
    },
    images: [String],
    createdAt: {
        type: Date,
        default: Date.now()
    },
    startDates: [Date],
});

const Tour = mongoose.model('Tour', tourSchema);
module.exports = Tour;