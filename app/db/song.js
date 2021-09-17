const mongoose = require('mongoose');


const songSchema = new mongoose.Schema({
    name:{
        type:String
    },
    artist:{
        type:String
    },
    album:{
        type:String
    },
    imglogo:{
        type:String
    },
    url:{
        type:String
    },
    lyric:{
        type:String
    }

});
module.exports = Song = mongoose.model('songs',songSchema);