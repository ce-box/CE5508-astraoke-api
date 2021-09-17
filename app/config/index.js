
require('dotenv').config();

const config = {
    dev: process.env.NODE_ENV !== 'production',
    httpPort: process.env.PORT || 3000,
    mongoUrl: process.env.MONGO_URL || -1,
    cors: {
        methods: ['GET','POST','PUT','DELETE'],
        optionsSuccessStatus: 204,
        credentials: true,
    }
};

module.exports = { config }