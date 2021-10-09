const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    name: String,
    artist: String,
    album: String,
    cover: String,
    url: String,
    lyrics:String,
},
{
    versionKey: false
});

module.exports = Song = mongoose.model('songs',songSchema);