const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    name:{
        type:String
    },
    artist:{
        type:String
    }
});
module.exports = Song = mongoose.model('song',songSchema);