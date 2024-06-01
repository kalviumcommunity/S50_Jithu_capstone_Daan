const express = require('express');
const router = express.Router();
const Contribution = require('../models/contributemodel');
const UserModel = require('../models/userModel');
const multer = require('multer');
const Joi = require('joi');

// Multer setup
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Joi schema
const contributionSchema = Joi.object({
  foodType: Joi.string().required(),
  location: Joi.string().required(),
  dishName: Joi.string().required(),
  dishDescription: Joi.string().required(),
  address: Joi.string().required(),
  canDeliver: Joi.boolean().default(false),
  creatorId: Joi.string().required()
});

// Get all contributions
router.get("/", async (req, res) => {
  try {
    const contributions = await Contribution.find();
    const contributionsWithBase64Images = contributions.map(post => {
      const base64Image = post.image ? post.image.toString('base64') : '';
      return { ...post._doc, image: base64Image };
    });

    res.status(200).json(contributionsWithBase64Images);
  } catch (error) {
    console.error('Error fetching contributions:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get a specific contribution
router.get("/:id", async (req, res) => {
  try {
    const post = await Contribution.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: "Contribution not found" });
    }
    const base64Image = post.image ? post.image.toString('base64') : '';
    const postWithImage = { ...post._doc, image: base64Image };
    res.status(200).json(postWithImage);
  } catch (error) {
    console.error('Error fetching contribution:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get user contributions
router.get("/user/:id", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const userPosts = await Contribution.find({ _id: { $in: user.posts } });
    const userPostsWithBase64Images = userPosts.map(post => {
      const base64Image = post.image.toString('base64');
      return { ...post._doc, image: base64Image };
    });

    res.status(200).json(userPostsWithBase64Images);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Post a contribution
router.post('/', upload.single('image'), async (req, res) => {
  try {
    // Validation
    const { error, value } = contributionSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    // Create new contribution
    const newContribution = new Contribution(value);

    // Handle image upload
    if (req.file) {
      newContribution.image = req.file.buffer;
    }

    // Save new contribution
    const savedContribution = await newContribution.save();

    // Update user's posts
    const user = await UserModel.findById(value.creatorId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    user.posts.push(savedContribution._id);
    await user.save();

    res.status(201).json({ contribution: savedContribution });
  } catch (error) {
    console.error('Error in POST /contribute:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update a contribution
router.put('/:id', upload.single('image'), async (req, res) => {
  try {
    const { id } = req.params;

    // Validation
    const { error, value } = contributionSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const updatedData = { ...value };
    if (req.file) {
      updatedData.image = req.file.buffer;
    }

    const updatedContribution = await Contribution.findByIdAndUpdate(id, updatedData, { new: true });

    if (!updatedContribution) {
      return res.status(404).json({ error: "Contribution not found" });
    }

    res.status(200).json(updatedContribution);
  } catch (error) {
    console.error('Error updating contribution:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Patch a contribution
router.patch('/:id', upload.single('image'), async (req, res) => {
  try {
    const { id } = req.params;

    const updatedData = { ...req.body };
    if (req.file) {
      updatedData.image = req.file.buffer;
    }

    const updatedContribution = await Contribution.findByIdAndUpdate(id, updatedData, { new: true });

    if (!updatedContribution) {
      return res.status(404).json({ error: "Contribution not found" });
    }

    res.status(200).json(updatedContribution);
  } catch (error) {
    console.error('Error patching contribution:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a contribution
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const deletedContribution = await Contribution.findByIdAndDelete(id);
    if (!deletedContribution) {
      return res.status(404).json({ error: "Contribution not found" });
    }

    // Update user's posts
    await UserModel.updateMany(
      { posts: id },
      { $pull: { posts: id } }
    );

    res.status(200).json({ message: "Contribution deleted successfully" });
  } catch (error) {
    console.error('Error deleting contribution:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
