
class Scooter  {
    static inventoryList = []
    constructor(model,transmission) {
        if (typeof model === 'string' && model.length > 0) {
            this.model = model
            this.constructor.inventoryList.push(model)
        }
        else {throw new Error ('Scooter must have a model');
        }
        if ((transmission ==='Electric' || transmission ==='Manual') && transmission.length > 0) {
            this.transmission = transmission
            this.constructor.inventoryList.push(transmission)
        }
        else {throw new Error ('Scooter must have a transmission');
        }

    }
}

module.exports = Scooter

// throw error using instance of, if not in hiring station list