class Store {

    constructor(name) {
        this.name = name;
        this.subscribers = [];
    }

    subscribe(subscriber){
        this.subscribers.push(subscriber);
    }

    sale(discount) {
        this.subscribers.forEach(observer => observer.notify(this.name, discount));
    }

}

module.exports = Store;
