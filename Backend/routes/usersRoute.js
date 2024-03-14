// const express = require('express');
// const router = express.Router();
// const { User }= require('../models/userModel');
// require('dotenv').config();


// // GET all users
// router.get('/', async (req, res) => {
//   try {
//     const data = await User.find();
//     res.json(data);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // GET a specific User by ID
// router.get('/:id', async (req, res) => {
//   const id = req.params.id;
//   try {
//     const data1 = await User.findById(id);
//     if (!data1) {
//       return res.status(404).json({ error: "User not found" });
//     }
//     res.json(data1);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // router.post('/', async (req, res) => {
// //   try {
// //     const { error } = userSchema.validate(req.body);
// //     if (error) {
// //       return res.status(400).json({ error: error.details[0].message });
// //     }

// //     const newData = new User(req.body);
// //     const savedData = await newData.save();


// //     res.status(201).json({ user: savedData });
// //   } catch (error) {
// //     res.status(500).json({ error: error.message });
// //   }
// // });
// router.post('/', async (req, res) => {
//   try {
//     const newData = new User(req.body);
//     const savedData = await newData.save();
//     // VALIDATE USING JOI/EXPRESS VALIDATOR
//     // HASH PASSWORD , GEN TOKEN (US, HP), SEND IT AS A COOKIE AND STORE IT IN FE
//     res.status(201).json({ user: savedData });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });



// // Update a User (PUT)
// router.put('/:id', async (req, res) => {
//   const id = req.params.id;
//   try {
//     const updatedData = await User.findByIdAndUpdate(id, req.body, { new: true });
//     if (!updatedData) {
//       return res.status(404).json({ error: "User not found" });
//     }
//     res.status(200).json(updatedData);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Update a User (PATCH)
// router.patch('/:id', async (req, res) => {
//   const id = req.params.id;
//   try {
//     const updatedData = await User.findByIdAndUpdate(id, req.body, { new: true });
//     if (!updatedData) {
//       return res.status(404).json({ error: "User not found" });
//     }
//     res.status(200).json(updatedData);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Delete a User
// router.delete('/:id', async (req, res) => {
//   const id = req.params.id;
//   try {
//     const deletedUser = await User.findByIdAndDelete(id);
//     if (!deletedUser) {
//       return res.status(404).json({ error: "User not found" });
//     }
//     res.status(200).json({ msg: 'Deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models/userModel');

router.get('/', async (req, res) => {
  try {
    const data = await User.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

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
    const { username, email, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    res.status(201).json({ user: savedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Check if password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h', // Token expires in 1 hour
    });

    // Set JWT token as a cookie
    res.cookie('token', token, { httpOnly: true });

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

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
