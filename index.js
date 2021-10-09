const express = require('express');
const cors = require('cors');
const { config } = require('./src/config');

const connect2mongo = require('./src/db/connection');

const userRoutes = require('./src/api/routes/users.routes');
const songsRoutes = require('./src/api/routes/songs.routes');

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
require('./utils');

app.use('/api/v1/songs', songsRoutes);
app.use('/api/v1/users', userRoutes);

// Home entry point
app.get('/',(req, res) => {
    res.send('Astraoke API 🎤🎵 ...');
});


const port = config.httpPort; 
app.listen(port, () => console.log(`Server running 🚀 on port: ${port}... `));