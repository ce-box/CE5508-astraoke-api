const User = require('../models/user');

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


const getAll = async () => {
    const userList = await User.find();
    return userList;
};


const getUserById = async (user_id) => {
    const user = await User.findById(user_id);
    return user;
}


const getUserByEmail = async (email) => {
    const user = await User.findOne({'email':`${email}`});
    return user;
}


const updateUser = async (user_id, _user) => {
    const user = User.findByIdAndUpdate(user_id, _user);
    return user;
}


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
