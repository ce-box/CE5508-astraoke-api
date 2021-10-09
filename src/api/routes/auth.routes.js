const express = require('express');
const jwt = require('jsonwebtoken');

const { config } = require('./../../config');
const { passwordValidator } = require('../middlewares/auth.handler');

const router = express.Router();

router.post('/login', ()=>{});

module.exports = router;