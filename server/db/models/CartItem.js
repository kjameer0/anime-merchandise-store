const Sequelize = require('sequelize');
const db = require('../db');
const Product = require('./Product');
//note: only delete this comment after:
//1. all table names in code reflect actual table names
const Cart = db.define('cart', {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
});

Cart.getCart = function (userId, orderId = null) {
  return Cart.findAll({
    where: { userId, orderId: orderId },
    include: Product,
  });
};

module.exports = Cart;
