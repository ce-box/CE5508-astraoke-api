const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const passport = require('passport');
const { restream } = require('../../util');

const { checkRoles, fixRequestBody } = require('../middlewares/auth.handler');
const router = express.Router();

const options = {
    target: `${process.env.USERS_URL}/api/v1/users/`,
    changeOrigin: true,
    onProxyReq: restream,
    ws: true,
    pathRewrite: {
        [`^/api/v1/users`]: ''
    }
}

const usersProxy = createProxyMiddleware(options);

router.get('/', usersProxy);

router.get('/me', passport.authenticate('jwt', {session: false}), usersProxy);

router.post('/',
    usersProxy
);

router.patch('/:id', 
    passport.authenticate('jwt', {session: false}),
    checkRoles('admin','premium-user'),
    usersProxy
);

router.delete('/:id',
    passport.authenticate('jwt', {session: false}),
    checkRoles('admin','premium-user'),
    usersProxy
);

module.exports = router;
