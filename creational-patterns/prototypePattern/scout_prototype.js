// Intent Specify the kinds of objects to create using prototypical instance and create new objects by copying this instance

var Shopper = require('./Shopper');

var scout = new Shopper();
scout.addItemToList('camping knife');
scout.addItemToList('tent');
scout.addItemToList('backpack');
scout.addItemToList('map');

module.exports = scout;
