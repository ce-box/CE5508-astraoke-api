const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

const Stat = require('../models/stat.model');

class StatService {

    constructor() {}

    async create(stat) {

        const newStat = new Stat({
            ...stat
        });
    
        await newStat.save();
        stat = newStat.toObject();
        return stat;
    }

    async find(songId) {
        const statsList = await Stat.find({ 'songId': `${songId}` });
        return statsList;
    }

    
}

module.exports = StatService;
