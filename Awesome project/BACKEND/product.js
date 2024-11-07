const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    image: { type: String },
    ratings: { type: Number, default: 0 },
    reviews: [{ user: String, comment: String, rating: Number }],
});

module.exports = mongoose.model('Product', productSchema);
