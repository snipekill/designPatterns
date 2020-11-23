const Person = require('./Person');

class PersonBuilder{
    constructor(name = 'unnamed Person')
    {
        this.name = name;
    }
    makeEmployee()
    {
        this.isEmployee = true;
        return this;
    }
    makeManager(hours = 60)
    {
        this.isManager = true;
        this.hours = hours;
        return this;
    }
    makePartTime(hours = 20)
    {
        this.hours = hours;
        return this;
    }
    withMoney(money = 0)
    {
        this.money = money;
        return this;
    }
    withList(list=[])
    {
        this.shoppingList = list;
        return this;
    }
    build()
    {
        return new Person(this);
    }
}

module.exports = PersonBuilder;