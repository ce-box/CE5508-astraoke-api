const express = require('express');
const controller = require('../controllers/songs.controllers');
const router = express.Router();

/*
router.get('/', controller.findAllSongs);
router.get('/:id', controller.findSong);
router.post('/', controller.addSong);
router.put('/:id', controller.modiSong);
router.delete('/:id',controller.deleteSong)
*/

module.exports = router;