const repository = require('../repositories/users.repository');

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const insertUser = async (req, res) => {

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


const 

module.exports = {
    insertUser
};