const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const passport = require('passport');

const { checkRoles } = require('../middlewares/auth.handler');
const router = express.Router();

const options = {
    target: `${process.env.SONGS_URL}/api/v1/songs/`,
    changeOrigin: true,
    ws: true,
    pathRewrite: {
        [`^/api/v1/songs`]: ''
    }
}

const songsProxy = createProxyMiddleware(options);

router.get('/', songsProxy);

router.get('/:id', songsProxy);

router.post('/', 
    passport.authenticate('jwt', {session: false}),
    checkRoles('admin','premium-user'),
    songsProxy
);

router.patch('/:id', 
    passport.authenticate('jwt', {session: false}),
    checkRoles('admin','premium-user'),
    songsProxy
);

router.delete('/:id',
    passport.authenticate('jwt', {session: false}),
    checkRoles('admin','premium-user'),
    songsProxy
);

module.exports = router;
