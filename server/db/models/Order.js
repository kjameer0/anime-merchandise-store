const db = require('../db');
const Sequelize = require('sequelize');
const CartItem = require('./CartItem');

const Order = db.define('order', {
  totalPrice: {
    type: Sequelize.INTEGER,
  },
});

Order.checkout = async function (userId) {
  const orderInfo = await CartItem.getCart(userId);
  if (!orderInfo.length) throw 'cart is empty?!';

  const totalPrice = orderInfo.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const order = await Order.create({ userId, totalPrice });

  orderInfo.forEach((element) => {
    element.setOrder(order);
  });

  return { order, orderInfo };
};
module.exports = Order;
