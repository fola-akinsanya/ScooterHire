

class User {
    constructor(name) {
        if (typeof name === 'string' && name.length > 0) {
            this.name = name
        }
        else {throw new Error ('User must have a name');
    }
    }
}

module.exports = User