const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
    },
    password: {
        type: String,
    },
});

module.exports = mongoose.model('User', userSchema);
