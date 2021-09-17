const SongController= require('../controllers/songs.controllers');
const express = require('express');

const router = express.Router();

router.get('/all', SongController.findAllSongs);

module.exports = router;