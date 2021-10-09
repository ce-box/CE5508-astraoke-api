const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

const User = require('../models/user.model');

class UserService {

    constructor() {}

    async create(user) {
        
        if(await this.findByEmail(user.email)) {
            throw boom.conflict('Email already exists');
        }

        const hash = await bcrypt.hash(user.password, 10);
        const newUser = new User({
            ...user,
            password: hash
        });
    
        await newUser.save();
        user = newUser.toObject();
        delete user.password;
        return user;
    }

    async find() {
        const userList = await User.find();
        return userList;
    }

    async findByEmail(email) {
        let user = await User.findOne({'email':`${email}`});
        user = user.toObject();
        delete user.password;
        return user;
    }

    async findOne(id) {
        let user = await User.findById(id);
        if(!user) {
            throw boom.notFound('User not found');
        }
        user = user.toObject();
        delete user.password;
        return user;
    }

    async update(id, changes) {
        const user = User.findByIdAndUpdate(id, changes);
        return user;
    }

    async delete(id) {
        const user = User.findByIdAndDelete(user_id);
        user = user.toObject();
        delete user.password;
        return user;
    }
}

module.exports = UserService;
