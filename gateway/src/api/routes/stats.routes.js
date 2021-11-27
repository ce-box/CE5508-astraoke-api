const express = require('express');
const { createProxyMiddleware, fixRequestBody } = require('http-proxy-middleware');
const passport = require('passport');
const { restream } = require('../../util');

const { checkRoles } = require('../middlewares/auth.handler');
const router = express.Router();

const options = {
    target: `${process.env.STATS_URL}/api/v1/stats/`,
    changeOrigin: true,
    onProxyReq: restream,
    ws: true,
    pathRewrite: {
        [`^/api/v1/stats`]: ''
    }
}

const statsProxy = createProxyMiddleware(options);

router.get('/', passport.authenticate('jwt', {session: false}), statsProxy);

router.get('/:id', passport.authenticate('jwt', {session: false}), statsProxy);

router.post('/', passport.authenticate('jwt', {session: false}), statsProxy);


module.exports = router;
