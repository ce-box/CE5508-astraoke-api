const mongoose = require('mongoose');
const { config } = require('../config');
const URI = config.mongoUrl;

const connect2mongo = async() => {
   try {
      await mongoose.connect(URI, {
         useUnifiedTopology: true,
         useNewUrlParser: true
      });
      console.log('☑️ The server has successfully connected to the database ... ');
   } catch(error) {
      console.log(`⛔️ An error occurred in the database connection ...\n[Error] ${error}`);
   }
};

module.exports = connect2mongo;