const multer = require('multer');
const inMemoryStorage = multer.memoryStorage();

const audioStrategy = multer({storage:inMemoryStorage}).single('audio');

module.exports = audioStrategy;
