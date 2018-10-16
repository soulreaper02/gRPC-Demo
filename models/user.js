const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    user_id : Number,
    name    : String,
    email   : String
});

module.exports = mongoose.model('user', userSchema);