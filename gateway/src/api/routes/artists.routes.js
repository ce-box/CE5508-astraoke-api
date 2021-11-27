const express = require('express');
const { createProxyMiddleware, fixRequestBody } = require('http-proxy-middleware');
const passport = require('passport');
const { restream } = require('../../util');

const router = express.Router();

const options = {
    target: `${process.env.ARTISTS_URL}/api/v1/artists/`,
    changeOrigin: true,
    onProxyReq: restream,
    ws: true,
    pathRewrite: {
        [`^/api/v1/artists`]: ''
    }
}

const artistsProxy = createProxyMiddleware(options);

router.get('/:name', passport.authenticate('jwt', {session: false}), artistsProxy);

module.exports = router;