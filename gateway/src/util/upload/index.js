const azureStorage = require('azure-storage');
const { Readable } = require('stream');
const blobService = azureStorage.createBlobService(); 

const imageStrategy = require('./strategies/image-strategy');
const audioStrategy = require('./strategies/audio-strategy');
const lyricStrategy = require('./strategies/lyric-strategy');

const bufferToStream = (binary) => {
    const readableInstanceStream = new Readable({
      read() {
        this.push(binary);
        this.push(null);
      }
    });

    return readableInstanceStream;
};

const getBlobName = originalName =>{
    const tag = Math.random().toString().replace(/0\./,'');
    return `${tag}=${originalName}`;
};


module.exports = {
    blobService,
    imageStrategy,
    audioStrategy,
    lyricStrategy,
    getBlobName,
    bufferToStream,
};
