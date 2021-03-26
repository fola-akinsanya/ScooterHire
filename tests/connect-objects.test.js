const { Euston, Brixton, Hackney } = require('../src/connect-objects');


describe('Euston objects', () => {
    test('have scooters', () => {
        expect(Euston.scooters).toEqual(["Scooter1", "Scooter2"])
})
})