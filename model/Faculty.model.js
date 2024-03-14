const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const facultySchema = new Schema({
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
    faculty_id: {
        type: Number,
        required: true
    },
    updated: {
        type: Date,
        default: Date.now
    }
})

const Faculty = mongoose.model('faculty_details', facultySchema);

module.exports = Faculty;