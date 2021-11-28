const express = require('express');
const { imageStrategy, audioStrategy, lyricStrategy, blobService, bufferToStream, getBlobName } = require('../../util/upload');
const { config } = require('./../../config');

const router = express.Router();


router.post('/upload/image',imageStrategy,(req, res, next) => {
    const blobName = getBlobName(req.file.originalname);
    const stream = bufferToStream(req.file.buffer);
    const streamLength = req.file.buffer.length;
    const containerName = 'archivo';
    blobService.createBlockBlobFromStream(containerName, blobName, stream, streamLength, (error) => {
        try{
            const fileUrl = `https://${config.getStorageAccountName()}.blob.core.windows.net/${containerName}/${blobName}`;
            res.status(200).json({fileUrl});
        } catch (error) {
            next(error);
        }
    });
});

router.post('/upload/audio',audioStrategy,(req, res, next) => {
    const blobName = getBlobName(req.file.originalname);
    const stream = bufferToStream(req.file.buffer);
    const streamLength = req.file.buffer.length;
    const containerName = 'audio';
    blobService.createBlockBlobFromStream(containerName, blobName, stream, streamLength, (error) => {
        try{
            const fileUrl = `https://${config.getStorageAccountName()}.blob.core.windows.net/${containerName}/${blobName}`;
            res.status(200).json({fileUrl});
        } catch (error) {
            next(error);
        }
    });
});

router.post('/upload/lyric',lyricStrategy,(req,res, next) =>{
    const blobName = getBlobName(req.file.originalname);
    const stream = bufferToStream(req.file.buffer);
    const streamLength = req.file.buffer.length;
    const containerName ='letra';
    blobService.createBlockBlobFromStream(containerName, blobName, stream, streamLength, (error) => {
        try{
            const fileUrl = `https://${config.getStorageAccountName()}.blob.core.windows.net/${containerName}/${blobName}`;
            res.status(200).json({fileUrl});
        } catch (error) {
            next(error);
        }
    });
});

module.exports = router;
