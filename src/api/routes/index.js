const express = require('express');

const songsRouter = require('./songs.routes');
const usersRouter = require('./users.routes');
const authRouter = require('./auth.routes');

const routerApi = (app) => {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/songs', songsRouter);
    router.use('/users', usersRouter);
    router.use('/auth', authRouter);
};

module.exports = routerApi;