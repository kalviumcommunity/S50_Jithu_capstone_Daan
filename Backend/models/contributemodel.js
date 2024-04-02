// contributemodel.js
const mongoose = require('mongoose');

// Define schema for contribution item
const contributionSchema = new mongoose.Schema({
  foodType: {     
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  dishName: {
    type: String,
    required: true
  },
  dishDescription: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  canDeliver: {
    type: Boolean,
    default: false
  }
});

// Create a Mongoose model based on the schema
const Contribution = mongoose.model('Contribution', contributionSchema);

module.exports = Contribution;
