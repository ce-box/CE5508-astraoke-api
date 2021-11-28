const multer = require('multer');
const inMemoryStorage = multer.memoryStorage();

const lyricStrategy = multer({storage:inMemoryStorage}).single('lyric');

module.exports = lyricStrategy;
