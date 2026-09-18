const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'Please provide your first name'],
    },
    lastname: {
        type: String,
        required: [true, 'Please provide your last name'],
    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: [6, 'Password must be at least 6 characters long'],
    },
    profilePic: {
        type: String,
        required: false,
    }
}, {timestamps: true});

module.exports = mongoose.model('users', userSchema);