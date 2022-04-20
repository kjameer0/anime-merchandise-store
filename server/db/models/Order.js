const db = require("../db");
const Sequelize = require("sequelize");

const Order = db.define("order", {
  totalPrice: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Order;
