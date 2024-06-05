// products.js

const mongoose = require('mongoose');

// Define the schema for a product
const ProductSchema = mongoose.Schema({
    title: String,
    image: String,
    price: Number,
    rating: Number,
});

// Create a model for the product schema and export it
module.exports = mongoose.model('Product', ProductSchema);
