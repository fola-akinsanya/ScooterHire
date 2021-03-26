const HiringStation = require("./hiring-stations");
const Scooter = require("./scooters");
const User = require("./users");

const Euston = new HiringStation('Euston')
const Hackney = new HiringStation('Hackney')
const Brixton = new HiringStation('Brixton')

const Scooter1= new Scooter('BMW','Electric')
const Scooter2= new Scooter('Merc','Electric')
const Scooter3= new Scooter('Honda','Manual')

const Fola= new User('Fola')
const Jack= new User('Jack')
const Shida= new User('Shida')

Euston.addScooter(Scooter1)
Euston.addScooter(Scooter2)

console.log(Scooter.inventoryList)

console.log(Euston)


module.exports = {Euston, Hackney, Brixton, Scooter1, Scooter2, Scooter3, Fola, Jack, Shida}