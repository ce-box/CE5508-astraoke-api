const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    name: String,
    artist: String,
    album: String,
    cover: String,
    url: String,
    lyric:String,
},
{
    versionKey: false
});

module.exports = Song = mongoose.model('songs',songSchema);