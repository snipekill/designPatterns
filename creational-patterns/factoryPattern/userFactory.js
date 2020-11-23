const Shopper = require('./Shopper');
const Employee = require('./Employee');

function userFactory(name, money = 0, type, employer) {
    if(type === "employee")
    {
        return new Employee(name, money, employer);
    }
    return new Shopper(name, money);
}

module.exports = userFactory;