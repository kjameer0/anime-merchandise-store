const router = require('express').Router();
const {
  models: { User, Product, CartItem, Order },
} = require('../db');
const { requireToken } = require('./utils');

router.get('/', requireToken, async (req, res, next) => {
  try {
    //get a list of the whole cart
    const userId = req.user.id;
    const cart = await CartItem.findAll({
      where: { userId: userId, orderId: null },
      include: [Product],
    });
    res.send(cart.sort((a,b) => Date.parse(b.createdAt)-Date.parse(a.createdAt)));
  } catch (error) {
    next(error);
  }
});

router.put('/', requireToken, async (req, res, next) => {
  try {
    const { id } = req.body;
    const item = await CartItem.findOne({ where: { id }, include: [Product] });
    const updatedItem = await item.update({ quantity: req.body.quantity });
    res.status(201).send(updatedItem);
  } catch (error) {
    next(error);
  }
});


// POST /api/cart
router.post('/', requireToken, async (req, res, next) => {
  try {
    const userId = req.user;
    const [item, created] = await CartItem.findOrCreate({
      where: { productId: req.body.id, orderId: null },
    });
    if(created && req.body.quantity) {
      await item.update({quantity: req.body.quantity})
    }
    if (!created) await item.update({quantity: item.quantity+req.body.quantity || item.quantity+1})
    await item.setUser(userId);
    res.status(201).send(item);
  } catch (error) {
    next(error);
  }
});

// DELETE /api/cart/:id
router.delete('/', requireToken, async (req, res, next) => {
  try {
    const cart = await CartItem.findByPk(req.body.id);
    await cart.destroy();
    res.status(200).send(cart);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
