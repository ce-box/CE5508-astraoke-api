const express = require('express');
const statsRouter = require('./stats.routes');

const routerApi = (app) => {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/stats', statsRouter);
};

module.exports = routerApi;