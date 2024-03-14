const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    year_level: {
        type: String,
        required: true
    },
    subjects_enrolled: {
        type: Array,
        required: true
    },
    student_id: {
        type: Number,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    updated: {
        type: Date,
        default: Date.now
    }
})

const Student = mongoose.model('student_details', studentSchema);

module.exports = Student;