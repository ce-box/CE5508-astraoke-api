const express = require('express');
const cors = require('cors');
const { config } = require('./src/config');
const { logErrors, errorHandler, boomErrorHandler } = require('./src/api/middlewares/error.handler');

const connect2mongo = require('./src/db/connection');
const routerApi = require('./src/api/routes');

const app = express();
app.use(express.json());
app.use(cors());
app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header('Access-Control-Allow-Methods', 'POST,GET,PUT,DELETE');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

connect2mongo();

// Home entry point
app.get('/',(req, res) => {
    res.send('Astraoke Songs API 📀🎤🎵 ...');
});

routerApi(app);

// Error handlers
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


const port = config.httpPort; 
app.listen(port, () => console.log(`Server running 🚀 on port: ${port}... `));