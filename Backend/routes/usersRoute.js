const express = require('express');
const router = express.Router();
const { User } = require('../models/userModel');
require('dotenv').config();


// GET all users
router.get('/', async (req, res) => {
  try {
    const data = await User.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET a specific User by ID
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

router.post('/', async (req, res) => {
  try {
    const { error } = userSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const newData = new User(req.body);
    const savedData = await newData.save();

    // Generate JWT token

    res.status(201).json({ user: savedData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a User (PUT)
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

// Update a User (PATCH)
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

// Delete a User
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
