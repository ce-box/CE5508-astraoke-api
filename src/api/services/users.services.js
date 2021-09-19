const repository = require('../repositories/users.repository');

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
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
            throw new Error('User already exists');
        }

        // Create new user
        console.log(`🟢 Creating new user: ${user}`);
        const newUser = await repository.insertUser(user);
        return res.status(200).json(newUser).end();
        
    } catch(err) {
        return res.status(500).send(err.message).end();
    }   
    
}


/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const login = async (req, res) => {
    const credentials = {
        email: req.body.email,
        pass: req.body.pass
    };

    try {
        // Check if user exists
        const found = await repository.getUserByEmail(credentials.email); 
        
        // TODO: This must be changed to keycloack authentication.
        // User authentication
        if(credentials.pass === found.pass) {
            console.log(`🟢 User successfully authenticated`);
            return res.status(200).end();    
        } 

        console.log(`🔴 Wrong password`);
        return res.status(401).end(); 

    } catch (err) {
        console.log(`🔴 User login is not possible. The email:${credentials.email} is not registered in the system.`);
        return res.status(401).end();
    }

    
};

module.exports = {
    signup,
    login
};