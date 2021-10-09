const express = require('express');
const { filter } = require('../../util');
const { checkApiKey, checkRoles } = require('./../middlewares/auth.handler');

const router = express.Router();
const UserService = require('./../services/user.service');
const service = new UserService();

router.get('/',
    checkApiKey,
    //checkRoles('admin'),
    async (req, res, next) => {
        try{
            let users = await service.find();
            console.log('🟢 User list request');
            users = filter(
                ['id','name','username','email','role'],
                users
            );
            return res.status(200).json(users).end();
        } catch(error) {
            next(error);
        } 
    }
);

router.get('/:id',
    checkApiKey,
    async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await service.findOne(id);
        res.json(user);
    } catch (error) {
        next(error);
    }
});


router.post("/", checkApiKey, async (req, res, next) => {
  try {
    const user = req.body;
    const newUser = await service.create(user);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
});

router.patch('/:id',
    checkApiKey,
    async (req, res, next) => {
    try {
        const { id } = req.params;
        const body = req.body;
        let user = await service.findOne(id);
        
        user = {
            name: body.name || user.name,
            username: body.username || user.username,
            email: body.email || user.email,
            role: body.role || user.role
        };

        await service.update(id, user);
        res.json(user);

    } catch (error) {
        next(error);
    }
});

router.delete('/:id',
    checkApiKey,
    async (req, res, next) => {
    try {
        const { id } = req.params;
        await service.delete(id);
        res.status(201).json({id});

    } catch (error) {
        next(error);
    }
});

module.exports = router;