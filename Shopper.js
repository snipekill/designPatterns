class Shopper {

    constructor(name) {
        this.name = name;
    }

    notify(storeName, discount)
    {
        console.log(`${this.name}, ${discount} at this store ${storeName}`);
    }
}

module.exports = Shopper;
