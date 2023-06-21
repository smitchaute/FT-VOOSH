const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register a new user
router.post('/add-user', async (req, res) => {
    try {
        const { name, phoneNumber, password } = req.body;

        // Check if the phone number is already registered
        const existingUser = await User.findOne({ phoneNumber });
        if (existingUser) {
            return res.status(400).json({ message: 'Phone number already registered' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({ name, phoneNumber, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Login user
router.post('/login-user', async (req, res) => {
    try {
        const { phoneNumber, password, loginBy } = req.body;

        // Find the user by phone number
        const user = await User.findOne({ phoneNumber });
        if (!user) {
            return res.status(401).json({ message: 'Invalid phone number' });
        }

        // Verify password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

        res.status(200).json({ token: token, data: user });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
