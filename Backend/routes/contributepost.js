// contributerouter.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Contribution = require('../models/contributemodel');
const Joi = require('joi');
require('dotenv').config();

// Joi schema for contribution validation
const contributionSchema = Joi.object({
  foodType: Joi.string().required(),
  location: Joi.string().required(),
  dishName: Joi.string().required(),
  dishDescription: Joi.string().required(),
  address: Joi.string().required(),
  image: Joi.string().required(), // Assuming image path is stored as a string
  canDeliver: Joi.boolean().default(false)
});

// Generate JWT token for contributions
const generateToken = (contribution) => {
  return jwt.sign({ foodType: contribution.foodType }, process.env.JWT_SECRET, {
    expiresIn: '1h' // Token expires in 1 hour
  });
};

// Create a new contribution
router.post('/', async (req, res) => {
  try {
    // Validate the request body
    const { error, value } = contributionSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const newContribution = new Contribution(value);

    const savedContribution = await newContribution.save();

    // Generate JWT token
    const token = generateToken(savedContribution);

    res.status(201).json({ contribution: savedContribution, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all contributions
router.get('/', async (req, res) => {
  try {
    const contributions = await Contribution.find();
    res.status(200).json(contributions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Other routes for updating, deleting, and getting specific contributions can be implemented similarly

module.exports = router;
