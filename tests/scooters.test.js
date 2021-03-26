const { inventoryList } = require('../src/scooters')
const Scooter = require('../src/scooters')

describe('Scooter objects', () => {
    // test('have a model', () => {
    //     expect(() => new Scooter(,"Electric")).toThrowError('Scooter must have a model')
    // })
    test('model name length', () => {
        expect(() => new Scooter("","Electric")).toThrowError('Scooter must have a model')
    })
    // test('inventory list', () => {
    //     const miniscoot = new Scooter('miniscoot',"Electric")
    //     console.log(Scooter.inventoryList)
    //     expect(Scooter.inventoryList).toEqual(['miniscoot'])
    // })
    test('scooter transmission', () => {
        expect(() => new Scooter("newscoot","el")).toThrowError("Scooter must have a transmission")
    })
    })
