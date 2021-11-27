const mongoose = require('mongoose');

const statSchema = new mongoose.Schema({
    username: String,
    score: Number,
    songId: String,
},
{
    versionKey: false
});

module.exports = Stat = mongoose.model('stats',statSchema);