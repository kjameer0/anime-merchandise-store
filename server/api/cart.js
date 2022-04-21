const router = require("express").Router();
const {
  models: { User, Product, CartItem },
} = require("../db");
const { requireToken } = require("./utils");

 
router.get("/", requireToken, async (req, res, next) => {
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
  
 router.put("/", requireToken, async (req, res, next) => {
  try {
    let arrayOfCartItems = req.body.cart;
    const userId = req.user.id;
    let newCart = arrayOfCartItems.map(async (item) => {
      let cartItem = await CartItem.findOne({
        where: { userId: userId, productId: item.productId, orderId: null },
      });
      let updatedCartItem = await cartItem.update(item);
      return updatedCartItem;
    });
    res.status(201).send(newCart);
  } catch (error) {
    next(error);
  }
 });
  
 // POST /api/cart
 router.post("/", async (req, res, next) => {
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
 router.delete("/", async (req, res, next) => {
  try {
    const userId = req.user.id
    const cart = await CartItem.findOne({
      where: {
        userId: userId,
        productId: req.body.productId,
        orderId: null
      },
    });
   let destroyedItem = await cart.destroy();
    res.status(200).send(destroyedItem);
  } catch (error) {
    next(error);
  }
 });
  
 module.exports = router;
  
 