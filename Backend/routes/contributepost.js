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

    if (req.file) {
      newContribution.image = req.file.buffer;
    }

    const savedContribution = await newContribution.save();

    res.status(201).json({ contribution: savedContribution });
  } catch (error) {
    console.error('Error in POST /contribute:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get("/", async (req, res) => {
  try {
    const contributions = await Contribution.find();
    const contributionsWithBase64Images = contributions.map(contribution => {
      const base64Image = contribution.image.toString('base64');
      return {
        ...contribution._doc,
        image: base64Image
      };
    });

    res.status(200).json(contributionsWithBase64Images);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
