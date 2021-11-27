const multer = require('multer');
const inMemoryStorage = multer.memoryStorage();

const imageStrategy = multer({storage:inMemoryStorage}).single('image');

module.exports = imageStrategy;
