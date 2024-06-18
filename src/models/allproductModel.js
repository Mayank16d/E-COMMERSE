// const mongoose = require('mongoose');
import mongoose from 'mongoose';

const allproductSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  size: {
    type: [String], // Assuming sizes are represented as strings (e.g., "S", "M", "L"). Adjust if necessary.
    required: true
  },
  color: {
    type: [String], // Assuming colors are represented as strings (e.g., "Red", "Blue"). Adjust if necessary.
    required: true
  },
  description: {
    type: String,
    required: true
  },
  inStock: {
    type: Boolean,
    required: true
  }
});

const AllProduct = mongoose.models.allproducts || mongoose.model('allproducts', allproductSchema);

// module.exports = Product;
export default AllProduct;