const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const { config } = require('./../../config');
const { checkApiKey } = require('../middlewares/auth.handler');

const router = express.Router();

router.post('/login',
    checkApiKey,
    passport.authenticate('local', {session: false}),
    async (req, res, next) => {
        try {
          const user = req.user;
          const payload = {
            sub: user._id,
            role: user.role
          };
          const token = jwt.sign(payload, config.jwtSecret);
          res.json({
            user,
            token
          });
        } catch (error) {
          next(error);
        }
});

module.exports = router;