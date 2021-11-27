const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const passport = require('passport');

const router = express.Router();

const options = {
    target: `${process.env.ARTISTS_URL}/api/v1/artists/`,
    changeOrigin: true,
    ws: true,
    pathRewrite: {
        [`^/api/v1/artists`]: ''
    }
}

const artistsProxy = createProxyMiddleware(options);

router.get('/:name', passport.authenticate('jwt', {session: false}), artistsProxy);

module.exports = router;