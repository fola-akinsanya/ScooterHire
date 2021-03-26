const User = require('../src/users')

describe('User objects', () => {
    test('have a name', () => {
        expect(() => new User()).toThrowError('User must have a name')
    })
    test('name length', () => {
        expect(() => new User("")).toThrowError('User must have a name')
    })
    })
