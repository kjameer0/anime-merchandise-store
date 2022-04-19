const Sequelize = require('sequelize')
const db = require('../db')
//note: only delete this comment after:
//1. all table names in code reflect actual table names
const Cart = db.define('cart', {
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    userId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'users', // 'users' refers to table name
            key: 'id', // 'id' refers to column name in users table
         }
      },
      productId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'products', // 'users' refers to table name
            key: 'id', // 'id' refers to column name in users table
         }
      }
  });

   

module.exports = Cart