const user = require('../repositories/users.repository')
const song = require('../repositories/songs.repository')

describe('getAll', () =>{
    it('Call the user.repository.getAll and return the result', async () =>{
       result = user.getAll();
       expect(result).not.toBeNull()
    })
    it('call getAll and handles an error', async ()=>{
        expect(user.getAll()).rejects.toThrow(
            'Not found'
        )
    })
})

describe('getAll', () =>{
    it('Call the song.repository.getAll and return the result', async () =>{
       result =  song.getAll();
       expect(result).not.toBeNull()
    })
    it('call getAll and handles an error', async ()=>{
        expect(song.getAll()).rejects.toThrow(
            'Not found'
        )
    })
})
// describe('Profile Tab Exists and Clickable: /settings/user', () =>{
//     test('Call the song.repository.getSong by id and return the result', async (done) =>{
//         await expect(user.getUserById('61481c1eae85ecb5916aedce')).resolves.toBeNull();
//         done();
//     },30000)
// })
// const mockUser = new User({
//     name: 'user.name',
//     username: 'user.username',
//     pass: 'user.pass',
//     email: 'user.email',
//     premium: 'user.premium'
// });
// describe('Profile Tab Exists and Clickable: /settings/user', () =>{
//     test('Call the song.repository.getSong by id and return the result', async (done) =>{
//         await expect(user.insertUser(mockUser)).resolves.toBeNull();
//         done();
//     },10000)
// })