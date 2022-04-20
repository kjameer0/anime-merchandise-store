//this is the access point for all things database related!

const db = require('./db');

const CartItem = require('./models/CartItem');
const User = require('./models/User');
const Product = require('./models/Product');
//associations could go here!
CartItem.belongsTo(User);
CartItem.belongsTo(Product);

module.exports = {
  db,
  models: {
    User,
    CartItem,
    Product,
  },
};
