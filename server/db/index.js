//this is the access point for all things database related!

const db = require("./db");

const CartItem = require("./models/CartItem");
const User = require("./models/User");
const Product = require("./models/Product");
const Order = require("./models/Order");
//associations could go here!
CartItem.belongsTo(User);
User.hasMany(CartItem);

CartItem.belongsTo(Product);

Order.hasMany(CartItem);
CartItem.belongsTo(Order);

Order.belongsTo(User);
User.hasMany(Order);

module.exports = {
  db,
  models: {
    User,
    CartItem,
    Product,
    Order,
  },
};
