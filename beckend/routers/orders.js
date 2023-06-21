const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Add a new order
router.post('/add-order', async (req, res) => {
    try {
        const { userId, subTotal, phoneNumber } = req.body;

        // Create a new order
        const newOrder = new Order({ userId, subTotal, phoneNumber });
        await newOrder.save();

        res.status(201).json({ message: 'Order added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Get order details by user ID
router.get('/get-order', async (req, res) => {
    try {
        const { userId } = req.query;
        // Find orders by user ID
        const orders = await Order.find({ userId });

        res.status(200).json({ orders });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
