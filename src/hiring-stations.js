const Scooter = require("./scooters");

class HiringStation {
    static inventoryList = []
    constructor(location) {
        if (typeof location === 'string' && location.length > 0) {
            this.location = location
        }
        else {throw new Error ('Hiring Station must have a location');
    }
}
    addScooter(Scooter) {
        if (typeof Scooter === 'string' && Scooter.length > 0) {
            this.Scooter = Scooter
        }
        else {throw new Error ('Scooter must have a model');
        }
        
    
    }

}

module.exports = HiringStation
