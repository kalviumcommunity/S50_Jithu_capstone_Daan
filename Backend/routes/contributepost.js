const express = require('express');
const router = express.Router();
const Contribution = require('../models/contributemodel');
const UserModel = require('../models/userModel');
const multer = require('multer');

const storage = multer.memoryStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
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
  canDeliver: Joi.boolean().default(false),
  creatorId: Joi.string().required()
});

// POST endpoint for contributing a post
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

    const userid = value.creatorId;

    const user = await UserModel.findById(userid);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const savedContribution = await newContribution.save();

    user.posts.push(savedContribution._id);

    await user.save();

    res.status(201).json({ contribution: savedContribution });
  } catch (error) {
    console.error('Error in POST /contribute:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET endpoint to fetch user's contributions by ID
router.get("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    
    const user = await UserModel.findById(userId);
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const userPostIds = user.posts;
    
    const userPosts = await Contribution.find({ _id: { $in: userPostIds } });

    const userPostsWithBase64Images = userPosts.map(post => {
      const base64Image = post.image.toString('base64');
      return {
        ...post._doc,
        image: base64Image
      };
    });

    res.status(200).json(userPostsWithBase64Images);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// GET endpoint to fetch all contributions
router.get("/", async (req, res) => {
  try {
    // Fetch all contributions
    const allContributions = await Contribution.find();

    // Convert image buffers to base64 strings
    const contributionsWithBase64Images = allContributions.map(contribution => {
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

// DELETE endpoint to delete a contribution by ID
router.delete("/:id", async (req, res) => {
  try {
    const contributionId = req.params.id;
    
    // Find the contribution by ID and delete it
    await Contribution.findByIdAndDelete(contributionId);
    
    res.status(200).json({ message: "Contribution deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
