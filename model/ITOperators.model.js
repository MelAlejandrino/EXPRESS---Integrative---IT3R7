const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const operatorSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    operator_id: {
        type: Number,
        required: true
    },
    updated: {
        type: Date,
        default: Date.now
    }
})

const Operator = mongoose.model('operator_details', operatorSchema);

module.exports = Operator;