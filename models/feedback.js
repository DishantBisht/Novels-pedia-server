
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedbacksSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    telnum: {
        type : String,
        required: true,
        default: ''
    },
    email: {
        type : String,
        required: true,
        default: ''
    },
    agree: {
        type : Boolean,
        required: true,
        default: false
    },
    contactType: {
        type : String,
        required: true,
        default: 'Tel'
    },
    message: {
        type : String,
        required: true
    }
    },{
    timestamps: true
});
 
var Feedbacks = mongoose.model('Feedbacks', feedbacksSchema);

module.exports = Feedbacks;