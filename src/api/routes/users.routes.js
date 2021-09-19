const express = require('express');
const controller = require('../controllers/users.controllers');
const router = express.Router();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/signup', controller.signup);
router.post('/login', controller.login);
router.put('/:id', controller.updateUser);
router.delete('/:id', controller.deleteUser);

// TODO: Encapsulate the really necessary methods in these
/*router.post('/login', controller.addUser);
router.post('/signup', controller.addUser);
router.get('/me', controller.addUser);
*/
module.exports = router;