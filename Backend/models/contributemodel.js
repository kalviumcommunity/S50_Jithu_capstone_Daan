const mongoose = require('mongoose');

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
    type: Buffer,
    required: true
  },
  canDeliver: {
    type: Boolean,
    default: false
  }
});

const Contribution = mongoose.model('Contribution', contributionSchema);

module.exports = Contribution;
