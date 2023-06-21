const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    subTotal: {
        type: Number,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
}, { versionKey: false });

module.exports = mongoose.model('Order', orderSchema);
