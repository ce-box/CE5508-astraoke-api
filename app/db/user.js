const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String
    },
    pass:{
        type:String
    },
    premium:{
        type:Boolean
    }
});
module.exports = User = mongoose.model('users',userSchema);