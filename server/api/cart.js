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
      where: { userId: userId },
      include: [Product],
    });
    res.send(cart);
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
router.post('/', async (req, res, next) => {
  try {
    const userId = req.user;
    req.body.userId = userId;
    const item = await CartItem.create(req.body);
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

router.put('/checkout', requireToken, async (req, res, next) => {
  try {
    const userId = req.user;
    res.status(201).send(await CartItem.checkout(userId));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
