const boom = require('@hapi/boom');
const Song = require('../models/song.model');

class SongService {

    constructor() {}

    async create(song) {
        const newSong = new Song({...song });
        await newSong.save();
        return newSong;
    }

    async find() {
        const songList = await Song.find();
        return songList;
    }

    async findByMetadata(songName, artist) {
        const song = await Song.findOne({name:`${songName}`, artist:`${artist}`});
        if(!song) {
            throw boom.notFound('Song not found');
        }
        return song;
    }

    async findOne(id) {
        const song = await Song.findById(id);
        if(!song) {
            throw boom.notFound('Song not found');
        }
        return song;
    }

    async update(id, changes) {
        const song = Song.findByIdAndUpdate(id, changes);
        return song;
    }

    async delete(id) {
        const song = Song.findByIdAndDelete(user_id);
        return song;
    }
}

module.exports = SongService;
