const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    updated: {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model('user_details', userSchema);

module.exports = User;