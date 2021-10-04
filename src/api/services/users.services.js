const repository = require('../repositories/users.repository');
const {filterObject} = require('../../util');

const filter = ['id','name','username','email','premium'];


const signup = async (req, res) => {

    const user = {
        name: req.body.name,
        username: req.body.username,
        pass: req.body.pass,
        email: req.body.email,
        premium: req.body.premium
    };

    try {
        // Check for an existing user
        const found = await repository.getUserByEmail(user.email);
        
        if(found) {
            console.log(`🟠 User with email: ${user.email} already exists`);
            return res.status(403).send('User already exists').end();
        }

        // Create new user
        console.log(`🟢 Creating new user: ${user}`);
        let newUser = await repository.insertUser(user);
        newUser = filterObject(filter, newUser);
        return res.status(201).json(newUser).end();
        
    } catch(err) {
        return res.status(500).send(err.message).end();
    }   
    
}


const login = async (req, res) => {
    const credentials = {
        email: req.body.email,
        pass: req.body.pass
    };

    try {
        // Check if user exists
        let user = await repository.getUserByEmail(credentials.email);
        
        // TODO: This must be changed to keycloack authentication.
        // User authentication
        if(credentials.pass === user.pass) {
            console.log(`🟢 User successfully authenticated`);
            user = filterObject(filter, user);
            return res.status(202).json(user).end();    
        } else {
            console.log(`🔴 Wrong password`);
            return res.status(401).end(); 
        }

    } catch (err) {
        console.log(`🔴 User login is not possible. The email:${credentials.email} is not registered in the system.`);
        return res.status(404).end();
    }

    
};


const getAll = async (req, res) => {
    try {
        let users = await repository.getAll();
        console.log('🟢 User list request');
        users = filterObject(filter, users);
        return res.status(200).json(users).end();

    } catch(err) {
        console.log(`🔴 Internal Server Error`);
        return res.status(500).send(err.message).end();
    } 
};


const getById = async (req, res) => {
    try {
        const id = req.params.id;
        let user = await repository.getUserById(id);

        if(user) {
            console.log(`🟢 User found`);
            user = filterObject(filter, user);
            return res.status(200).json(user).end();
        } 
        console.log(`🟠 User not found`);
        return res.status(404).end();

    } catch(err) {
        console.log(`🔴 Internal Server Error`);
        return res.status(500).send(err.message).end();
    } 
};


const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        let user = await repository.getUserById(id);

        if(user) {
            repository.deleteUser(id);
            user = filterObject(filter, user);
            console.log(`🟢 User removed from DB`);
            return res.status(200).json(user).end();
        } 
        console.log(`🟠 User not found`);
        return res.status(404).end();

    } catch(err) {
        console.log(`🔴 Internal Server Error`);
        return res.status(500).send(err.message).end();
    } 
};


const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        let user = await repository.getUserById(id);

        if(user) {
            
            user = {
                name: req.body.name || user.name,
                username: req.body.username || user.username,
                email: req.body.email || user.email,
                premium: req.body.premium || user.premium
            };

            repository.updateUser(id, user);
            user = filterObject(filter, user);
            console.log(`🟢 User updated`);
            return res.status(200).json(user).end();
        } 
        console.log(`🟠 User not found`);
        return res.status(404).end();

    } catch(err) {
        console.log(`🔴 Internal Server Error`);
        return res.status(500).send(err.message).end();
    } 
};


module.exports = {
    signup,
    login,
    getAll,
    getById,
    updateUser,
    deleteUser
};