const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    password: String,
    role: String,
},
{
    versionKey: false
});

module.exports = User = mongoose.model('users',userSchema);