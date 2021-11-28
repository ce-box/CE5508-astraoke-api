const express = require('express');

const songsRouter = require('./songs.routes');
const usersRouter = require('./users.routes');
const authRouter = require('./auth.routes');
const filesRouter = require('./files.routes');
const statsRouter = require('./stats.routes');
const artistsRouter = require('./artists.routes');

const routerApi = (app) => {
    app.use('/api/v1/users', usersRouter);
    app.use('/api/v1/auth', authRouter);
    app.use('/api/v1/files', filesRouter);
    app.use('/api/v1/songs', songsRouter);
    app.use('/api/v1/stats', statsRouter);
    app.use('/api/v1/artists', artistsRouter);
};

module.exports = routerApi;