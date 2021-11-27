const express = require('express');

const router = express.Router();
const StatService = require('../services/stat.service');
const service = new StatService();

router.get('/:id',
    async (req, res, next) => {
        try{
            const {id} = req.params;
            const stats = await service.find(id);
            console.log('🟢 Scores list request');
            stats.sort( (a,b) => (a.score > b.score) ? -1:1);
            return res.status(200).json(stats).end();
        } catch(error) {
            next(error);
        } 
    }
);


router.post("/", 
    async (req, res, next) => {
        try {
            const stat = req.body;
            const newStat = await service.create(stat);
            res.status(201).json(newStat);
        } catch (error) {
            next(error);
        }
});

module.exports = router;