
require('dotenv').config();

const config = {
    dev: process.env.NODE_ENV !== 'production',
    httpPort: process.env.PORT || 3000,
    mongoUrl: process.env.MONGO_URL,
    cors: {
        methods: ['GET','POST','PUT','DELETE'],
        optionsSuccessStatus: 204,
        credentials: true,
    },
    jwtSecret: process.env.JWT_SECRET,
    apiKey: process.env.API_KEY,
    getStorageAccountName: () => {
        const name = /AccountName=(.*?);/.exec(process.env.AZURE_STORAGE_CONNECTION_STRING);
        return name[1];
    },
};

module.exports = { config }