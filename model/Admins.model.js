const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    updated: {
        type: Date,
        default: Date.now
    }
})

const Admin = mongoose.model('admin_details', adminSchema);

module.exports = Admin;