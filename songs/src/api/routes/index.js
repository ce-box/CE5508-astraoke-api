const express = require('express');

const songsRouter = require('./songs.routes');
const filesRouter = require('./files.routes');

const routerApi = (app) => {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/songs', songsRouter);
    router.use('/files', filesRouter);
};

module.exports = routerApi;