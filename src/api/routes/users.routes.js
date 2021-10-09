const express = require('express');
const controller = require('../controllers/users.controllers');
const { passwordValidator } = require('../middlewares/auth.middleware');
const router = express.Router();

router.post('/signup', passwordValidator ,controller.signup);
router.post('/login', controller.login);
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.put('/:id', controller.updateUser);
router.delete('/:id', controller.deleteUser);

module.exports = router;