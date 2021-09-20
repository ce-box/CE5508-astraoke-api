const User = require('../models/user');

/**
 * 
 * @param {*} user 
 * @returns 
 */
const insertUser = async (user) => {
    const newUser = new User({
        name: user.name,
        username: user.username,
        pass: user.pass,
        email: user.email,
        premium: user.premium
    });

    await newUser.save();
    return newUser;
}


/**
 * 
 * @returns 
 */
const getAll = async () => {
    const userList = await User.find();
    return userList;
};


/**
 * 
 * @param {*} user_id 
 * @returns 
 */
const getUserById = async (user_id) => {
    const user = await User.findById(user_id);
    return user;
}


/**
 * 
 * @param {*} email 
 * @returns 
 */
const getUserByEmail = async (email) => {
    const user = await User.findOne({'email':`${email}`});
    return user;
}


/**
 * 
 * @param {*} user_id 
 * @param {*} updatedUser 
 */
const updateUser = async (user_id, _user) => {
    const user = User.findByIdAndUpdate(user_id, _user);
    return user;
}


/**
 * 
 * @param {*} user_id 
 * @returns 
 */
const deleteUser = async (user_id) => {
    const user = User.findByIdAndDelete(user_id);
    return user;
}


module.exports = {
    insertUser,
    getAll,
    getUserById,
    getUserByEmail,
    updateUser,
    deleteUser
};
