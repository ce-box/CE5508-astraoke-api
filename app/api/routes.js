const Controller= require('../controllers/controller');
const express = require('express');

const router = express.Router();

router.get('/users', Controller.findAllUsers);
router.get('/users/:id', Controller.findUser);
router.post('/users', Controller.addUser);
router.put('/users/:id', Controller.modiUser);
router.delete('/users/:id', Controller.deleteUser);

router.get('/songs', Controller.findAllSongs);
router.get('/songs/:id', Controller.findSong);
router.post('/songs', Controller.addSong);
router.put('/songs/:id', Controller.modiSong);
router.delete('/songs/:id',Controller.deleteSong)
module.exports = router;