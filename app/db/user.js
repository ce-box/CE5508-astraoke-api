const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String
    },
    username:{
        type:String
    },
    pass:{
        type:String
    },
    email:{
        type:String
    },
    premium:{
        type:Boolean
    }
});
module.exports = User = mongoose.model('users',userSchema);