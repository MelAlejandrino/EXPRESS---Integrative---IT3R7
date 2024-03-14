const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    rank: {
        type: String,
        required: true
    },
    field: {
        type: String,
        required: true
    },
    teacher_id: {
        type: Number,
        required: true
    },
    updated: {
        type: Date,
        default: Date.now
    }
})

const Teacher = mongoose.model('teacher_details', teacherSchema);

module.exports = Teacher;