const auth = require('../middleware/auth.middleware');
describe('Test the password function', () =>{
    it('sent a valid password', () => {
        expect(auth.passwordValidatorTest('eERTTcacovao07*')).toBeTruthy();
    })    
})
describe('Test the password function', () =>{
    it('sent a wrong password', () => {
        expect(auth.passwordValidatorTest('eERTTcacovao07/')).toBeFalsy();
    })    
})