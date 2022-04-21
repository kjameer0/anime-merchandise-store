const router = require("express").Router();
const {
  models: { User, Product, CartItem },
} = require("../db");
const { requireToken } = require("./utils");

// GET /api/cart
router.get("/", requireToken, async (req, res, next) => {
  try {
    // const userId = req.user ? req.user.id : 1;
    const userId = req.user ? req.user.id : 1;
    const cart = await CartItem.findAll({
      where: { userId: userId },
      include: [Product],
    });

    res.send(cart);
  } catch (error) {
    next(error);
  }
});

// GET /api/cart/:id
router.get("/:userId", async (req, res, next) => {
  try {
    const userId = req.user ? req.user.id : 1;
    const user = await User.findByPk(userId);
    const items = await user.getProducts();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

router.put("/", async (req, res, next) => {
  try {
    const userId = req.user ? req.user.id : 1;
    const cart = await CartItem.findOne({
      where: {
        userId: userId,
      },
    });
    await CartItem.update({ status: "ORDERED" }, { where: { id: cart.id } });
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

// POST /api/cart
router.post("/:id", async (req, res, next) => {
  try {
    const userId = req.user ? req.user.id : 1;
    const cart = await CartItem.findOrCreate({
      where: {
        userId: userId,
      },
    });
    await cart[0].addProduct(req.params.id).then(() => res.sendStatus(200));
  } catch (error) {
    next(error);
  }
});

// DELETE /api/cart/:id
router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const userId = req.user ? req.user.id : 1;
    const cart = await CartItem.findOne({
      where: {
        userId: userId,
      },
    });
    await cart.removeProduct(id);
    res.status(200).send(id);
  } catch (error) {
    next(error);
  }
});
// PUT /api/cart/:id
router.put("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const cartItem = await CartItem.findByPk(id);
    const updatedItem = await cartItem.update(req.body);
    res.send(updatedItem);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
