const user = require('../controllers/users.controllers')
const song = require('../controllers/songs.controllers')

describe('getAll', () =>{
    it('Call the user.repository.getAll and return the result', async () =>{
       result = user.getAll();
       expect(result).not.toBeNull()
    })
})
describe('getAll', () =>{
    it('Call the song.repository.getAll and return the result', async () =>{
       result =  song.getAll();
       expect(result).not.toBeNull()
    })
})