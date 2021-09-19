const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    pass: String,
    premium: Boolean,
    email: String
},
{
    versionKey: false
});

module.exports = User = mongoose.model('users',userSchema);