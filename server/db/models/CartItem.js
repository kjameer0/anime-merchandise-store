const Sequelize = require('sequelize');
const db = require('../db');
const Product = require('./Product');
const Order = require('./Order');
//note: only delete this comment after:
//1. all table names in code reflect actual table names
const Cart = db.define('cart', {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  // userId: {
  //   type: Sequelize.INTEGER,
  //   references: {
  //     model: "users", // 'users' refers to table name
  //     key: "id", // 'id' refers to column name in users table
  //   },
  // },
  // productId: {
  //   type: Sequelize.INTEGER,
  //   references: {
  //     model: "products", // 'users' refers to table name
  //     key: "id", // 'id' refers to column name in users table
  //   },
  // },
  //   status: {
  //     type: Sequelize.ENUM("PENDING", "ORDERED"),
  //     allowNull: false,
  //     defaultValue: "PENDING",
  //   },
});
Cart.getCart = function (userId, orderId = null) {
  return Cart.findAll({
    where: { userId, orderId: orderId },
    include: Product,
  });
};

Cart.checkout = async function (userId) {
  const cart = await Cart.getCart(userId);
  if (!cart.length) throw 'cart is empty?!';

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const order = await Order.create({ userId, totalPrice });

  cart.forEach((element) => {
    element.setOrder(order);
  });

  return { order, cart };
};
module.exports = Cart;
