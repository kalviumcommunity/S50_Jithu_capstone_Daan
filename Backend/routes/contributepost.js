const express = require('express');
const router = express.Router();
const Contribution = require('../models/contributemodel');
const multer = require('multer');

const storage = multer.memoryStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now()
    cb(null, uniqueSuffix + file.originalname)
  }
});

const upload = multer({ storage: storage });

const Joi = require('joi');
const contributionSchema = Joi.object({
  foodType: Joi.string().required(),
  location: Joi.string().required(),
  dishName: Joi.string().required(),
  dishDescription: Joi.string().required(),
  address: Joi.string().required(),
  canDeliver: Joi.boolean().default(false)
});

router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { error, value } = contributionSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const newContribution = new Contribution(value);

    // Check if image file exists in request
    if (req.file) {
      // If image file exists, append it to the Contribution object
      newContribution.image = req.file.buffer; // Assuming the image is stored as a buffer
    }

    const savedContribution = await newContribution.save();

    res.status(201).json({ contribution: savedContribution });
  } catch (error) {
    console.error('Error in POST /contribute:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const contributions = await Contribution.find();
    res.status(200).json(contributions);
  } catch (error) {
    console.error('Error in GET /contribute:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
