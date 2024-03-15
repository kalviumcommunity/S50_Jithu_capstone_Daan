const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models/userModel');
const Joi = require('joi');
require('dotenv').config();

// Joi schema for user validation
const userSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

// Generate JWT token
const generateToken = (user) => {
  return jwt.sign({ email: user.email, username: user.username }, process.env.JWT_SECRET, {
    expiresIn: '1h' // Token expires in 1 hour
  });
};

// User login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid Email' });
    }

    // Check if password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Invalid Password' });
    }

    // Generate JWT token
    const token = generateToken(user);

    // Set JWT token as a cookie or in response header
    res.cookie('token', token, { httpOnly: true });
  
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all users
router.get('/', async (req, res) => {
  try {
    const data = await User.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get user by ID
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const data1 = await User.findById(id);
    if (!data1) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(data1);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new user
router.post('/', async (req, res) => {
  try {
    // Validate the request body
    const { error, value } = userSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(value.password, 10);

    const newUser = new User({
      username: value.username,
      email: value.email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    // Generate JWT token
    const token = generateToken(savedUser);

    res.status(201).json({ user: savedUser, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update user by ID
router.put('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const updatedData = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedData) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Partially update user by ID
router.patch('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const updatedData = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedData) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete user by ID
router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ msg: 'Deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
