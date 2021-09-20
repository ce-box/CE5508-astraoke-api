const express = require('express');
const controller = require('../controllers/songs.controllers');
const router = express.Router();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.createSong);
router.put('/:id', controller.updateSong);
router.delete('/:id',controller.deleteSong)

module.exports = router;