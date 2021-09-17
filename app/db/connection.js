const mongoose = require('mongoose');

const URI='mongodb+srv://gaburolo:dbuser22@cluster0.uptei.mongodb.net/proyectoPrueba?retryWrites=true&w=majority';


const connectDB = async()=>{
   await mongoose.connect(URI,{
    useUnifiedTopology: true,
    useNewUrlParser:true
    });
   console.log('db connected..!');
};
module.exports = connectDB;