const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    pass: String,
    premium: Boolean,
},
{
    versionKey: false
});

module.exports = User = mongoose.model('users',userSchema);