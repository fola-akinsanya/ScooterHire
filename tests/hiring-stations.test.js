const HiringStation = require('../src/hiring-stations')

describe('HiringStation objects', () => {
    test('have a location', () => {
        expect(() => new HiringStation()).toThrowError('Hiring Station must have a location')
    })
    test('Hiring station name length', () => {
        expect(() => new HiringStation("")).toThrowError('Hiring Station must have a location')
    })
    })
